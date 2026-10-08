import type { ImageMetadata } from "astro";

const files = import.meta.glob<{ default: ImageMetadata }>(
	"../images/screenshots/*.webp",
	{ eager: true },
);

/** Look up a home page screenshot in src/images/screenshots by its filename without extension. */
export function getScreenshot(name: string) {
	const file = files[`../images/screenshots/${name}.webp`];
	if (!file)
		throw new Error(`Unknown screenshot "${name}": run pnpm screenshots ${name}`);
	return file.default;
}
