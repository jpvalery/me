import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";

// Vercel BotID serves its challenge scripts from this fixed path (see vercel.json)
const BOTID_PATH =
	"/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3";

export default defineConfig({
	site: "https://jpvalery.me",
	// Every page is prerendered to static HTML; only /api/send runs as a Vercel function.
	output: "static",
	adapter: vercel(),
	// Match the current URLs: /now, not /now/
	trailingSlash: "never",
	redirects: {
		"/about": "/",
		// The /stack page was retired
		"/stack": "/",
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
			// Contact endpoint secrets, read at runtime. Optional so a build never
			// depends on them; /api/send answers 503 while any is missing.
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
		// vercel.json proxies these in production; this does the same for `astro dev`
		// so the contact form can load the BotID challenge locally.
		server: {
			proxy: {
				[`${BOTID_PATH}/a-4-a/c.js`]: {
					target: "https://api.vercel.com",
					changeOrigin: true,
					rewrite: (path) =>
						path.replace(`${BOTID_PATH}/a-4-a/c.js`, "/bot-protection/v1/challenge"),
				},
				[BOTID_PATH]: {
					target: "https://api.vercel.com",
					changeOrigin: true,
					rewrite: (path) => path.replace(BOTID_PATH, "/bot-protection/v1/proxy"),
				},
			},
		},
	},
	devToolbar: { enabled: false },
});
