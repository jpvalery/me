'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Prose } from '@/components/Prose';
import MeContent from '../me.mdx';
import YouContent from '../you.mdx';

const validTabs = ['me', 'you'];

export default function DatePage({ params }) {
	const { tab } = use(params);

	if (!validTabs.includes(tab)) {
		notFound();
	}

	return (
		<>
			<Container className="mt-16 sm:mt-32">
				<div className="pb-32">
					<Prose className="prose dark:prose-invert">
						{tab === 'me' ? <MeContent /> : <YouContent />}
					</Prose>
				</div>
			</Container>

			{/* Fixed Bottom Toggle */}
			<div className="sticky right-0 bottom-0 left-0 z-50 mx-auto flex w-full max-w-6xl justify-center bg-linear-to-t from-white via-white/90 pt-6 pb-6 dark:from-zinc-900 dark:via-zinc-900/90">
				<div className="grid grid-flow-row gap-2">
					<div className="grid grid-flow-col items-center justify-center rounded-full bg-zinc-50/90 px-3 text-zinc-900 shadow-lg shadow-zinc-900/5 ring-1 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-900/90 dark:text-zinc-50 dark:ring-zinc-50/10">
						<Link
							href="/date/me"
							className={`rounded-full px-4 py-2 font-semibold text-lg transition ${
								tab === 'me'
									? 'text-international-orange-400 dark:text-international-orange-500'
									: 'text-zinc-600 hover:cursor-pointer hover:text-international-orange-400 dark:text-zinc-400 dark:hover:text-international-orange-500'
							}`}
						>
							Me
						</Link>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="size-4 text-zinc-600 dark:text-zinc-400"
							viewBox="0 0 24 24"
						>
							<title>Toggle icon</title>
							<path d="m16 3 4 4-4 4M20 7H4M8 21l-4-4 4-4M4 17h16"></path>
						</svg>
						<Link
							href="/date/you"
							className={`rounded-full px-4 py-2 font-semibold text-lg transition ${
								tab === 'you'
									? 'text-international-orange-400 dark:text-international-orange-500'
									: 'text-zinc-600 hover:cursor-pointer hover:text-international-orange-400 dark:text-zinc-400 dark:hover:text-international-orange-500'
							}`}
						>
							You
						</Link>
					</div>
					<div className="flex rounded-full bg-zinc-50/90 px-3 text-zinc-900 shadow-lg shadow-zinc-900/5 ring-1 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-900/90 dark:text-zinc-50 dark:ring-zinc-50/10">
						<Button href="/contact/date" variant="secondary">
							Sounds like we'd be a match?
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}
