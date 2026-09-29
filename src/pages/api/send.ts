import {
	CIO_APP_APIKEY,
	EMAIL_CONTACT_DATE,
	EMAIL_CONTACT_GENERIC,
	EMAIL_CONTACT_PHOTO,
	TURNSTILE_SECRET_KEY,
} from "astro:env/server";
import type { APIRoute } from "astro";
import { forms, schemaFor } from "../../lib/contact";

export const prerender = false;

const MAX_BODY_BYTES = 8 * 1024;
const MIN_FILL_MS = 3_000;
const MAX_AGE_MS = 24 * 60 * 60 * 1000;
const ALLOWED_HOSTS = new Set(["jpvalery.me", "www.jpvalery.me"]);

const json = (body: unknown, status = 200) =>
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
	try {
		const host = new URL(origin).hostname;
		return host === url.hostname || ALLOWED_HOSTS.has(host);
	} catch {
		return false;
	}
}

async function verifyTurnstile(secret: string, token: string, ip: string) {
	const res = await fetch(
		"https://challenges.cloudflare.com/turnstile/v0/siteverify",
		{
			method: "POST",
			body: new URLSearchParams({
				secret,
				response: token,
				remoteip: ip,
			}),
		},
	);
	if (!res.ok) return false;
	const data = (await res.json()) as { success?: boolean };
	return data.success === true;
}

export const POST: APIRoute = async ({ request, url, clientAddress }) => {
	if (
		!TURNSTILE_SECRET_KEY ||
		!CIO_APP_APIKEY ||
		!EMAIL_CONTACT_GENERIC ||
		!EMAIL_CONTACT_PHOTO
	) {
		console.error(
			"Contact form is not configured: set TURNSTILE_SECRET_KEY, CIO_APP_APIKEY, EMAIL_CONTACT_GENERIC and EMAIL_CONTACT_PHOTO",
		);
		return json({ error: "The contact form is unavailable right now" }, 503);
	}
	if (!sameOrigin(request, url)) return json({ error: "Forbidden" }, 403);
	if (!request.headers.get("Content-Type")?.includes("application/json"))
		return json({ error: "Unsupported content type" }, 415);

	const raw = await request.text();
	if (raw.length > MAX_BODY_BYTES)
		return json({ error: "Payload too large" }, 413);

	let payload: unknown;
	try {
		payload = JSON.parse(raw);
	} catch {
		return json({ error: "Invalid request" }, 400);
	}

	const type = (payload as { _type?: string } | null)?._type ?? "";
	const def = forms[type];
	if (!def) return json({ error: "Invalid request" }, 400);

	// Honeypot: pretend success so bots don't learn they were caught.
	if ((payload as { nickname?: string }).nickname)
		return json({ result: "Success" });

	const parsed = schemaFor(def).safeParse(payload);
	if (!parsed.success)
		return json({ error: "Please check the form and try again" }, 400);
	const data = parsed.data as unknown as Record<string, unknown> & {
		ts: number;
		email: string;
		"cf-turnstile-response": string;
	};

	const elapsed = Date.now() - data.ts;
	if (elapsed < MIN_FILL_MS || elapsed > MAX_AGE_MS)
		return json({ error: "Please try again" }, 400);

	if (
		!(await verifyTurnstile(
			TURNSTILE_SECRET_KEY,
			data["cf-turnstile-response"],
			clientAddress,
		))
	)
		return json({ error: "Bot check failed, please try again" }, 400);

	const {
		ts: _ts,
		nickname: _n,
		"cf-turnstile-response": _t,
		...messageData
	} = data;
	const to =
		type === "photography"
			? EMAIL_CONTACT_PHOTO
			: type === "date"
				? (EMAIL_CONTACT_DATE ?? EMAIL_CONTACT_GENERIC)
				: EMAIL_CONTACT_GENERIC;

	const sent = await fetch("https://api.customer.io/v1/send/email", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${CIO_APP_APIKEY}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			transactional_message_id: "form_jpvaleryme",
			to,
			identifiers: { email: data.email },
			message_data: messageData,
		}),
	}).catch(() => null);

	if (!sent?.ok)
		return json({ error: "Could not send your message, please try again" }, 502);
	return json({ result: "Success" });
};

// Everything else is not allowed.
export const ALL: APIRoute = () => json({ error: "Method not allowed" }, 405);
