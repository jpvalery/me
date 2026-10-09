import { checkBotId } from "botid/server";
import { forms, schemaFor } from "./contact.ts";

// Fits a full-length message in any script
export const MAX_BODY_BYTES = 16 * 1024;
const REQUEST_TIMEOUT_MS = 10_000;
const ALLOWED_ORIGINS = new Set([
	"https://jpvalery.me",
	"https://www.jpvalery.me",
]);

interface ContactConfig {
	apiKey?: string;
	genericEmail?: string;
	photoEmail?: string;
	dateEmail?: string;
}

type BotCheck = (request: Request) => Promise<{ isBot: boolean }>;

// On Vercel, BotID reads the request from the function context; outside
// Next.js, `astro dev` has none, so pass the headers for local checks.
const checkRequest: BotCheck = (request) =>
	checkBotId({
		advancedOptions: { headers: Object.fromEntries(request.headers) },
	});

interface ContactRequest {
	request: Request;
	url: URL;
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

/** True for a bot, false for a person, null when BotID gives no verdict. */
async function detectBot(
	checkBot: BotCheck,
	request: Request,
): Promise<boolean | null> {
	// checkBotId takes no abort signal, so stop waiting for it instead
	let timer: ReturnType<typeof setTimeout> | undefined;
	const timeout = new Promise<never>((_, reject) => {
		timer = setTimeout(
			() => reject(new DOMException("BotID timed out", "TimeoutError")),
			REQUEST_TIMEOUT_MS,
		);
	});
	try {
		const result: unknown = await Promise.race([checkBot(request), timeout]);
		if (
			!result ||
			typeof result !== "object" ||
			!("isBot" in result) ||
			typeof result.isBot !== "boolean"
		) {
			console.error("BotID returned an unexpected response");
			return null;
		}
		return result.isBot;
	} catch (error) {
		console.error("BotID check failed:", error);
		return null;
	} finally {
		clearTimeout(timer);
	}
}

export function createContactHandler(
	config: ContactConfig,
	fetcher: typeof fetch = fetch,
	checkBot: BotCheck = checkRequest,
) {
	return async ({ request, url }: ContactRequest) => {
		if (!config.apiKey) {
			console.error("Contact form is not configured: set CIO_APP_APIKEY");
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

		const bot = await detectBot(checkBot, request);
		if (bot === null)
			return json({ error: "Bot check is unavailable, please try again" }, 503);
		if (bot) return json({ error: "Bot check failed, please try again" }, 403);

		const { nickname: _n, ...messageData } = data;
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
