import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { site as siteInfo } from '../lib/site';

const esc = (s: string) =>
	s
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');

/** RSS feed of the /now entries. */
export const GET: APIRoute = async ({ site, url }) => {
	const base = (site ?? url.origin).toString().replace(/\/$/, '');
	const sorted = (await getCollection('now')).sort((a, b) =>
		b.data.date.localeCompare(a.data.date),
	);

	const items = sorted
		.map((e) => {
			const link = `${base}/now/${e.id}`;
			const date = new Date(`${e.data.date}T13:00:00.000Z`).toUTCString();
			return `    <item>
      <title>${esc(e.data.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${date}</pubDate>
    </item>`;
		})
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(siteInfo.title)} — Now</title>
    <description>What I'm up to these days</description>
    <link>${base}/now</link>
    <atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
${items}
  </channel>
</rss>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/rss+xml; charset=utf-8',
		},
	});
};
