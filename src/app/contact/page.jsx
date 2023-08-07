import { SimpleLayout } from '@/components/SimpleLayout';
import Link from 'next/link';

export const metadata = {
	title: 'Get in touch',
	description: 'Easily get in touch with me',
};

export default function Contact() {
	return (
		<SimpleLayout title="Get in touch">
			<div className="prose text-white">
				<p>
					I&apos;m gonna be real. I can&apos;t pursue every opportunity that
					comes my way and have to be extremely picky.
				</p>
				<p>
					It&apos;s hard but that&apos;s the only way I can keep a sane
					bandwidth <em>and</em> keep shipping quality work.
				</p>
				<p>
					The more information you can give me about why we should work / play /
					get together — and why it will be fun / exciting / challenging /
					rewarding / life-changing — the more likely I’ll be to get on board.
				</p>
				<p>
					Share as much detail with as much honesty as possible and let me know
					why you feel we would work well together.
				</p>
				<p>
					In return, I <u>promise</u> I&apos;ll get back to you in a timely
					manner and offer some alternatives if I can&apos;t help you.
				</p>
				<p>Sounds good?</p>
			</div>
			<div className="grid grid-flow-col items-center justify-start py-5">
				<Link
					href="/contact/generic"
					className="sm: inline-flex w-full cursor-pointer justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-base font-medium text-gray-900 shadow-sm hover:bg-green-500 hover:text-white focus:bg-green-400 focus:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto"
				>
					Contact me
				</Link>
			</div>
		</SimpleLayout>
	);
}
