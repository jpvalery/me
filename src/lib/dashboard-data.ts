import {
	BETASERIES_REFACTOR_ACCESS_TOKEN,
	BETASERIES_REFACTOR_API_KEY,
	UNSPLASH_REFACTOR_TOKEN,
} from "astro:env/server";
import { getDashboardStats } from "./dashboard";

// Share one fetch between the HTML page and its public JSON snapshot.
export const dashboardStats = getDashboardStats({
	unsplashToken: UNSPLASH_REFACTOR_TOKEN,
	betaseriesKey: BETASERIES_REFACTOR_API_KEY,
	betaseriesToken: BETASERIES_REFACTOR_ACCESS_TOKEN,
});
