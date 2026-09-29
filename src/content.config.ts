import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

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

/** Long-form pages, addressed by path: home, faq, work/advisorship, date/me, ... */
const pages = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		intro: z.string().optional(),
		/** Button under the content */
		cta: z.object({ label: z.string(), href: z.string() }).optional(),
		/** Show the FAQ below the page */
		faq: z.boolean().default(false),
		/** Full-width text instead of the narrow column */
		wide: z.boolean().default(false),
	}),
});

/** /now entries; the file name is the date and the URL slug. */
const now = defineCollection({
	loader: glob({ pattern: '*.md', base: './src/content/now' }),
	schema: z.object({
		title: z.string(),
		date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Use YYYY-MM-DD'),
	}),
});

/** Link cards on /work, /projects, /photography and /projects/cemetery, in file order. */
const cards = defineCollection({
	loader: orderedFile('src/content/cards.json'),
	schema: z.object({
		order: z.number(),
		section: z.enum(['work', 'projects', 'photography', 'cemetery']),
		title: z.string(),
		description: z.string().optional(),
		href: z.string(),
		label: z.string().optional(),
		/** File name in src/images/logos, without extension */
		logo: z.string().optional(),
	}),
});

const recommendations = defineCollection({
	loader: orderedFile('src/content/recommendations.json'),
	schema: z.object({
		order: z.number(),
		author: z.string(),
		/** Path under public/ */
		avatar: z.string().optional(),
		quote: z.string(),
		large: z.boolean().default(false),
	}),
});

/** /stack sections, in file order. */
const stack = defineCollection({
	loader: orderedFile('src/content/stack.json'),
	schema: z.object({
		order: z.number(),
		name: z.string(),
		items: z.array(
			z.object({ title: z.string(), description: z.string().optional() }),
		),
	}),
});

export const collections = { pages, now, cards, recommendations, stack };
