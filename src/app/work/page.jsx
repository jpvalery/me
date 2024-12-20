import Image from 'next/image';
import Link from 'next/link';

import logoRaccoon from '@/images/logos/raccoonventures.svg';

import logoResume from '@/images/logos/resume.svg';
import logoWWM from '@/images/logos/workwithme.svg';

import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';

const projects = [
	{
		name: 'Resume',
		description: 'My online resume',
		link: { href: 'https://resume.jpvalery.me', label: 'resume.jpvalery.me' },
		logo: logoResume,
	},
	{
		name: 'Work with me',
		description:
			'Helpful-to-know background and principles when working with me',
		link: {
			href: '/work/how-to-work-with-me',
			label: '/how-to-work-with-me',
		},
		logo: logoWWM,
	},
	{
		name: 'Raccoon Ventures',
		description:
			'My personal company to work on my side-projects or advise/consult for other companies',
		link: { href: 'https://raccoonv.com', label: 'raccoonv.com' },
		logo: logoRaccoon,
	},
];

function LinkIcon(props) {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
			<path
				d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
				fill="currentColor"
			/>
		</svg>
	);
}

export const metadata = {
	title: 'Work',
	description: 'Some professional and work-oriented content.',
};

export default function Projects() {
	return (
		<>
			<SimpleLayout
				title="Work"
				intro="Some professional and work-oriented content"
			>
				<ul role="list" className="grid grid-cols-1 gap-12 md:grid-cols-2">
					{projects.map((project) => (
						<li key={project.name}>
							<Link href={project.link.href}>
								<Card>
									<Card.Icon>
										<Image
											src={project.logo}
											alt={project.name}
											className="h-10 w-10"
											unoptimized
										/>
									</Card.Icon>
									<Card.Block>
										<Card.Link
											href={project.link.href}
											className="text-base font-semibold text-zinc-900 dark:text-zinc-100"
										>
											{project.name}
										</Card.Link>

										<Link
											href={project.link.href}
											className="relative z-10 flex text-sm font-medium text-zinc-400 transition group-hover:text-internationalOrange-400 dark:text-zinc-200 dark:group-hover:text-internationalOrange-500"
										>
											<LinkIcon className="h-6 w-6 flex-none" />
											<span className="ml">{project.link.label}</span>
										</Link>

										<Card.Description>{project.description}</Card.Description>
									</Card.Block>
								</Card>
							</Link>
						</li>
					))}
				</ul>
			</SimpleLayout>
			<SimpleLayout>
				<Link
					href="https://contact.jpvalery.me/consultancy"
					className="grid h-12 max-w-fit items-center  rounded bg-zinc-900 px-4 py-2 text-base font-medium text-white shadow-md shadow-zinc-900/20 hover:bg-emerald-500 hover:text-white hover:shadow-emerald-500/20 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-emerald-500 dark:hover:text-white sm:w-auto sm:text-sm"
				>
					<p>Get in touch about work</p>
				</Link>
			</SimpleLayout>
		</>
	);
}
