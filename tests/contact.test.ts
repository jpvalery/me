import assert from "node:assert/strict";
import { test } from "node:test";
import { MAX } from "../src/lib/contact.ts";
import {
	createContactHandler,
	MAX_BODY_BYTES,
} from "../src/lib/contact-handler.ts";

const config = {
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
};
const human = async () => ({ isBot: false });

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
	return { request, url };
}

function harness(botCheck: () => Promise<unknown> = human) {
	const messages: Record<string, unknown>[] = [];
	const requests: string[] = [];
	const fetcher: typeof fetch = async (input, init) => {
		assert.ok(init?.signal, "upstream requests must have a timeout signal");
		requests.push(String(input));
		messages.push(JSON.parse(String(init?.body)));
		return Response.json({ delivery_id: "test" });
	};
	const checkBot = async () => {
		requests.push("botid");
		return botCheck() as Promise<{ isBot: boolean }>;
	};
	return {
		handler: createContactHandler(config, fetcher, checkBot),
		messages,
		requests,
	};
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
	const oversized = JSON.stringify({
		...valid,
		padding: "💛".repeat(MAX_BODY_BYTES / 4 + 1),
	});
	assert.ok(oversized.length < MAX_BODY_BYTES);
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
	assert.equal(reads, MAX_BODY_BYTES / 4096 + 1);
	assert.equal(requests.length, 0);
});

test("accepts exactly the byte limit and Unicode split across stream chunks", async () => {
	const { handler, messages } = harness();
	const empty = JSON.stringify({ ...valid, padding: "" });
	const exact = JSON.stringify({
		...valid,
		padding: "x".repeat(MAX_BODY_BYTES - Buffer.byteLength(empty)),
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

test("BotID failures and malformed verdicts return JSON errors without sending", async (t) => {
	const logged = t.mock.method(console, "error", () => {});
	for (const botCheck of [
		async () => {
			throw new TypeError("network failure");
		},
		async () => {
			throw new Error("The 'x-vercel-oidc-token' header is missing");
		},
		async () => null,
		async () => ({}),
		async () => ({ isBot: "false" }),
	]) {
		const { handler, messages } = harness(botCheck);
		const response = await handler(context(JSON.stringify(valid)));
		assert.equal(response.status, 503);
		assert.match((await response.json()).error, /Bot check is unavailable/);
		assert.equal(messages.length, 0);
	}
	assert.equal(logged.mock.callCount(), 5, "each failure is logged once");
	const { handler, messages } = harness(async () => ({ isBot: true }));
	const response = await handler(context(JSON.stringify(valid)));
	assert.equal(response.status, 403);
	assert.match((await response.json()).error, /Bot check failed/);
	assert.equal(messages.length, 0);
	assert.equal(logged.mock.callCount(), 5, "detected bots are not errors");
});

test("stops waiting for BotID after the timeout", async (t) => {
	const logged = t.mock.method(console, "error", () => {});
	t.mock.timers.enable({ apis: ["setTimeout"] });
	let started!: () => void;
	const checking = new Promise<void>((resolve) => {
		started = resolve;
	});
	const { handler, messages } = harness(() => {
		started();
		return new Promise(() => {});
	});
	const pending = handler(context(JSON.stringify(valid)));
	await checking;
	t.mock.timers.tick(10_000);
	const response = await pending;
	assert.equal(response.status, 503);
	assert.match((await response.json()).error, /Bot check is unavailable/);
	assert.equal(messages.length, 0);
	assert.match(String(logged.mock.calls[0].arguments[1]), /timed out/);
});

test("email timeouts and failures never report success", async (t) => {
	const logged = t.mock.method(console, "error", () => {});
	for (const timeout of [true, false]) {
		const fetcher: typeof fetch = async (_input, init) => {
			assert.ok(init?.signal);
			if (timeout) throw new DOMException("timeout", "TimeoutError");
			return new Response(null, { status: 500 });
		};
		const response = await createContactHandler(
			config,
			fetcher,
			human,
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
		return Response.json({ delivery_id: "test" });
	};
	const unconfigured = createContactHandler(
		{ ...config, apiKey: undefined },
		fetcher,
		human,
	);
	assert.equal((await unconfigured(context(JSON.stringify(valid)))).status, 503);
	const noPhoto = createContactHandler(
		{ ...config, photoEmail: undefined },
		fetcher,
		human,
	);
	const photo = { ...valid, _type: "photography", reason: "project-pitch" };
	assert.equal((await noPhoto(context(JSON.stringify(photo)))).status, 503);
	const output = logged.mock.calls.map((c) => String(c.arguments[0]));
	assert.match(output[0], /CIO_APP_APIKEY/);
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
	const fetcher: typeof fetch = async () =>
		Response.json({ delivery_id: "test" });
	const genericOnly = createContactHandler(
		{ ...config, photoEmail: undefined },
		fetcher,
		human,
	);
	assert.equal((await genericOnly(context(JSON.stringify(valid)))).status, 200);
});

test("accepts a full-length message and rejects a longer one", async () => {
	const { handler } = harness();
	const full = { ...valid, message: "é".repeat(MAX.message) };
	assert.equal((await handler(context(JSON.stringify(full)))).status, 200);
	const tooLong = { ...valid, message: "x".repeat(MAX.message + 1) };
	assert.equal((await handler(context(JSON.stringify(tooLong)))).status, 400);
});
