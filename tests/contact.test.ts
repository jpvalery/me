import assert from "node:assert/strict";
import { test } from "node:test";
import { createContactHandler } from "../src/lib/contact-handler.ts";

const config = {
	turnstileSecret: "test-secret",
	apiKey: "test-key",
	genericEmail: "generic@example.test",
	photoEmail: "photo@example.test",
};
const valid = {
	_type: "generic",
	name: "Jp",
	email: "sender@example.test",
	reason: "say-hi",
	message: "Bonjour!",
	checked: true,
	"cf-turnstile-response": "test-token",
};

function context(body: BodyInit, headers: Record<string, string> = {}) {
	const url = new URL("https://jpvalery.me/api/send");
	const request = new Request(url, {
		method: "POST",
		body,
		duplex: "half",
		headers: {
			Origin: url.origin,
			"Content-Type": "application/json",
			...headers,
		},
	} as RequestInit);
	return { request, url, clientAddress: "127.0.0.1" };
}

function harness(
	verification: () => Promise<Response> = async () =>
		Response.json({ success: true }),
) {
	const messages: Record<string, unknown>[] = [];
	const requests: string[] = [];
	const fetcher: typeof fetch = async (input, init) => {
		assert.ok(init?.signal, "upstream requests must have a timeout signal");
		requests.push(String(input));
		if (String(input).includes("siteverify")) return verification();
		messages.push(JSON.parse(String(init?.body)));
		return Response.json({ delivery_id: "test" });
	};
	return { handler: createContactHandler(config, fetcher), messages, requests };
}

test("valid messages do not depend on client clocks or tab age", async () => {
	const { handler, messages } = harness();
	for (const ts of [undefined, Date.now() + 300_000, Date.now() - 90_000_000]) {
		const response = await handler(context(JSON.stringify({ ...valid, ts })));
		assert.equal(response.status, 200);
	}
	assert.equal(messages.length, 3);
	assert.equal(messages[0].to, config.genericEmail);
	assert.deepEqual(messages[0].message_data, {
		_type: "generic",
		name: "Jp",
		email: valid.email,
		reason: "say-hi",
		message: "Bonjour!",
		checked: true,
	});
});

test("unknown and inherited form names return 400 without contacting services", async () => {
	const { handler, requests } = harness();
	for (const type of [
		"constructor",
		"__proto__",
		"toString",
		"unknown",
		[],
		{},
	]) {
		const response = await handler(
			context(JSON.stringify({ ...valid, _type: type })),
		);
		assert.equal(response.status, 400);
	}
	assert.equal(requests.length, 0);
});

test("rejects malformed JSON and invalid fields without contacting services", async () => {
	const { handler, requests } = harness();
	for (const body of [
		"{",
		"null",
		"[]",
		"42",
		JSON.stringify({ ...valid, email: "invalid" }),
		JSON.stringify({ ...valid, checked: false }),
	]) {
		assert.equal((await handler(context(body))).status, 400);
	}
	assert.equal(requests.length, 0);
});

test("honeypot succeeds silently without sending mail", async () => {
	const { handler, requests } = harness();
	assert.equal(
		(await handler(context(JSON.stringify({ ...valid, nickname: "bot" }))))
			.status,
		200,
	);
	assert.equal(requests.length, 0);
});

test("enforces the byte limit for Unicode and cancels oversized streams", async () => {
	const { handler, requests } = harness();
	const oversized = JSON.stringify({ ...valid, padding: "💛".repeat(2500) });
	assert.ok(oversized.length < 8192);
	assert.equal((await handler(context(oversized))).status, 413);
	let cancelled = false;
	let reads = 0;
	const stream = new ReadableStream(
		{
			pull(controller) {
				reads++;
				controller.enqueue(new Uint8Array(4096).fill(32));
			},
			cancel() {
				cancelled = true;
			},
		},
		{ highWaterMark: 0 },
	);
	assert.equal((await handler(context(stream))).status, 413);
	assert.equal(cancelled, true);
	assert.equal(reads, 3);
	assert.equal(requests.length, 0);
});

test("accepts exactly 8 KB and Unicode split across stream chunks", async () => {
	const { handler, messages } = harness();
	const empty = JSON.stringify({ ...valid, padding: "" });
	const exact = JSON.stringify({
		...valid,
		padding: "x".repeat(8192 - Buffer.byteLength(empty)),
	});
	assert.equal((await handler(context(exact))).status, 200);
	const bytes = new TextEncoder().encode(
		JSON.stringify({ ...valid, name: "Montréal 💛" }),
	);
	let offset = 0;
	const stream = new ReadableStream({
		pull(controller) {
			if (offset === bytes.length) controller.close();
			else controller.enqueue(bytes.slice(offset, ++offset));
		},
	});
	assert.equal((await handler(context(stream))).status, 200);
	assert.equal(
		(messages[1].message_data as Record<string, unknown>).name,
		"Montréal 💛",
	);
});

test("verification outages and malformed responses return JSON errors without sending", async (t) => {
	const logged = t.mock.method(console, "error", () => {});
	for (const verification of [
		async () => {
			throw new TypeError("network failure");
		},
		async () => {
			throw new DOMException("timeout", "TimeoutError");
		},
		async () => new Response("unavailable", { status: 503 }),
		async () => new Response("invalid JSON"),
		async () => Response.json(null),
		async () => Response.json({ success: "true" }),
	]) {
		const { handler, messages } = harness(verification);
		const response = await handler(context(JSON.stringify(valid)));
		assert.equal(response.status, 503);
		assert.match((await response.json()).error, /Bot check is unavailable/);
		assert.equal(messages.length, 0);
	}
	assert.equal(logged.mock.callCount(), 6, "each outage is logged once");
	const { handler, messages } = harness(async () =>
		Response.json({ success: false }),
	);
	assert.equal((await handler(context(JSON.stringify(valid)))).status, 400);
	assert.equal(messages.length, 0);
	assert.equal(logged.mock.callCount(), 6, "rejected tokens are not errors");
});

test("email timeouts and failures never report success", async (t) => {
	const logged = t.mock.method(console, "error", () => {});
	for (const timeout of [true, false]) {
		const fetcher: typeof fetch = async (input, init) => {
			assert.ok(init?.signal);
			if (String(input).includes("siteverify"))
				return Response.json({ success: true });
			if (timeout) throw new DOMException("timeout", "TimeoutError");
			return new Response(null, { status: 500 });
		};
		const response = await createContactHandler(
			config,
			fetcher,
		)(context(JSON.stringify(valid)));
		assert.equal(response.status, 502);
		assert.match((await response.json()).error, /Could not send/);
	}
	assert.equal(logged.mock.callCount(), 2);
	const output = logged.mock.calls.flatMap((c) => c.arguments).join(" ");
	assert.match(output, /Customer\.io .*failed/);
	assert.doesNotMatch(output, /sender@example\.test/);
});

test("missing configuration returns 503 and logs the setting to fix", async (t) => {
	const logged = t.mock.method(console, "error", () => {});
	const requests: string[] = [];
	const fetcher: typeof fetch = async (input) => {
		requests.push(String(input));
		return Response.json({ success: true });
	};
	const unconfigured = createContactHandler(
		{ ...config, turnstileSecret: undefined },
		fetcher,
	);
	assert.equal((await unconfigured(context(JSON.stringify(valid)))).status, 503);
	const noPhoto = createContactHandler(
		{ ...config, photoEmail: undefined },
		fetcher,
	);
	const photo = { ...valid, _type: "photography", reason: "project-pitch" };
	assert.equal((await noPhoto(context(JSON.stringify(photo)))).status, 503);
	const output = logged.mock.calls.map((c) => String(c.arguments[0]));
	assert.match(output[0], /TURNSTILE_SECRET_KEY/);
	assert.match(output[1], /EMAIL_CONTACT_PHOTO/);
	assert.equal(requests.length, 0);
});

test("rejects other origins, schemes, ports and content types", async () => {
	const { handler, requests } = harness();
	for (const Origin of [
		"https://example.com",
		"https://jpvalery.me:444",
		"http://jpvalery.me",
		"null",
		"",
	]) {
		assert.equal(
			(await handler(context(JSON.stringify(valid), { Origin }))).status,
			403,
		);
	}
	assert.equal(
		(
			await handler(
				context(JSON.stringify(valid), { "Content-Type": "application/jsonp" }),
			)
		).status,
		415,
	);
	assert.equal(requests.length, 0);
});

test("routes each form to its recipient and allows generic without photo configuration", async () => {
	const { handler, messages } = harness();
	assert.equal(
		(
			await handler(
				context(
					JSON.stringify({
						...valid,
						_type: "photography",
						reason: "project-pitch",
					}),
				),
			)
		).status,
		200,
	);
	assert.equal(
		(await handler(context(JSON.stringify({ ...valid, _type: "date" })))).status,
		200,
	);
	assert.equal(messages[0].to, config.photoEmail);
	assert.equal(messages[1].to, config.genericEmail);
	const fetcher: typeof fetch = async () => Response.json({ success: true });
	const genericOnly = createContactHandler(
		{ ...config, photoEmail: undefined },
		fetcher,
	);
	assert.equal((await genericOnly(context(JSON.stringify(valid)))).status, 200);
});
