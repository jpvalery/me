/**
 * Capture the home page of every card that has a `screenshot` in src/content/cards.json,
 * into src/images/screenshots/<screenshot>.webp.
 *
 *   pnpm screenshots                              # every card, from its live URL
 *   pnpm screenshots dmc hockay                   # only these screenshots
 *   pnpm screenshots hockay=http://localhost:3000 # capture another URL, e.g. a local server
 *
 * Drives a local Chrome or Chromium through the DevTools protocol, so it needs no extra
 * dependency. Set CHROME_PATH if it isn't found. Consent banners are declined first.
 */
import { spawn } from "node:child_process";
import {
	existsSync,
	globSync,
	mkdtempSync,
	readFileSync,
	rmSync,
} from "node:fs";
import { homedir, tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = fileURLToPath(new URL("..", import.meta.url));
const out = join(root, "src/images/screenshots");
const viewport = {
	width: 1280,
	height: 800,
	deviceScaleFactor: 2,
	mobile: false,
};
/** The site is in English; don't inherit the system locale */
const language = "en-US";
/** Stored width; Astro makes the smaller sizes at build time */
const width = 1600;
/** Time after the load event for fonts, images, and entrance animations */
const settle = 3000;

// Click "Decline" or "Reject" the way a visitor would
const declineConsent = `(() => {
	const words = /^(decline|reject|reject all|refuse|refuser|tout refuser|no thanks)$/i;
	for (const el of document.querySelectorAll("button, [role=button]")) {
		if (words.test(el.textContent.trim())) el.click();
	}
	scrollTo(0, 0);
})()`;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function findChrome() {
	const candidates = [
		process.env.CHROME_PATH,
		"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
		"/Applications/Chromium.app/Contents/MacOS/Chromium",
		"/usr/bin/google-chrome",
		"/usr/bin/chromium",
		// Browsers downloaded by Playwright
		...globSync(
			`${homedir()}/{Library/Caches,.cache}/ms-playwright/chromium-*/*/{chrome,Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing}`,
		),
	];
	const found = candidates.find((path) => path && existsSync(path));
	if (!found) throw new Error("Chrome not found: set CHROME_PATH");
	return found;
}

/** Minimal DevTools protocol client over the browser's WebSocket */
async function connect(url) {
	const ws = new WebSocket(url);
	const pending = new Map();
	const listeners = new Set();
	let id = 0;
	ws.onmessage = ({ data }) => {
		const msg = JSON.parse(data);
		const call = pending.get(msg.id);
		if (call) {
			pending.delete(msg.id);
			if (msg.error) call.reject(new Error(msg.error.message));
			else call.resolve(msg.result);
		} else for (const listener of listeners) listener(msg);
	};
	await new Promise((resolve, reject) => {
		ws.onopen = resolve;
		ws.onerror = reject;
	});
	return {
		send: (method, params = {}, sessionId) =>
			new Promise((resolve, reject) => {
				id += 1;
				pending.set(id, { resolve, reject });
				ws.send(JSON.stringify({ id, method, params, sessionId }));
			}),
		once: (method, sessionId) =>
			new Promise((resolve) => {
				const listener = (msg) => {
					if (msg.method !== method || msg.sessionId !== sessionId) return;
					listeners.delete(listener);
					resolve(msg.params);
				};
				listeners.add(listener);
			}),
		close: () => ws.close(),
	};
}

async function launch() {
	const profile = mkdtempSync(join(tmpdir(), "screenshots-"));
	const chrome = spawn(
		findChrome(),
		[
			"--headless",
			"--remote-debugging-port=0",
			`--user-data-dir=${profile}`,
			"--hide-scrollbars",
			"--no-first-run",
			"--no-default-browser-check",
			`--lang=${language}`,
			"about:blank",
		],
		{ stdio: ["ignore", "ignore", "pipe"] },
	);
	const url = await new Promise((resolve, reject) => {
		let log = "";
		chrome.stderr.on("data", (chunk) => {
			log += chunk;
			const match = log.match(/DevTools listening on (ws:\S+)/);
			if (match) resolve(match[1]);
		});
		chrome.on("exit", (code) =>
			reject(new Error(`Chrome exited (${code}):\n${log}`)),
		);
	});
	const browser = await connect(url);
	return {
		browser,
		close() {
			browser.close();
			chrome.kill();
			rmSync(profile, { recursive: true, force: true });
		},
	};
}

async function capture(browser, userAgent, { name, url }) {
	const { send, once } = browser;
	const { targetId } = await send("Target.createTarget", { url: "about:blank" });
	try {
		const { sessionId } = await send("Target.attachToTarget", {
			targetId,
			flatten: true,
		});
		const page = (method, params) => send(method, params, sessionId);
		await page("Page.enable");
		await page("Emulation.setDeviceMetricsOverride", viewport);
		await page("Emulation.setUserAgentOverride", {
			userAgent,
			acceptLanguage: `${language},en;q=0.9`,
		});
		const loaded = once("Page.loadEventFired", sessionId);
		const { errorText } = await page("Page.navigate", { url });
		if (errorText) throw new Error(errorText);
		await Promise.race([loaded, sleep(20_000)]);
		await sleep(settle);
		await page("Runtime.evaluate", { expression: declineConsent });
		await sleep(1000);
		const { data } = await page("Page.captureScreenshot", { format: "png" });
		await sharp(Buffer.from(data, "base64"))
			.resize({ width })
			.webp({ quality: 80 })
			.toFile(join(out, `${name}.webp`));
	} finally {
		await send("Target.closeTarget", { targetId });
	}
}

// "name" or "name=url" arguments; none means every card
const overrides = new Map(
	process.argv.slice(2).map((arg) => {
		const [name, ...url] = arg.split("=");
		return [name, url.join("=") || undefined];
	}),
);
const cards = JSON.parse(
	readFileSync(join(root, "src/content/cards.json"), "utf8"),
);
const jobs = cards
	.filter((card) => card.screenshot)
	.filter((card) => overrides.size === 0 || overrides.has(card.screenshot))
	.map((card) => ({
		name: card.screenshot,
		url: overrides.get(card.screenshot) ?? card.href,
	}));
const unknown = [...overrides.keys()].filter(
	(name) => !cards.some((card) => card.screenshot === name),
);
if (unknown.length > 0) {
	console.error(`No card has screenshot ${unknown.join(", ")}`);
	process.exit(1);
}

const { browser, close } = await launch();
let failed = 0;
try {
	// Headless Chrome announces itself; some sites turn it away
	const { userAgent } = await browser.send("Browser.getVersion");
	const visitor = userAgent.replace("HeadlessChrome", "Chrome");
	for (const job of jobs) {
		try {
			await capture(browser, visitor, job);
			console.log(`✓ ${job.name}  ${job.url}`);
		} catch (error) {
			failed += 1;
			console.error(`✗ ${job.name}  ${job.url}: ${error.message}`);
		}
	}
} finally {
	close();
}
process.exitCode = failed > 0 ? 1 : 0;
