import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * A JSON array file whose order matters: each item gets its position as `order`
 * (getCollection returns entries sorted by id, not file order).
 */
const orderedFile = (path: string) =>
	file(path, {
		parser: (text) =>
			(JSON.parse(text) as Record<string, unknown>[]).map((item, order) => ({
				...item,
				order,
			})),
	});

/** Long-form pages, addressed by path: home, work/how-to-work-with-me, date/me, ... */
const pages = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		intro: z.string().optional(),
		/** Callout shown above the content */
		notice: z.string().optional(),
		/** Full-width text instead of the narrow column */
		wide: z.boolean().default(false),
	}),
});

/** /now entries; the file name is the date and the URL slug. */
const now = defineCollection({
	loader: glob({ pattern: "*.md", base: "./src/content/now" }),
	schema: z.object({
		title: z.string(),
		date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Use YYYY-MM-DD"),
	}),
});

/**
 * Link cards in file order: /work (`work` above the experience, `advisory` below it),
 * /projects, /photography, and /projects/cemetery.
 */
const cards = defineCollection({
	loader: orderedFile("src/content/cards.json"),
	schema: z
		.object({
			order: z.number(),
			section: z.enum(["work", "advisory", "projects", "photography", "cemetery"]),
			title: z.string(),
			description: z.string().optional(),
			/** Optional only in the cemetery, for projects that are offline */
			href: z.string().optional(),
			label: z.string().optional(),
			/** File name in src/images/logos, without extension */
			logo: z.string().optional(),
			/** Dark logo that disappears on the dark theme */
			invertLogoOnDark: z.boolean().default(false),
			/** File name in src/images/screenshots, without extension; made by `pnpm screenshots` */
			screenshot: z.string().optional(),
		})
		.refine((c) => c.section === "cemetery" || c.href, {
			message: "href is required outside the cemetery",
		}),
});

const recommendations = defineCollection({
	loader: orderedFile("src/content/recommendations.json"),
	schema: z.object({
		order: z.number(),
		author: z.string(),
		/** How we worked together, e.g. "Direct report at Local Logic" */
		role: z.string(),
		/** Path under public/ */
		avatar: z.string().optional(),
		quote: z.string(),
		/** One line from the quote, shown as a pull quote */
		highlight: z.string(),
		/** Shown on the home page */
		featured: z.boolean().default(false),
	}),
});

/** Career on /work, from resume.jpvalery.me: companies newest first, in file order. */
const experience = defineCollection({
	loader: orderedFile("src/content/experience.json"),
	schema: z.object({
		order: z.number(),
		company: z.string(),
		url: z.string().optional(),
		/** What the company does, e.g. "Email API for developers" */
		about: z.string(),
		years: z.string(),
		/** Newest first */
		roles: z
			.array(
				z.object({
					title: z.string(),
					dates: z.string(),
					highlights: z.array(z.string()).min(1),
				}),
			)
			.min(1),
	}),
});

export const collections = {
	pages,
	now,
	cards,
	recommendations,
	experience,
};
