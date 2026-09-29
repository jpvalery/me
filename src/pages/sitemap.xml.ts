import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { forms, formTypes } from '../lib/contact';

// /date/* and /contact/date are intentionally left out (noindex).
const staticPaths = [
	'/',
	'/now',
	'/stack',
	'/dashboard',
	'/work',
	'/work/recommendations',
	'/projects',
	'/projects/cemetery',
	'/photography',
	'/contact',
	...formTypes.filter((t) => !forms[t].noindex).map((t) => `/contact/${t}`),
];

export const GET: APIRoute = async ({ site, url }) => {
	const base = (site ?? url.origin).toString().replace(/\/$/, '');
	const work = await getCollection('pages', (p) => p.id.startsWith('work/'));
	const now = await getCollection('now');
	const paths = [
		...staticPaths,
		...work.map((p) => `/${p.id}`),
		...now.map((e) => `/now/${e.id}`),
	];
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${base}${p}</loc></url>`).join('\n')}
</urlset>`;
	return new Response(body, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' },
	});
};
