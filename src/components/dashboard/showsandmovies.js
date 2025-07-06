import { Container } from '@/components/Container';
import ExtLink from '@/components/icons/ExtLink';
import format from 'comma-number';
import Link from 'next/link';

import { Card } from '@/components/Card';

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
			metric: '1,324',
			link: 'https://www.imdb.com/user/ur59148764/ratings?sort=your_rating,desc&ratingFilter=0&mode=detail&ref_=undefined&lastPosition=0',
		},
	];

	return (
		<Container>
			<h1 className="font-departure pb-8 text-4xl font-bold text-gray-600 dark:text-gray-200">
				Shows & Movies
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
