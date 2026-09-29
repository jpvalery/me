import { forms, schemaFor } from "./contact.ts";

const MAX_BODY_BYTES = 8 * 1024;
const REQUEST_TIMEOUT_MS = 10_000;
const ALLOWED_ORIGINS = new Set([
	"https://jpvalery.me",
	"https://www.jpvalery.me",
]);

interface ContactConfig {
	turnstileSecret?: string;
	apiKey?: string;
	genericEmail?: string;
	photoEmail?: string;
	dateEmail?: string;
}

interface ContactRequest {
	request: Request;
	url: URL;
	clientAddress: string;
}

export const json = (body: unknown, status = 200) =>
	new Response(JSON.stringify(body), {
		status,
		headers: {
			"Content-Type": "application/json",
			"Cache-Control": "no-store",
		},
	});

function sameOrigin(request: Request, url: URL) {
	const origin = request.headers.get("Origin");
	if (!origin) return false;
	return origin === url.origin || ALLOWED_ORIGINS.has(origin);
}

class PayloadTooLarge extends Error {}

/** Stop reading as soon as the byte limit is crossed, including chunked bodies. */
async function readBody(request: Request) {
	const reader = request.body?.getReader();
	if (!reader) return "";
	const decoder = new TextDecoder("utf-8", { fatal: true });
	let bytes = 0;
	let body = "";
	try {
		while (true) {
			const { done, value } = await reader.read();
			if (done) break;
			bytes += value.byteLength;
			if (bytes > MAX_BODY_BYTES) throw new PayloadTooLarge();
			body += decoder.decode(value, { stream: true });
		}
		return body + decoder.decode();
	} catch (error) {
		await reader.cancel().catch(() => {});
		throw error;
	} finally {
		reader.releaseLock();
	}
}

async function verifyTurnstile(
	secret: string,
	token: string,
	ip: string,
	fetcher: typeof fetch,
): Promise<boolean | null> {
	try {
		const res = await fetcher(
			"https://challenges.cloudflare.com/turnstile/v0/siteverify",
			{
				method: "POST",
				signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
				body: new URLSearchParams({ secret, response: token, remoteip: ip }),
			},
		);
		if (!res.ok) {
			console.error(`Turnstile verification failed: HTTP ${res.status}`);
			return null;
		}
		const data: unknown = await res.json();
		if (
			!data ||
			typeof data !== "object" ||
			!("success" in data) ||
			typeof data.success !== "boolean"
		) {
			console.error("Turnstile verification returned an unexpected response");
			return null;
		}
		return data.success;
	} catch (error) {
		console.error("Turnstile verification failed:", error);
		return null;
	}
}

export function createContactHandler(
	config: ContactConfig,
	fetcher: typeof fetch = fetch,
) {
	return async ({ request, url, clientAddress }: ContactRequest) => {
		if (!config.turnstileSecret || !config.apiKey) {
			console.error(
				"Contact form is not configured: set TURNSTILE_SECRET_KEY and CIO_APP_APIKEY",
			);
			return json({ error: "The contact form is unavailable right now" }, 503);
		}
		if (!sameOrigin(request, url)) return json({ error: "Forbidden" }, 403);
		if (
			request.headers.get("Content-Type")?.split(";", 1)[0].trim() !==
			"application/json"
		)
			return json({ error: "Unsupported content type" }, 415);

		let payload: unknown;
		try {
			payload = JSON.parse(await readBody(request));
		} catch (error) {
			return error instanceof PayloadTooLarge
				? json({ error: "Payload too large" }, 413)
				: json({ error: "Invalid request" }, 400);
		}
		if (!payload || typeof payload !== "object" || Array.isArray(payload))
			return json({ error: "Invalid request" }, 400);

		const type = (payload as Record<string, unknown>)._type;
		if (typeof type !== "string" || !Object.hasOwn(forms, type))
			return json({ error: "Invalid request" }, 400);
		const def = forms[type];

		// Honeypot: pretend success so bots don't learn they were caught.
		if ("nickname" in payload && payload.nickname)
			return json({ result: "Success" });

		const parsed = schemaFor(def).safeParse(payload);
		if (!parsed.success)
			return json({ error: "Please check the form and try again" }, 400);
		const data = parsed.data;
		const to =
			type === "photography"
				? config.photoEmail
				: type === "date"
					? (config.dateEmail ?? config.genericEmail)
					: config.genericEmail;
		if (!to) {
			console.error(
				`Contact form "${type}" has no recipient: set ${type === "photography" ? "EMAIL_CONTACT_PHOTO" : "EMAIL_CONTACT_GENERIC"}`,
			);
			return json({ error: "The contact form is unavailable right now" }, 503);
		}

		const verified = await verifyTurnstile(
			config.turnstileSecret,
			data["cf-turnstile-response"],
			clientAddress,
			fetcher,
		);
		if (verified === null)
			return json({ error: "Bot check is unavailable, please try again" }, 503);
		if (!verified)
			return json({ error: "Bot check failed, please try again" }, 400);

		const { nickname: _n, "cf-turnstile-response": _t, ...messageData } = data;
		const sent = await fetcher("https://api.customer.io/v1/send/email", {
			method: "POST",
			signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
			headers: {
				Authorization: `Bearer ${config.apiKey}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				transactional_message_id: "form_jpvaleryme",
				to,
				identifiers: { email: data.email },
				message_data: messageData,
			}),
		}).catch((error: unknown) => {
			console.error("Customer.io request failed:", error);
			return null;
		});

		if (!sent?.ok) {
			// Status only: the response may echo the sender's details.
			if (sent) console.error(`Customer.io send failed: HTTP ${sent.status}`);
			return json({ error: "Could not send your message, please try again" }, 502);
		}
		return json({ result: "Success" });
	};
}
