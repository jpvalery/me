import { Container } from '@/components/Container';
import ExtLink from '@/components/icons/ExtLink';
import format from 'comma-number';
import Link from 'next/link';

import { Card, Grid, Metric, Text } from '@tremor/react';

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
			<h1 className="pb-8 font-cartridge text-4xl font-bold text-gray-600 dark:text-gray-200">
				Unsplash
			</h1>
			<Grid numItemsSm={2} numItemsLg={3} className="gap-6">
				{categories.map((item) => (
					<Link href={item.link} key={item.title}>
						<Card key={item.title}>
							<div className="grid grid-flow-col items-end justify-start gap-2">
								<Text>{item.title}</Text>
								<ExtLink />
							</div>
							<Metric>{item.metric}</Metric>
						</Card>
					</Link>
				))}
			</Grid>
		</Container>
	);
}
