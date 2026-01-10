import * as cheerio from 'cheerio';
import { Feed } from 'feed';

export async function GET(req) {
	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
	const author = {
		name: 'Jp Valery',
		email: 'contact@jpvalery.me',
	};

	const feed = new Feed({
		title: author.name,
		description: `Jp's Blog`,
		author,
		id: siteUrl,
		link: siteUrl,
		image: `${siteUrl}/favicon.ico`,
		favicon: `${siteUrl}/favicon.ico`,
		copyright: `© 1992-${new Date().getFullYear()} Jp Valery. All rights reserved`,
		feedLinks: {
			rss2: `${siteUrl}/feed.xml`,
		},
	});

	const articleIds = require
		.context('../articles', true, /\/page\.mdx$/)
		.keys()
		.filter((key) => key.startsWith('./'))
		.map((key) => key.slice(2).replace(/\/page\.mdx$/, ''));

	for (const id of articleIds) {
		const url = String(new URL(`/articles/${id}`, req.url));
		const html = await (await fetch(url)).text();
		const $ = cheerio.load(html);

		const publicUrl = `${siteUrl}/articles/${id}`;
		const article = $('article').first();
		const title = article.find('h1').first().text();
		const date = article.find('time').first().attr('datetime');
		const content = article.find('[data-mdx-content]').first().html();

		feed.addItem({
			title,
			id: publicUrl,
			link: publicUrl,
			content,
			author: [author],
			contributor: [author],
			date: new Date(date),
		});
	}

	return new Response(feed.rss2(), {
		status: 200,
		headers: {
			'content-type': 'application/xml',
			'cache-control': 's-maxage=31556952',
		},
	});
}
