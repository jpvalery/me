import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';

export const metadata = {
	title: 'More about Jp',
	description: `What I'm up to lately, my personal stack, and some dashboard metrics`,
};

const projects = [
	{
		name: '/now',
		description: 'What am I up to lately?',
		link: { href: '/now' },
	},
	{
		name: '/stack',
		description:
			'What am I using for work and for fun? (only really cool stuff)',
		link: { href: '/stack' },
	},
	{
		name: '/dashboard',
		description: 'Some personal metrics',
		link: { href: '/dashboard' },
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

export default function About() {
	return (
		<SimpleLayout title="About me">
			<ul
				role="list"
				className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
			>
				{projects.map((project) => (
					<Card as="li" key={project.name}>
						<h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
							<Card.Link href={project.link.href}>{project.name}</Card.Link>
						</h2>
						<Card.Description>{project.description}</Card.Description>
					</Card>
				))}
			</ul>
		</SimpleLayout>
	);
}
