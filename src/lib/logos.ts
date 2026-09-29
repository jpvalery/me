import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>(
	'../images/logos/*.{svg,png}',
	{ eager: true },
);

/** Look up a logo in src/images/logos by its filename without extension. */
export function getLogo(name: string | undefined | null) {
	if (!name) return undefined;
	const key = Object.keys(files).find((k) =>
		new RegExp(`/${name}\\.(svg|png)$`).test(k),
	);
	if (!key)
		throw new Error(`Unknown logo "${name}": add it to src/images/logos`);
	return files[key].default;
}
