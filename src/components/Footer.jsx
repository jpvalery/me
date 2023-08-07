import Link from 'next/link';

import { Container } from '@/components/Container';

function NavLink({ href, children }) {
	return (
		<Link
			href={href}
			className="transition hover:text-blue-500 dark:hover:text-blue-400"
		>
			{children}
		</Link>
	);
}

export function Footer() {
	return (
		<footer className="mt-32 flex-none">
			<Container.Outer>
				<div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
					<Container.Inner>
						<div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
							<div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
								<NavLink href="/about">About</NavLink>
								<NavLink href="/photography">Photography</NavLink>
								<NavLink href="/work">Work</NavLink>
								<NavLink href="/projects">Projects</NavLink>
								<NavLink href="/contact">Contact</NavLink>
							</div>
							<p className="text-sm text-zinc-400 dark:text-zinc-500">
								© 1992—{new Date().getFullYear()} Jp Valery. All rights
								reserved
							</p>
						</div>
					</Container.Inner>
				</div>
			</Container.Outer>
		</footer>
	);
}
