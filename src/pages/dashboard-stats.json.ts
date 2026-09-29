import type { APIRoute } from "astro";
import { dashboardStats } from "../lib/dashboard-data";

export const GET: APIRoute = async () => Response.json(await dashboardStats);
