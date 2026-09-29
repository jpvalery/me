import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";

export default defineConfig({
	site: "https://jpvalery.me",
	// Every page is prerendered to static HTML; only /api/send runs as a Vercel function.
	output: "static",
	adapter: vercel(),
	// Match the current URLs: /now, not /now/
	trailingSlash: "never",
	redirects: {
		"/about": "/",
		// Advisory and consulting moved to Raccoon Ventures
		"/work/advisorship": { status: 301, destination: "https://raccoonv.com" },
		"/work/consultancy": { status: 301, destination: "https://raccoonv.com" },
		"/contact/advisorship": {
			status: 301,
			destination: "https://raccoonv.com",
		},
		"/contact/consultancy": {
			status: 301,
			destination: "https://raccoonv.com",
		},
		"/date": { status: 302, destination: "/date/me" },
	},
	// Render quotes and apostrophes exactly as written in the Markdown
	markdown: { smartypants: false },
	image: {
		layout: "constrained",
		responsiveStyles: true,
	},
	env: {
		schema: {
			// Public (it ships in the page HTML); override with the env var if the widget changes
			PUBLIC_TURNSTILE_SITE_KEY: envField.string({
				context: "client",
				access: "public",
				default: "0x4AAAAAAFHyQKcpbSoyVY0m",
			}),
			// Contact endpoint secrets, read at runtime. Optional so a build never
			// depends on them; /api/send answers 503 while any is missing.
			TURNSTILE_SECRET_KEY: envField.string({
				context: "server",
				access: "secret",
				optional: true,
			}),
			CIO_APP_APIKEY: envField.string({
				context: "server",
				access: "secret",
				optional: true,
			}),
			EMAIL_CONTACT_GENERIC: envField.string({
				context: "server",
				access: "secret",
				optional: true,
			}),
			EMAIL_CONTACT_PHOTO: envField.string({
				context: "server",
				access: "secret",
				optional: true,
			}),
			EMAIL_CONTACT_DATE: envField.string({
				context: "server",
				access: "secret",
				optional: true,
			}),
			// /dashboard stats are fetched at build time
			UNSPLASH_REFACTOR_TOKEN: envField.string({
				context: "server",
				access: "secret",
				optional: true,
			}),
			BETASERIES_REFACTOR_API_KEY: envField.string({
				context: "server",
				access: "secret",
				optional: true,
			}),
			BETASERIES_REFACTOR_ACCESS_TOKEN: envField.string({
				context: "server",
				access: "secret",
				optional: true,
			}),
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
	devToolbar: { enabled: false },
});
