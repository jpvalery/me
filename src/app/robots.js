export default function robots() {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/date/', '/contact/date'],
		},
		sitemap: 'https://jpvalery.me/sitemap.xml',
	};
}
