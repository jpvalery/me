import type { APIRoute } from "astro";
import { agentFacts, bare, list } from "../lib/agent-facts";
import { site as siteInfo, socials } from "../lib/site";

/** Keep table cells on one row. */
const cell = (s = "") => s.replace(/\|/g, "\\|").replace(/\s*\n+\s*/g, " ");

/** Structured context for AI agents, built from the site content. */
export const GET: APIRoute = async ({ site, url }) => {
	const base = (site ?? url.origin).toString().replace(/\/$/, "");
	const f = await agentFacts();

	const body = `# Agent Context — ${bare(base)}

This document provides structured context for AI agents interacting with or answering questions about Jp Valery and his personal website. It is generated from the site content at each deploy.

## Identity

- **Name:** ${siteInfo.title}
- **Tagline:** ${siteInfo.tagline}
- **Location:** Montréal, QC, Canada (originally from Southern France)
- **Email:** ${siteInfo.email}
- **Website:** ${base}
- **RSS:** ${base}/feed.xml

## Social Profiles

| Platform | URL |
|----------|-----|
${socials.map((s) => `| ${s.label} | ${s.url} |`).join("\n")}

## Professional Summary

Jp is a Customer Success Engineer at **Resend** (email infrastructure company). He runs **Raccoon Ventures** (raccoonv.com) as a side company for consulting, advisorship, and side projects. He holds an MSc in Management with a Marketing major and Design minor.

### Experience

| Years | Company | Role | Highlight |
|-------|---------|------|-----------|
${f.experience.map((e) => `| ${e.years} | ${cell(e.company)} | ${cell(e.role)} | ${cell(e.highlights[0])} |`).join("\n")}

Full resume: https://resume.jpvalery.me

### Services Offered

Advisory and consulting engagements are handled through raccoonv.com (the old /work/advisorship and /work/consultancy pages redirect there).

## Active Projects

| Project | URL | Description |
|---------|-----|-------------|
${f.projects.map((p) => `| ${cell(p.title)} | ${bare(p.href)} | ${cell(p.description)} |`).join("\n")}

## Key Interests & Expertise Areas

- **Aviation:** ${list(f.ratings)}; working toward ${list(f.nextRatings)}
- **Photography:** ${f.unsplashViews}+ views on Unsplash, founded Montréal Photo Club, shoots DSLR/medium format/large format/infrared
- **Tech:** Email infrastructure, developer tools, SaaS, customer success
- **Other:** Cooking/baking, gardening, 3D printing, cycling, music (guitar, bass)

## Site Architecture

This is a static Astro site hosted on Vercel, with content in Markdown and JSON files and styling in Tailwind CSS v4.

### Page Map

\`\`\`
/                          → Home and bio
/now                       → Current status (regularly updated)
/now/[date]                → Historical /now snapshots (YYYY-MM-DD)
/dashboard                 → Personal metrics (aviation, Unsplash, shows/movies)
/work                      → Career summary, resume, and recommendations
/work/recommendations      → Testimonials from colleagues, reports, and customers
/work/how-to-work-with-me  → Personal/professional README
/projects                  → Active projects
/projects/cemetery         → Retired projects graveyard
/photography               → Photography links
/contact                   → Contact; /contact/{${f.contactForms.join(",")}} forms (protected by Vercel BotID)
/feed.xml                  → RSS feed of /now entries
\`\`\`

### Data Sources

- **Unsplash API** — Download and view statistics, fetched at each deploy
- **BetaSeries API** — Episodes watched, fetched at each deploy
- **Foreflight** — Aviation statistics (updated by hand)
- **IMDB** — Shows and movies seen (updated by hand)

### Content

- Content lives in \`src/content/\`: long-form pages and /now entries as Markdown; link cards, experience, and recommendations as JSON. Navigation is in \`src/lib/site.ts\`.
- Foreflight stats are in \`src/content/flying.json\`.

## Retired Projects (Cemetery)

${list(f.retired.map((p) => (p.years ? `${p.title} (${p.years})` : p.title)))}.

## Important Notes for Agents

- The site uses self-hosted Umami analytics at analytics.jpvalery.com.
- The copyright footer reads \`© 1992—[current year]\` (1992 is Jp's birth year).
- The brand includes a raccoon icon, a motif shared with Raccoon Ventures.
- Dark and light mode are both supported.
`;

	return new Response(body, {
		headers: { "Content-Type": "text/markdown; charset=utf-8" },
	});
};
