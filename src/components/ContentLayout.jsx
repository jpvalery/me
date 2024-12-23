'use client';

import { Container } from '@/components/Container';
import { Prose } from '@/components/Prose';

export function ContentLayout({ children, article }) {
	return (
		<Container className="mt-16 lg:mt-32">
			<div className="xl:relative">
				<div className="mx-auto max-w-2xl">
					<article>
						<header className="flex flex-col">
							<h1 className="mt-6 font-departure text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
								{article.title}
							</h1>
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
