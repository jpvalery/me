import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { SimpleLayout } from '@/components/SimpleLayout';

function ToolsSection({ children, ...props }) {
	return (
		<Section {...props}>
			<ul className="space-y-8">{children}</ul>
		</Section>
	);
}

function Tool({ title, href, children }) {
	return (
		<Card as="li">
			<Card.Title as="h3" href={href}>
				{title}
			</Card.Title>
			<Card.Description>{children}</Card.Description>
		</Card>
	);
}

export const metadata = {
	title: 'My Stack',

	description:
		'I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff.',
};

const stack = require('@/content/stack.json');

export default function Uses() {
	return (
		<SimpleLayout
			title="Software I use, gadgets I love, and other things I recommend."
			intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
		>
			<div className="grid gap-24">
				{stack.map((section) => (
					<ToolsSection title={section.name} key={section.name}>
						{section.content.map((item) => (
							<Tool title={item.title} key={item.title}>
								{item.description}
							</Tool>
						))}
					</ToolsSection>
				))}
			</div>
		</SimpleLayout>
	);
}
