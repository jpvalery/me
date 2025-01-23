import { Container } from '@/components/Container';
import ExtLink from '@/components/icons/ExtLink';
import format from 'comma-number';
import Link from 'next/link';

import { Card } from '@/components/Card';

async function getData() {
	const res = await fetch(
		'https://api.unsplash.com//users/jpvalery/statistics',
		{
			headers: {
				Authorization: `Bearer ${process.env.UNSPLASH_REFACTOR_TOKEN}`,
			},
			method: 'GET',
		},
		{ next: { revalidate: 3600 } },
	);

	return res.json();
}

export default async function DashboardUnsplash() {
	const data = await getData();
	//console.log(data)

	const downloads = format(data?.downloads?.total);
	const views = format(data?.views?.total);

	const categories = [
		{
			title: 'Unsplash — Downloads',
			metric: downloads,
			link: 'https://unsplash.com/@jpvalery',
		},
		{
			title: 'Unsplash — Views',
			metric: views,
			link: 'https://unsplash.com/@jpvalery',
		},
	];

	return (
		<Container>
			<h1 className="font-departure pb-8 text-4xl font-bold text-gray-600 dark:text-gray-200">
				Unsplash
			</h1>
			<ul role="list" className="grid grid-cols-1 gap-12 md:grid-cols-2">
				{categories.map((item) => (
					<Link href={item.link} key={item.title}>
						<Card>
							<Card.Block>
								<Card.Link
									href={item.link}
									className="hover:text-internationalOrange-400 dark:hover:text-internationalOrange-500 grid grid-flow-col items-center justify-start gap-2 text-base text-zinc-600 dark:text-zinc-200"
								>
									{item.title}
									<ExtLink />
								</Card.Link>

								<span className="text-3xl font-semibold text-zinc-950 dark:text-zinc-50">
									{item.metric}
								</span>
							</Card.Block>
						</Card>
					</Link>
				))}
			</ul>
		</Container>
	);
}
