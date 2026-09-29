import { z } from "zod";

const count = z.number().int().nonnegative();
const updatedAt = z.iso.datetime();
const unsplashSnapshot = z.object({
	updatedAt,
	downloads: count,
	views: count,
});
const betaseriesSnapshot = z.object({ updatedAt, episodes: count });
const unsplashResponse = z.object({
	downloads: z.object({ total: count }),
	views: z.object({ total: count }),
});
const betaseriesResponse = z.object({
	member: z.object({ stats: z.object({ episodes: count }) }),
});

export interface DashboardCredentials {
	unsplashToken?: string;
	betaseriesKey?: string;
	betaseriesToken?: string;
}

export interface DashboardStats {
	unsplash: z.infer<typeof unsplashSnapshot> | null;
	betaseries: z.infer<typeof betaseriesSnapshot> | null;
}

async function getJson(
	url: string,
	headers: Record<string, string>,
	fetcher: typeof fetch,
): Promise<unknown> {
	try {
		const res = await fetcher(url, {
			headers,
			signal: AbortSignal.timeout(5_000),
		});
		return res.ok ? await res.json() : null;
	} catch {
		return null;
	}
}

/** Build-time only: reuse the last published snapshot when an API is unavailable. */
export async function getDashboardStats(
	credentials: DashboardCredentials,
	fetcher: typeof fetch = fetch,
): Promise<DashboardStats> {
	const [unsplashData, betaseriesData] = await Promise.all([
		credentials.unsplashToken
			? getJson(
					"https://api.unsplash.com/users/jpvalery/statistics",
					{ Authorization: `Bearer ${credentials.unsplashToken}` },
					fetcher,
				)
			: null,
		credentials.betaseriesKey && credentials.betaseriesToken
			? getJson(
					"https://api.betaseries.com/members/infos",
					{
						"X-BetaSeries-Version": "3.0",
						"X-BetaSeries-Key": credentials.betaseriesKey,
						Authorization: `Bearer ${credentials.betaseriesToken}`,
					},
					fetcher,
				)
			: null,
	]);
	const unsplash = unsplashResponse.safeParse(unsplashData);
	const betaseries = betaseriesResponse.safeParse(betaseriesData);
	// This is the current production deployment, not the deployment being built.
	// The snapshot contains public counts and dates only, never credentials.
	const previous =
		!unsplash.success || !betaseries.success
			? await getJson("https://jpvalery.me/dashboard-stats.json", {}, fetcher)
			: null;
	const snapshot =
		previous && typeof previous === "object"
			? (previous as Record<string, unknown>)
			: {};
	const now = new Date().toISOString();
	return {
		unsplash: unsplash.success
			? {
					updatedAt: now,
					downloads: unsplash.data.downloads.total,
					views: unsplash.data.views.total,
				}
			: (unsplashSnapshot.safeParse(snapshot.unsplash).data ?? null),
		betaseries: betaseries.success
			? { updatedAt: now, episodes: betaseries.data.member.stats.episodes }
			: (betaseriesSnapshot.safeParse(snapshot.betaseries).data ?? null),
	};
}
