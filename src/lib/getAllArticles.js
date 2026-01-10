import glob from 'fast-glob';

async function importArticle(articleFilename) {
	const { article } = await import(`../app/articles/${articleFilename}`);

	return {
		slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
		...article,
	};
}

export async function getAllArticles() {
	const articleFilenames = await glob('*/page.mdx', {
		cwd: './src/app/articles',
	});

	const articles = await Promise.all(articleFilenames.map(importArticle));

	return articles.sort((a, z) => new Date(z.date) - new Date(a.date));
}
