import { Container } from '@/components/Container';
import ExtLink from '@/components/icons/ExtLink';
import Link from 'next/link';

import { Card } from '@/components/Card';

/*
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
*/

export default async function DashboardFlying() {
	//const data = await getData();
	//console.log(data)

	const categories = [
		{
			title: 'Flights',
			metric: '76',
			link: 'https://foreflight.com',
		},
		{
			title: 'Distance (2024)',
			metric: '1,280 NM',
			link: 'https://foreflight.com',
		},
		{
			title: 'Time',
			metric: '101.6',
			link: 'https://foreflight.com',
		},
		{
			title: 'Landings',
			metric: '252',
			link: 'https://foreflight.com',
		},
	];

	return (
		<Container>
			<div className="grid grid-flow-row gap-2 pb-8">
				<h1 className="font-departure text-4xl font-bold text-gray-600 dark:text-gray-200">
					Foreflight
				</h1>
				<span className="text-sm">Last updated: May 9th, 2025</span>
			</div>

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
