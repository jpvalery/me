import Link from 'next/link';

import { FAQ } from '@/components/FAQ';
import { SimpleLayout } from '@/components/SimpleLayout';

export const metadata = {
	title: 'Consultancy',

	description:
		'Get the leanest yet highest-performing operations stack your company deserves and need with none of the overhead.',
};

export default function Projects() {
	return (
		<>
			<SimpleLayout
				title="Consultancy"
				intro="Better, Faster, Stronger Results—but not Harder"
			>
				<div className="prose-xl prose-a:text-advisor-500 prose text-gray-600 dark:text-gray-200">
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
						Get the leanest yet highest-performing operations stack your company
						deserves and need with none of the overhead
					</p>
				</div>
				<Link
					href="/contact/advisorship"
					className="grid h-12 max-w-fit items-center  rounded bg-zinc-900 px-4 py-2 text-base font-medium text-white shadow-md shadow-zinc-900/20 hover:bg-emerald-500 hover:text-white hover:shadow-emerald-500/20 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-emerald-500 dark:hover:text-white sm:w-auto sm:text-sm"
				>
					<p>Hire me</p>
				</Link>
			</SimpleLayout>
			<SimpleLayout title="Frequently Asked Questions">
				<FAQ />
			</SimpleLayout>
		</>
	);
}
