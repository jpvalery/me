import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/Container';
import GitHub from '@/components/icons/Github';
import LinkedIn from '@/components/icons/Linkedin';
import Twitter from '@/components/icons/Twitter';
import Unsplash from '@/components/icons/Unsplash';
import { Photos } from '@/components/Photos';
import portraitImage from '@/images/portrait.jpg';

function SocialLink({ className, href, children, icon: Icon }) {
	return (
		<li className={clsx(className, 'flex')}>
			<Link
				href={href}
				className="group flex font-medium text-sm text-zinc-900 transition hover:text-international-orange-500 dark:text-zinc-200 dark:hover:text-international-orange-600"
			>
				<Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-international-orange-400 dark:group-hover:fill-international-orange-500" />
				<span className="ml-4">{children}</span>
			</Link>
		</li>
	);
}

function MailIcon(props) {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
			<path
				fillRule="evenodd"
				d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
			/>
		</svg>
	);
}

export const metadata = {
	title: 'About Jp',
	description: `Bonjour, Hi! I'm Jp and I wear more hats than a meta-description field can fit`,
};

export default function About() {
	return (
		<>
			<Container className="mt-16 sm:mt-32">
				<div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
					<div className="flex items-center justify-center lg:pl-20">
						<div className="max-w-xs px-2.5 lg:max-w-none">
							<Image
								src={portraitImage}
								alt=""
								sizes="(min-width: 1024px) 32rem, 20rem"
								className="aspect-square rounded-full bg-zinc-100 object-cover dark:bg-zinc-900"
							/>
						</div>
					</div>
					<div className="lg:order-first lg:row-span-2">
						<p className="pb-1 font-bold font-departure text-zinc-900 tracking-tight sm:text-5xl dark:text-zinc-100">
							<span className="pb-2 text-4xl italic">Bonjour, hi!</span>
						</p>
						<h1 className="font-departure text-2xl">
							I&apos;m Jp and I wear more hats than a H1 can fit
						</h1>
						<div className="prose mt-6 space-y-7 text-zinc-600 dark:text-zinc-400">
							<p>
								By day, I'm a Customer Success Engineer at{' '}
								<a href="https://resend.com">Resend</a>, helping people do more
								with email—something I've been doing for{' '}
								<a href="https://resume.jpvalery.me">over a decade</a>, both as
								a sender and as a vendor. I occasionally tinker on side projects
								through my company{' '}
								<a href="https://raccoonv.com">Raccoon Ventures</a>.
							</p>
							<p>
								On the ground, I'm usually gardening (
								<em>
									or in winter, convincing a mango tree to survive in Montréal
								</em>
								), 3D printing more or less useful contraptions, or cooking
								something from scratch.
							</p>
							<p>
								I used to shoot photography more seriously (my photos have been
								viewed over 294,000,000 times on{' '}
								<a href="https://unsplash.com/@jpvalery">Unsplash</a>) but these
								days I mostly just point my phone at things or actually go
								through the hurdle of completely mechanical film cameras.
							</p>
							<p>
								In the air, I&apos;m chasing childhood dreams. In 2024, I earned
								my Private Pilot License. In 2025, I added a Night Rating and
								started aerobatics training. Next up: Multi-Engine and Floats
								ratings. The sky, it turns out, is not the limit.
							</p>
							<p>
								Curious by default. Not knowing how to do something just means
								I&apos;ve unlocked a new sidequest.
							</p>
						</div>
					</div>
					<div className="lg:pl-20">
						<div className="flex items-center justify-start space-x-6 text-zinc-900 md:order-2 dark:text-zinc-200">
							<a
								href="https://twitter.com/jpvalery"
								className="h-6 w-6 hover:text-international-orange-500 dark:hover:text-international-orange-600"
							>
								<span className="sr-only">Twitter</span>
								<Twitter />
							</a>

							<a
								href="https://github.com/jpvalery"
								className="h-6 w-6 hover:text-international-orange-500 dark:hover:text-international-orange-600"
							>
								<span className="sr-only">GitHub</span>
								<GitHub />
							</a>

							<a
								href="https://unsplash.com/@jpvalery"
								className="h-6 w-6 hover:text-international-orange-500 dark:hover:text-international-orange-600"
							>
								<span className="sr-only">Unsplash</span>
								<Unsplash />
							</a>

							<a
								href="https://linkedin.com/in/jpvalery"
								className="h-6 w-6 hover:text-international-orange-500 dark:hover:text-international-orange-600"
							>
								<span className="sr-only">LinkedIn</span>
								<LinkedIn />
							</a>
						</div>
						<SocialLink
							href="mailto:contact@jpvalery.me"
							icon={MailIcon}
							className="mt-8 border-zinc-100 border-t pt-8 dark:border-zinc-700/40"
						>
							contact@jpvalery.me
						</SocialLink>

						<div className="group mt-4 flex items-center font-medium text-sm text-zinc-900 transition hover:text-international-orange-500 dark:text-zinc-200 dark:hover:text-international-orange-600">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								aria-hidden="true"
								className="h-6 w-6 flex-none text-zinc-500 transition group-hover:text-international-orange-400 dark:group-hover:text-international-orange-500"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
								/>
							</svg>
							<span className="ml-4">Montréal, QC</span>
						</div>
					</div>
				</div>
			</Container>
			<Photos />
		</>
	);
}
