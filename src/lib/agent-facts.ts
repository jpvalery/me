import { getCollection } from "astro:content";
import flying from "../content/flying.json";
import { splitYears } from "./cards";
import { forms } from "./contact";

const byOrder = <T extends { data: { order: number } }>(a: T, b: T) =>
	a.data.order - b.data.order;

/** "A, B, and C", with the serial comma */
export const list = (items: string[]) =>
	new Intl.ListFormat("en-US", { type: "conjunction" }).format(items);

/** "hockay.com" from "https://hockay.com/" */
export const bare = (href: string) =>
	href.replace(/^https?:\/\//, "").replace(/\/$/, "");

/**
 * Facts for /llms.txt and /agent.md, read from the same content as the pages
 * so the two files can't drift from the site.
 */
export async function agentFacts() {
	const cards = (await getCollection("cards")).sort(byOrder);
	const experience = (await getCollection("experience")).sort(byOrder);
	return {
		projects: cards
			.filter((c) => c.data.section === "projects")
			.map(({ data }) => ({ ...data, href: data.href ?? "" })),
		retired: cards
			.filter((c) => c.data.section === "cemetery")
			.map(({ data }) => ({
				title: data.title,
				years: splitYears(data.description).years,
			})),
		experience: experience.map((e) => e.data),
		ratings: flying.ratings
			.filter((r) => !r.next)
			.map((r) => `${r.title} (${r.when})`),
		nextRatings: flying.ratings.filter((r) => r.next).map((r) => r.title),
		/** Indexable contact forms, for the page map */
		contactForms: Object.values(forms)
			.filter((f) => !f.noindex)
			.map((f) => f.type),
	};
}
