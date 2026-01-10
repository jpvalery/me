import Link from 'next/link';

import Recommendations from '@/components/Recommendations';
import { SimpleLayout } from '@/components/SimpleLayout';

export const metadata = {
	title: 'Recommendations',
	description: 'Hear what people I worked with have to say',
};

export default function Projects() {
	return (
		<>
			<SimpleLayout
				title="Recommendations"
				intro="Hear what people I worked with have to say"
			>
				<Recommendations />
			</SimpleLayout>
			<SimpleLayout>
				<Link
					href="https://contact.jpvalery.me/consultancy"
					className="grid h-12 max-w-fit items-center rounded-sm bg-zinc-900 px-4 py-2 font-medium text-base text-white shadow-md shadow-zinc-900/20 hover:bg-emerald-500 hover:text-white hover:shadow-emerald-500/20 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 sm:w-auto sm:text-sm dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-emerald-500 dark:hover:text-white"
				>
					<p>Get in touch about work</p>
				</Link>
			</SimpleLayout>
		</>
	);
}
