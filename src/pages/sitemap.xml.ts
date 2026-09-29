import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { nowStamp } from "../lib/seo";

// Left out on purpose: /date/* (noindex), the /contact/* forms (canonical is
// /contact) and the latest /now/* entry (canonical is /now).
const staticPaths = [
	"/",
	"/stack",
	"/dashboard",
	"/work",
	"/work/recommendations",
	"/projects",
	"/projects/cemetery",
	"/photography",
	"/contact",
];

export const GET: APIRoute = async ({ site, url }) => {
	const base = (site ?? url.origin).toString().replace(/\/$/, "");
	const work = await getCollection("pages", (p) => p.id.startsWith("work/"));
	const now = (await getCollection("now")).sort((a, b) =>
		b.data.date.localeCompare(a.data.date),
	);
	const [latest, ...archive] = now;
	const paths = [
		...staticPaths.map((loc) => ({
			loc,
			lastmod: undefined as string | undefined,
		})),
		...work.map((p) => ({ loc: `/${p.id}`, lastmod: undefined })),
		// /now changes whenever a new entry is added
		...(latest ? [{ loc: "/now", lastmod: nowStamp(latest.data.date) }] : []),
		...archive.map((e) => ({
			loc: `/now/${e.id}`,
			lastmod: nowStamp(e.data.date),
		})),
	];
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
	.map(
		(p) =>
			`  <url><loc>${base}${p.loc}</loc>${p.lastmod ? `<lastmod>${p.lastmod}</lastmod>` : ""}</url>`,
	)
	.join("\n")}
</urlset>`;
	return new Response(body, {
		headers: { "Content-Type": "application/xml; charset=utf-8" },
	});
};
