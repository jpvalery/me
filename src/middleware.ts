import { NextRequest, NextResponse } from 'next/server';

export const config = {
	matcher: [
		/*
		 * Match all paths except for:
		 * 1. /api routes
		 * 2. /_next (Next.js internals)
		 * 3. /_static (inside /public)
		 * 4. all root files inside /public (e.g. /favicon.ico)
		 */
		'/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)',
	],
};

export default async function middleware(req: NextRequest) {
	const url = req.nextUrl;

	// Get hostname of request (e.g. demo.vercel.pub, demo.localhost:3000)
	const hostname = req.headers
		.get('host')!
		.replace('.localhost:3000', `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);

	// Get the pathname of the request (e.g. /, /about, /blog/first-post)
	const path = url.pathname;

	// rewrites for contact pages
	if (hostname == `contact.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) {
		return NextResponse.rewrite(
			new URL(`/contact${path === '/' ? '' : path}`, req.url),
		);
	}

	// rewrites for consultancy pages
	if (hostname == `consultancy.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) {
		if (path == '/advisorship') {
			return NextResponse.rewrite(new URL(`/work/advisorship`, req.url));
		} else {
			return NextResponse.rewrite(new URL(`/work/consultancy`, req.url));
		}
	}

	return NextResponse.next();
}
