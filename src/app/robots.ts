import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/date/', '/contact/date'],
		},
		sitemap: 'https://jpvalery.me/sitemap.xml',
	};
}
