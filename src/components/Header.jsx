'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useEffect, useRef, useState } from 'react';

import {
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
	Popover,
	Transition,
} from '@headlessui/react';

import clsx from 'clsx';
import { useTheme } from 'next-themes';

import Brand from '@/components/Brand';
import { Container } from '@/components/Container';

import navigation from '@/content/navigation.json';

function CloseIcon(props) {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
			<path
				d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function ChevronDownIcon(props) {
	return (
		<svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
			<path
				d="M1.75 1.75 4 4.25l2.25-2.5"
				fill="none"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function SunIcon(props) {
	return (
		<svg
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			{...props}
		>
			<path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
			<path
				d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
				fill="none"
			/>
		</svg>
	);
}

function MoonIcon(props) {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
			<path
				d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function MobileNavItem({ href, children }) {
	return (
		<li>
			<Popover.Button as={Link} href={href} className="block py-2">
				{children}
			</Popover.Button>
		</li>
	);
}

function MobileNavigation(props) {
	return (
		<Popover {...props}>
			<Popover.Button className="group flex items-center rounded-full bg-zinc-50/90 px-4 py-2 text-sm font-medium text-zinc-900 ring-1 shadow-lg shadow-zinc-900/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-900/90 dark:text-zinc-200 dark:ring-zinc-50/10 dark:hover:ring-zinc-50/20">
				Menu
				<ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
			</Popover.Button>
			<Transition.Root>
				<Transition.Child
					as={Fragment}
					enter="duration-150 ease-out"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="duration-150 ease-in"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<Popover.Overlay className="fixed inset-0 z-50 bg-zinc-900/40 backdrop-blur-xs dark:bg-black/80" />
				</Transition.Child>
				<Transition.Child
					as={Fragment}
					enter="duration-150 ease-out"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="duration-150 ease-in"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					<Popover.Panel
						focus
						className="fixed inset-x-4 top-8 z-50 origin-top rounded-sm bg-zinc-50 p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-900"
					>
						<div className="flex flex-row-reverse items-center justify-between">
							<Popover.Button aria-label="Close menu" className="-m-1 p-1">
								<CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
							</Popover.Button>
							<h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
								Navigation
							</h2>
						</div>
						<nav className="mt-6">
							<ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-900 dark:divide-zinc-100/5 dark:text-zinc-300">
								<MobileNavItem href="/about">About</MobileNavItem>
								<MobileNavItem href="/work">Work</MobileNavItem>
								<MobileNavItem href="/projects">Projects</MobileNavItem>
								<MobileNavItem href="/photography">Photography</MobileNavItem>
								<MobileNavItem href="/contact">Contact</MobileNavItem>
							</ul>
						</nav>
					</Popover.Panel>
				</Transition.Child>
			</Transition.Root>
		</Popover>
	);
}

function NavItem({ href, children }) {
	let isActive = usePathname() === href;

	return (
		<li>
			<Link
				href={href}
				className={clsx(
					'relative block px-3 py-2 transition',
					isActive
						? 'text-international-orange-400 dark:text-international-orange-500'
						: 'dark:hover:text-international-orange-500 hover:text-international-orange-400',
				)}
			>
				{children}
				{isActive && (
					<span className="from-international-orange-400/0 via-international-orange-400/40 to-international-orange-400/0 dark:from-international-orange-500/0 dark:via-international-orange-500/40 dark:to-international-orange-500/0 absolute inset-x-1 -bottom-px h-px bg-linear-to-r" />
				)}
			</Link>
		</li>
	);
}

function DesktopNavigation(props) {
	const pathname = usePathname();
	return (
		<nav {...props}>
			<ul className="flex rounded-full bg-zinc-50/90 px-3 text-sm font-medium text-zinc-900 ring-1 shadow-lg shadow-zinc-900/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-900/90 dark:text-zinc-50 dark:ring-zinc-50/10">
				{navigation.map((section) => {
					const isActive =
						pathname === section.url ||
						section.items?.some((item) => pathname === item.url);
					return (
						<Menu key={section.label}>
							<MenuButton
								className={clsx(
									'block cursor-pointer px-3 py-2 font-semibold transition',
									isActive
										? 'text-international-orange-400 dark:text-international-orange-500'
										: 'hover:text-international-orange-400 dark:hover:text-international-orange-500',
								)}
							>
								{section.label}
							</MenuButton>

							{section.items?.length > 0 && (
								<MenuItems
									transition
									anchor="bottom"
									className="absolute z-10 mt-2 grid grid-flow-col items-center justify-center gap-2 rounded-xl bg-zinc-50 p-2 text-sm/6 ring-1 shadow-lg ring-zinc-50/10 transition duration-200 ease-in-out [--anchor-gap:--spacing(2)] data-closed:-translate-y-1 data-closed:opacity-0 dark:bg-zinc-800"
								>
									<div className="grid grid-flow-col items-center gap-4">
										{section.items.map((item) => (
											<MenuItem key={item.label}>
												<Link
													key={item.label}
													href={item.url}
													className="block rounded-lg px-3 py-2 transition hover:bg-zinc-900/5 dark:hover:bg-zinc-50/5"
												>
													{item.label}
													{/* <p className="text-zinc-500">{item.description}</p> */}
												</Link>
											</MenuItem>
										))}
									</div>
									<MenuItem>
										<Link
											className="block max-w-fit rounded-lg px-3 py-2 text-xs italic transition hover:bg-zinc-900/5 dark:hover:bg-zinc-50/5"
											href={section.url}
										>
											See more
										</Link>
									</MenuItem>
								</MenuItems>
							)}
						</Menu>
					);
				})}
				<NavItem href="/contact">Contact</NavItem>
			</ul>
		</nav>
	);
}

function ThemeToggle() {
	let { resolvedTheme, setTheme } = useTheme();
	let otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
	let [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<button
			type="button"
			aria-label={mounted ? `Switch to ${otherTheme} theme` : 'Toggle theme'}
			className="group rounded-full bg-zinc-50/90 px-3 py-2 ring-1 shadow-lg shadow-zinc-900/5 ring-zinc-900/5 backdrop-blur-sm transition dark:bg-zinc-900/90 dark:ring-zinc-50/10 dark:hover:ring-zinc-50/20"
			onClick={() => setTheme(otherTheme)}
		>
			<SunIcon className="[@media(prefers-color-scheme:dark)]:fill-international-orange-50 [@media(prefers-color-scheme:dark)]:stroke-international-orange-400 [@media(prefers-color-scheme:dark)]:group-hover:fill-international-orange-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-international-orange-500 h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden" />
			<MoonIcon className="[@media_not_(prefers-color-scheme:dark)]:fill-international-orange-500/10 [@media_not_(prefers-color-scheme:dark)]:stroke-international-orange-400 hidden h-6 w-6 fill-zinc-700 stroke-yellow-500/80 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400" />
		</button>
	);
}

function clamp(number, a, b) {
	let min = Math.min(a, b);
	let max = Math.max(a, b);
	return Math.min(Math.max(number, min), max);
}

function AvatarContainer({ className, ...props }) {
	return <div className={clsx(className, '')} {...props} />;
}

function Avatar({ large = false, className, ...props }) {
	return (
		<Link
			href="/"
			aria-label="Home"
			className={clsx(className, 'pointer-events-auto')}
			{...props}
		>
			<Brand />
		</Link>
	);
}

export function Header() {
	let isHomePage = usePathname() === '/';
	let headerRef = useRef();
	let avatarRef = useRef();

	return (
		<>
			<header
				className="pointer-events-none relative z-50 flex flex-none flex-col"
				style={{
					height: 'var(--header-height)',
					marginBottom: 'var(--header-mb)',
				}}
			>
				<div
					ref={headerRef}
					className="top-0 z-10 h-16 pt-6"
					style={{ position: 'var(--header-position)' }}
				>
					<Container
						className="top-(--header-top,--spacing(6)) w-full"
						style={{ position: 'var(--header-inner-position)' }}
					>
						<div className="relative flex gap-4">
							<div className="flex flex-1">
								{!isHomePage && (
									<AvatarContainer>
										<Avatar />
									</AvatarContainer>
								)}
							</div>
							<div className="flex flex-1 justify-end md:justify-center">
								<MobileNavigation className="pointer-events-auto md:hidden" />
								<DesktopNavigation className="pointer-events-auto hidden md:block" />
							</div>
							<div className="flex justify-end md:flex-1">
								<div className="pointer-events-auto">
									<ThemeToggle />
								</div>
							</div>
						</div>
					</Container>
				</div>
			</header>
		</>
	);
}
