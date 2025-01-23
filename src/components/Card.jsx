import Link from 'next/link';

import clsx from 'clsx';

function ChevronRightIcon(props) {
	return (
		<svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
			<path
				d="M6.75 5.75 9.25 8l-2.5 2.25"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export function Card({ as: Component = 'div', className, children }) {
	return (
		<Component
			className={clsx(
				className,
				'border:zinc-900/5 group hover:border-internationalOrange-400 dark:hover:border-internationalOrange-500 grid min-h-36 grid-flow-col items-center justify-start gap-x-8 border p-4 dark:border-zinc-700/50',
			)}
		>
			{children}
		</Component>
	);
}

Card.Link = function CardLink({ children, ...props }) {
	return (
		<>
			<div className="z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-50/5" />
			<Link {...props}>{children}</Link>
		</>
	);
};

Card.Title = function CardTitle({ as: Component = 'h2', href, children }) {
	return (
		<Component className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
			{href ? <Card.Link href={href}>{children}</Card.Link> : children}
		</Component>
	);
};

Card.Description = function CardDescription({ children }) {
	return (
		<p className="relative z-10 mt-1 text-sm text-zinc-600 dark:text-zinc-400">
			{children}
		</p>
	);
};

Card.Cta = function CardCta({ children }) {
	return (
		<div
			aria-hidden="true"
			className="text-internationalOrange-400 dark:text-internationalOrange-500 relative z-10 mt-4 flex items-center text-sm font-medium"
		>
			{children}
			<ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
		</div>
	);
};

Card.Icon = function CardIcon({ children }) {
	return (
		<div className="z-10 flex h-16 w-16 items-center justify-center rounded-sm bg-zinc-200/25 ring-1 shadow-md shadow-zinc-900/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-500/25 dark:bg-zinc-900 dark:ring-0">
			{children}
		</div>
	);
};

Card.Block = function CardBlock({ children }) {
	return (
		<div className="gap-y grid grid-flow-row items-start justify-start">
			{children}
		</div>
	);
};

Card.Eyebrow = function CardEyebrow({
	as: Component = 'p',
	decorate = false,
	className,
	children,
	...props
}) {
	return (
		<Component
			className={clsx(
				className,
				'relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500',
				decorate && 'pl-3.5',
			)}
			{...props}
		>
			{decorate && (
				<span
					className="absolute inset-y-0 left-0 flex items-center"
					aria-hidden="true"
				>
					<span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
				</span>
			)}
			{children}
		</Component>
	);
};
