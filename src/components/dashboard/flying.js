import Link from 'next/link';
import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import ExtLink from '@/components/icons/ExtLink';

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
			metric: '98',
			link: 'https://foreflight.com',
		},
		{
			title: 'Time',
			metric: '129.1',
			link: 'https://foreflight.com',
		},
		{
			title: 'Distance (2024)',
			metric: '1,280 NM',
			link: 'https://foreflight.com',
		},
		{
			title: 'Distance (2025)',
			metric: '1,488 NM',
			link: 'https://plan.foreflight.com/recap/501e1e51-aa19-46c4-a9d7-9e148d4c921e',
		},
		{
			title: 'Landings',
			metric: '290',
			link: 'https://foreflight.com',
		},
	];

	return (
		<Container>
			<div className="grid grid-flow-row gap-2 pb-8">
				<h1 className="font-bold font-departure text-4xl text-gray-600 dark:text-gray-200">
					Foreflight
				</h1>
				<span className="text-sm">Last updated: November 17th, 2025</span>
			</div>

			<ul className="grid grid-cols-1 gap-12 md:grid-cols-2">
				{categories.map((item) => (
					<Link href={item.link} key={item.title}>
						<Card>
							<Card.Block>
								<Card.Link
									href={item.link}
									className="grid grid-flow-col items-center justify-start gap-2 text-base text-zinc-600 hover:text-internationalOrange-400 dark:text-zinc-200 dark:hover:text-internationalOrange-500"
								>
									{item.title}
									<ExtLink />
								</Card.Link>

								<span className="font-semibold text-3xl text-zinc-950 dark:text-zinc-50">
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
