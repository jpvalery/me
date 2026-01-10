import Link from 'next/link';

import { FAQ } from '@/components/FAQ';
import { SimpleLayout } from '@/components/SimpleLayout';

export const metadata = {
	title: 'Advisorship',

	description:
		'Getting me as an advisor for your startup is adding an involved and passionate coach to your team to help achieve sustainable growth.',
};

export default function Projects() {
	return (
		<>
			<SimpleLayout
				title="Advisorship"
				intro="Field-tested experience to support your company"
			>
				<div className="prose-xl prose prose-a:text-advisor-500 text-white">
					<p>
						According to{' '}
						<a href="https://go.forrester.com/blogs/the-revenue-operations-charter-is-born/">
							Forrester
						</a>
						, companies with aligned revenue operations{' '}
						<b>grow 12 to 15 times faster</b> than their competition and are{' '}
						<b>34% more profitable</b>.
					</p>
					<p>
						I&apos;m a growth polymath who honed his skills at companies of
						various stages and sizes, and in multiple industries.
					</p>
					<p>
						Getting me as an advisor for your startup is adding an involved and
						passionate coach to your team to help achieve sustainable growth.
					</p>
				</div>
				<Link
					href="/contact/advisorship"
					className="grid h-12 max-w-fit items-center rounded-sm bg-zinc-900 px-4 py-2 font-medium text-base text-white shadow-md shadow-zinc-900/20 hover:bg-emerald-500 hover:text-white hover:shadow-emerald-500/20 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 sm:w-auto sm:text-sm dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-emerald-500 dark:hover:text-white"
				>
					<p>Get me as an advisor</p>
				</Link>
			</SimpleLayout>
			<SimpleLayout title="Frequently Asked Questions">
				<FAQ />
			</SimpleLayout>
		</>
	);
}
