import {
	CIO_APP_APIKEY,
	EMAIL_CONTACT_DATE,
	EMAIL_CONTACT_GENERIC,
	EMAIL_CONTACT_PHOTO,
} from "astro:env/server";
import type { APIRoute } from "astro";
import { createContactHandler, json } from "../../lib/contact-handler";

export const prerender = false;

export const POST: APIRoute = createContactHandler({
	apiKey: CIO_APP_APIKEY,
	genericEmail: EMAIL_CONTACT_GENERIC,
	photoEmail: EMAIL_CONTACT_PHOTO,
	dateEmail: EMAIL_CONTACT_DATE,
});

export const ALL: APIRoute = () => json({ error: "Method not allowed" }, 405);
