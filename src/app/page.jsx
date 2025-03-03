import Image from 'next/image';
import Link from 'next/link';

import image1 from '@/images/photos/image-1.jpg';
import image2 from '@/images/photos/image-2.jpg';
import image3 from '@/images/photos/image-3.jpg';
import image4 from '@/images/photos/image-4.jpg';
import image5 from '@/images/photos/image-5.jpg';
import portraitImage from '@/images/portrait.jpg';
import clsx from 'clsx';

import { Container } from '@/components/Container';
import GitHub from '@/components/icons/Github';
import LinkedIn from '@/components/icons/Linkedin';
import Twitter from '@/components/icons/Twitter';
import Unsplash from '@/components/icons/Unsplash';

function SocialLink({ className, href, children, icon: Icon }) {
	return (
		<li className={clsx(className, 'flex')}>
			<Link
				href={href}
				className="group hover:text-internationalOrange-500 dark:hover:text-internationalOrange-600 flex text-sm font-medium text-zinc-900 transition dark:text-zinc-200"
			>
				<Icon className="group-hover:fill-internationalOrange-400 dark:group-hover:fill-internationalOrange-500 h-6 w-6 flex-none fill-zinc-500 transition" />
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

function Photos() {
	let rotations = [
		'rotate-2',
		'-rotate-2',
		'rotate-2',
		'rotate-2',
		'-rotate-2',
	];

	return (
		<div className="mt-16 sm:mt-20">
			<div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
				{[image1, image2, image3, image4, image5].map((image, imageIndex) => (
					<div
						key={image.src}
						className={clsx(
							'relative aspect-9/10 w-44 flex-none overflow-hidden rounded-sm bg-zinc-100 sm:w-72 sm:rounded-sm dark:bg-zinc-900',
							// rotations[imageIndex % rotations.length],
						)}
					>
						<Image
							src={image}
							alt=""
							sizes="(min-width: 640px) 18rem, 11rem"
							className="absolute inset-0 h-full w-full object-cover"
						/>
					</div>
				))}
			</div>
		</div>
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
						<p className="font-departure pb-1 font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
							<span className="pb-2 text-4xl italic">Bonjour, hi!</span>
						</p>
						<h1 className="font-departure text-2xl">
							I&apos;m Jp and I wear more hats than a H1 can fit
						</h1>
						<div className="prose mt-6 space-y-7 text-zinc-600 dark:text-zinc-400">
							<p>
								I&apos;m currently a Customer Success Engineer at{' '}
								<a href="https://resend.com">Resend</a>. I moonlight on a few
								side projects through my personal company{' '}
								<a href="https://raccoonv.com">Raccoon Ventures</a>.
							</p>
							<p>
								Before that, I&apos;ve dabbled in{' '}
								<a href="https://resume.jpvalery.me">quite a few things</a>.
								From freelancing to multinationals, from the music industry to
								the video game industry, from marketing to RevOps.
							</p>
							<p>
								In 2024, I achieved a childhood dream and obtained my Private
								Pilot License (Aeroplanes). I&apos;m now building hours towards
								getting my Commercial Pilot License, as well as obtaining my
								Night Rating.
							</p>
							<p>
								Photography has been a huge component of my life for the past
								decade. My pictures have gathered over 270,000,000 views and
								over 1,500,000 downloads on{' '}
								<a href="https://unsplash.com/@jpvalery">Unsplash</a>, have been
								published in 2 books, and exhibited once.
							</p>
							<p>
								I&apos;m also a gamer. I&apos;ve been playing mostly on Xbox for
								the past few years. You&apos;ll find me mostly playing The
								Finals or Microsoft Flight Simulator as the core rotation, which
								occassional stints in other games.
							</p>
							<p>
								Last but not least, I&apos;m really into gardening. This must be
								in my genes from my great-grandfather who was a farmer.
								It&apos;s like meditation to me and I crave the taste of fresh
								produce. Tangentially, I&apos;m interested in homesteading and
								self-sufficieny.
							</p>
						</div>
					</div>
					<div className="lg:pl-20">
						<div className="flex items-center justify-start space-x-6 text-zinc-900 md:order-2 dark:text-zinc-200">
							<a
								href="https://twitter.com/jpvalery"
								className="hover:text-internationalOrange-500 dark:hover:text-internationalOrange-600 h-6 w-6"
							>
								<span className="sr-only">Twitter</span>
								<Twitter />
							</a>

							<a
								href="https://github.com/jpvalery"
								className="hover:text-internationalOrange-500 dark:hover:text-internationalOrange-600 h-6 w-6"
							>
								<span className="sr-only">GitHub</span>
								<GitHub />
							</a>

							<a
								href="https://unsplash.com/@jpvalery"
								className="hover:text-internationalOrange-500 dark:hover:text-internationalOrange-600 h-6 w-6"
							>
								<span className="sr-only">Unsplash</span>
								<Unsplash />
							</a>

							<a
								href="https://linkedin.com/in/jpvalery"
								className="hover:text-internationalOrange-500 dark:hover:text-internationalOrange-600 h-6 w-6"
							>
								<span className="sr-only">LinkedIn</span>
								<LinkedIn />
							</a>
						</div>
						<SocialLink
							href="mailto:contact@jpvalery.me"
							icon={MailIcon}
							className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
						>
							contact@jpvalery.me
						</SocialLink>

						<div className="group hover:text-internationalOrange-500 dark:hover:text-internationalOrange-600 mt-4 flex items-center text-sm font-medium text-zinc-900 transition dark:text-zinc-200">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								aria-hidden="true"
								className="group-hover:text-internationalOrange-400 dark:group-hover:text-internationalOrange-500 h-6 w-6 flex-none text-zinc-500 transition"
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
