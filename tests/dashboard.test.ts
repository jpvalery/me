import assert from "node:assert/strict";
import { test } from "node:test";
import { getDashboardStats } from "../src/lib/dashboard.ts";

const credentials = {
	unsplashToken: "test",
	betaseriesKey: "test",
	betaseriesToken: "test",
};
const previous = {
	unsplash: {
		updatedAt: "2026-01-09T13:00:00.000Z",
		downloads: 100,
		views: 1000,
	},
	betaseries: { updatedAt: "2026-01-08T13:00:00.000Z", episodes: 500 },
};

test("healthy APIs publish counts and refresh dates without fetching a snapshot", async () => {
	const requests: string[] = [];
	const fetcher: typeof fetch = async (input, init) => {
		assert.ok(init?.signal);
		requests.push(String(input));
		return Response.json(
			String(input).includes("unsplash")
				? { downloads: { total: 200 }, views: { total: 2000 } }
				: { member: { stats: { episodes: 600 } } },
		);
	};
	const stats = await getDashboardStats(credentials, fetcher);
	assert.equal(requests.length, 2);
	assert.equal(stats.unsplash?.downloads, 200);
	assert.equal(stats.betaseries?.episodes, 600);
	assert.ok(
		Date.parse(stats.unsplash?.updatedAt ?? "") >
			Date.parse(previous.unsplash.updatedAt),
	);
});

test("one failed API preserves its counts and original date while the other refreshes", async () => {
	const fetcher: typeof fetch = async (input) => {
		if (String(input).includes("unsplash"))
			throw new DOMException("timeout", "TimeoutError");
		if (String(input).includes("betaseries"))
			return Response.json({ member: { stats: { episodes: 700 } } });
		return Response.json(previous);
	};
	const stats = await getDashboardStats(credentials, fetcher);
	assert.deepEqual(stats.unsplash, previous.unsplash);
	assert.equal(stats.betaseries?.episodes, 700);
});

test("missing credentials reuse the published snapshot without sending credentials", async () => {
	const fetcher: typeof fetch = async (input, init) => {
		assert.equal(String(input), "https://jpvalery.me/dashboard-stats.json");
		assert.deepEqual(init?.headers, {});
		return Response.json(previous);
	};
	assert.deepEqual(await getDashboardStats({}, fetcher), previous);
});

test("invalid API counts use the snapshot; invalid snapshot sources remain unavailable", async () => {
	const fetcher: typeof fetch = async (input) => {
		if (String(input).includes("unsplash"))
			return Response.json({ downloads: { total: -1 }, views: { total: "2000" } });
		if (String(input).includes("betaseries")) return new Response("invalid JSON");
		return Response.json({
			...previous,
			betaseries: { updatedAt: "invalid", episodes: 12 },
		});
	};
	assert.deepEqual(await getDashboardStats(credentials, fetcher), {
		unsplash: previous.unsplash,
		betaseries: null,
	});
});

test("a first deployment with no APIs or published snapshot stays buildable", async () => {
	const fetcher: typeof fetch = async () => new Response(null, { status: 404 });
	assert.deepEqual(await getDashboardStats({}, fetcher), {
		unsplash: null,
		betaseries: null,
	});
});
