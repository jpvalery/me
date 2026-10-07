import type { APIRoute } from "astro";
import { agentFacts, bare, list } from "../lib/agent-facts";
import { site as siteInfo, socials } from "../lib/site";

/** llms.txt, built from the site content. */
export const GET: APIRoute = async ({ site, url }) => {
	const base = (site ?? url.origin).toString().replace(/\/$/, "");
	const f = await agentFacts();
	const lines = (items: string[]) => items.map((i) => `- ${i}`).join("\n");

	const body = `# ${siteInfo.title}

> ${siteInfo.tagline} Personal website of ${siteInfo.title} — ${bare(base)}

## Who is Jp Valery?

Jp Valery is a Customer Success Engineer at Resend, based in Montréal, Canada. Originally from Southern France, he immigrated to Canada at 22. He holds an MSc in Management (Marketing major, Design minor) from a French Grande École. He also runs Raccoon Ventures, a side company for projects and consulting.

## Professional

${lines(f.experience.map((e) => `${e.role} at ${e.company} (${e.years}): ${e.highlight}`))}
- Side company: Raccoon Ventures (raccoonv.com) — advisory, consulting, side projects (advisory and consulting requests go to raccoonv.com)
- Specialties: Customer success, email infrastructure, developer tools, SaaS

## Active Projects

${lines(f.projects.map((p) => `${p.title} (${bare(p.href)}) — ${p.description}`))}

## Retired Projects

${lines(f.retired.map((p) => (p.years ? `${p.title} (${p.years})` : p.title)))}

## Interests

- Aviation: ${list(f.ratings)}; working toward ${list(f.nextRatings)}
- Photography: 300M+ views on Unsplash, founded Montréal Photo Club (2019), shoots DSLR, medium format film, large format, infrared
- Cooking & baking, gardening, 3D printing, cycling, guitar & bass, gaming

## Contact

- Email: ${siteInfo.email}
${lines(socials.map((s) => `${s.label}: ${s.url}`))}

## Site Sections

- / — Home and bio
- /now — What Jp is currently up to (latest entry); /now/YYYY-MM-DD — archive
- /dashboard — Personal metrics (aviation, Unsplash, shows/movies), refreshed at each deploy
- /work — Career summary, resume, and recommendations
- /work/recommendations — Testimonials from colleagues, reports, and customers
- /work/how-to-work-with-me — Personal/professional README
- /projects — Active projects; /projects/cemetery — retired projects
- /photography — Photography links and portfolio
- /contact — Contact; /contact/{${f.contactForms.join(",")}} — category-specific forms
- /feed.xml — RSS feed of /now entries

## Site Details

- URL: ${base}
- RSS: ${base}/feed.xml
- Built with: Astro (static site on Vercel), Tailwind CSS v4
- Fonts: JetBrains Mono, Departure Mono, Cartridge
- Analytics: Self-hosted Umami
`;

	return new Response(body, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
};
