'use client';

import { Container } from '@/components/Container';
import { Prose } from '@/components/Prose';
import TimelineNavigation from '@/components/TimelineNavigation';

export function ContentLayout({ children, article }) {
	return (
		<Container className="mt-16 lg:mt-32">
			<div className="xl:relative">
				<div className="mx-auto max-w-2xl">
					<article>
						<header className="flex flex-col">
							<h1 className="font-departure mt-6 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
								{article.title}
							</h1>
						</header>
						<Prose className="mt-8" data-mdx-content>
							{children}
						</Prose>
					</article>
					<TimelineNavigation />
				</div>
			</div>
		</Container>
	);
}
