import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField } from 'astro/config';

export default defineConfig({
	site: 'https://jpvalery.me',
	// Every page is prerendered to static HTML; only /api/send runs as a Vercel function.
	output: 'static',
	adapter: vercel(),
	// Match the current URLs: /now, not /now/
	trailingSlash: 'never',
	redirects: {
		'/about': '/',
		'/date': { status: 302, destination: '/date/me' },
	},
	// Render quotes and apostrophes exactly as written in the Markdown
	markdown: { smartypants: false },
	image: {
		layout: 'constrained',
		responsiveStyles: true,
	},
	env: {
		schema: {
			PUBLIC_TURNSTILE_SITE_KEY: envField.string({
				context: 'client',
				access: 'public',
			}),
			TURNSTILE_SECRET_KEY: envField.string({
				context: 'server',
				access: 'secret',
			}),
			CIO_APP_APIKEY: envField.string({ context: 'server', access: 'secret' }),
			EMAIL_CONTACT_GENERIC: envField.string({
				context: 'server',
				access: 'secret',
			}),
			EMAIL_CONTACT_PHOTO: envField.string({
				context: 'server',
				access: 'secret',
			}),
			EMAIL_CONTACT_DATE: envField.string({
				context: 'server',
				access: 'secret',
				optional: true,
			}),
			// /dashboard stats are fetched at build time
			UNSPLASH_REFACTOR_TOKEN: envField.string({
				context: 'server',
				access: 'secret',
				optional: true,
			}),
			BETASERIES_REFACTOR_API_KEY: envField.string({
				context: 'server',
				access: 'secret',
				optional: true,
			}),
			BETASERIES_REFACTOR_ACCESS_TOKEN: envField.string({
				context: 'server',
				access: 'secret',
				optional: true,
			}),
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
	devToolbar: { enabled: false },
});
