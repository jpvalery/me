'use client';

import { useRouter } from 'next/navigation';
import { useContext } from 'react';

import { AppContext } from '@/app/providers';

import { Container } from '@/components/Container';
import { Prose } from '@/components/Prose';
import { formatDate } from '@/lib/formatDate';

function ArrowLeftIcon(props) {
	return (
		<svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
			<path
				d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export function ArticleLayout({ children, article, isRssFeed = false }) {
	const router = useRouter();
	const { previousPathname } = useContext(AppContext);

	if (isRssFeed) {
		return children;
	}

	return (
		<Container className="mt-16 lg:mt-32">
			<div className="xl:relative">
				<div className="mx-auto max-w-2xl">
					{previousPathname && (
						<button
							type="button"
							onClick={() => router.back()}
							aria-label="Go back to articles"
							className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 shadow-md shadow-zinc-900/5 ring-zinc-900/5 transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 dark:border dark:border-zinc-700/50 dark:bg-zinc-900 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
						>
							<ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
						</button>
					)}
					<article>
						<header className="flex flex-col">
							<h1 className="font-departure mt-6 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
								{article.title}
							</h1>
							<time
								dateTime={article.date}
								className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
							>
								<span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
								<span className="ml-3">{formatDate(article.date)}</span>
							</time>
						</header>
						<Prose className="mt-8" data-mdx-content>
							{children}
						</Prose>
					</article>
				</div>
			</div>
		</Container>
	);
}
