import nextMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['js', 'jsx', 'mdx'], // Ensure MDX files are recognized
};

const withMDX = nextMDX({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [['remarkGfm', { strict: true, throwOnError: true }]],
		rehypePlugins: [['rehypeHighlight', { strict: true, throwOnError: true }]],
	},
});

export default withMDX(nextConfig);
