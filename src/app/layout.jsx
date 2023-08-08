import Script from 'next/script';

import { Providers } from '@/app/providers';

import { Layout } from '@/components/Layout';

import '@/styles/tailwind.css';

export const metadata = {
	title: {
		template: '%s - Jp Valery 🦝',
		default: 'Jp Valery 🦝',
	},
	description: `Bonjour, Hi! I'm Jp and I wear more hats than a meta-description field can fit`,
	alternates: {
		types: {
			'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
		},
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="h-full antialiased" suppressHydrationWarning>
			<body className="flex h-full bg-zinc-50 dark:bg-[#16161D]">
				<Providers>
					<div className="flex w-full">
						<Layout>{children}</Layout>
					</div>
				</Providers>
			</body>
			<Script
				data-website-id="3a96b2ba-8032-491e-9ec5-df513cf57d50"
				src="https://analytics.jpvalery.com/script.js"
				strategy="afterInteractive"
			/>
		</html>
	);
}
