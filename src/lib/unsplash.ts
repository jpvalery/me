import { dashboardStats } from "./dashboard-data";

/** Only used before the first successful fetch, when no published snapshot exists yet */
const knownViews = 300_000_000;

/** Unsplash views for prose, rounded down so "over" stays true: "305 million" or "305M" */
export async function unsplashViews(display: "long" | "short" = "long") {
	const views = (await dashboardStats).unsplash?.views ?? knownViews;
	return new Intl.NumberFormat("en-US", {
		notation: "compact",
		compactDisplay: display,
		maximumSignificantDigits: 3,
		roundingMode: "trunc",
	}).format(views);
}

/** Exact Unsplash counts for a card, from the same build-time fetch as /dashboard */
export async function unsplashStats() {
	const unsplash = (await dashboardStats).unsplash;
	if (!unsplash) return undefined;
	const day = new Date(unsplash.updatedAt).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
		timeZone: "UTC",
	});
	return {
		items: [
			{ label: "Views", value: unsplash.views.toLocaleString("en-US") },
			{ label: "Downloads", value: unsplash.downloads.toLocaleString("en-US") },
		],
		note: `Updated ${day}`,
	};
}
