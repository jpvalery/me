import type { CollectionEntry } from "astro:content";
import { site, socials } from "./site";

export const nowStamp = (date: string) => `${date}T13:00:00.000Z`;

export const nowDescription = (date: string) =>
	`What Jp Valery was up to on ${new Date(nowStamp(date)).toLocaleDateString(
		"en-US",
		{ year: "numeric", month: "long", day: "numeric", timeZone: "UTC" },
	)}.`;

/** Person + WebSite, for the home page. */
export const homeJsonLd = (origin: string, image: string) => ({
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Person",
			"@id": `${origin}/#person`,
			name: site.title,
			url: origin,
			image,
			jobTitle: "Customer Success Engineer",
			description: site.description,
			worksFor: [
				{ "@type": "Organization", name: "Resend", url: "https://resend.com" },
				{
					"@type": "Organization",
					name: "Raccoon Ventures",
					url: "https://raccoonv.com",
				},
			],
			homeLocation: {
				"@type": "Place",
				address: {
					"@type": "PostalAddress",
					addressLocality: "Montréal",
					addressRegion: "QC",
					addressCountry: "CA",
				},
			},
			sameAs: [...socials.map((s) => s.url), "https://resume.jpvalery.me"],
		},
		{
			"@type": "WebSite",
			"@id": `${origin}/#website`,
			url: origin,
			name: site.title,
			inLanguage: "en",
			publisher: { "@id": `${origin}/#person` },
		},
	],
});

/** BlogPosting, for /now entries. */
export const nowJsonLd = (
	entry: CollectionEntry<"now">,
	origin: string,
	url: string,
) => ({
	"@context": "https://schema.org",
	"@type": "BlogPosting",
	headline: entry.data.title,
	datePublished: nowStamp(entry.data.date),
	dateModified: nowStamp(entry.data.date),
	url,
	mainEntityOfPage: url,
	image: `${origin}/og.png`,
	author: { "@type": "Person", name: site.title, url: origin },
});
