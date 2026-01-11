import { Feed } from 'feed';

export async function GET(_req) {
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

	return new Response(feed.rss2(), {
		status: 200,
		headers: {
			'content-type': 'application/xml',
			'cache-control': 's-maxage=31556952',
		},
	});
}
