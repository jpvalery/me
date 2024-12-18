import nextMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['js', 'jsx', 'mdx'], // Ensure MDX files are recognized
};

const withMDX = nextMDX({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [['remark-gfm', { strict: true, throwOnError: true }]],
		rehypePlugins: [['rehype-highlight', { strict: true, throwOnError: true }]],
	},
});

export default withMDX(nextConfig);
