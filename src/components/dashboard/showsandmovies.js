import { Container } from '@/components/Container';
import ExtLink from '@/components/icons/ExtLink';
import format from 'comma-number';
import Link from 'next/link';

import { Card, Grid, Metric, Text } from '@tremor/react';

async function getData() {
	const res = await fetch(
		'https://api.betaseries.com/members/infos',
		{
			headers: {
				'X-BetaSeries-Version': 3.0,
				'X-BetaSeries-Key': `${process.env.BETASERIES_REFACTOR_API_KEY}`,
				Authorization: `Bearer ${process.env.BETASERIES_REFACTOR_ACCESS_TOKEN}`,
				'Content-Type': 'application/json',
			},
			method: 'GET',
		},
		{ next: { revalidate: 3600 } },
	);

	return res.json();
}

export default async function DashboardShowsAndMovies() {
	const data = await getData();
	//console.log(data)

	const betaseries = format(data?.member?.stats?.episodes);

	const categories = [
		{
			title: 'Betaseries — Episodes seen',
			metric: betaseries,
			link: 'https://www.betaseries.com/membre/jpvalery',
		},
		{
			title: 'IMDB — Show/Movies seen',
			metric: '1,250',
			link: 'https://www.imdb.com/user/ur59148764/ratings?sort=your_rating,desc&ratingFilter=0&mode=detail&ref_=undefined&lastPosition=0',
		},
	];

	return (
		<Container>
			<h1 className="pb-8 font-cartridge text-4xl font-bold text-gray-600 dark:text-gray-200">
				Shows & Movies
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
