import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
	const base = (site ?? new URL('https://jpvalery.me'))
		.toString()
		.replace(/\/$/, '');
	return new Response(
		`User-agent: *
Allow: /
Disallow: /date/
Disallow: /contact/date

Sitemap: ${base}/sitemap.xml
`,
		{ headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
	);
};
