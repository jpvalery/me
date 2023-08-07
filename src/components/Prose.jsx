import clsx from 'clsx';

export function Prose({ className, ...props }) {
	return (
		<div className={clsx(className, 'prose dark:prose-invert')} {...props} />
	);
}
