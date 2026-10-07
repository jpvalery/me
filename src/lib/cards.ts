/** Cemetery descriptions start with "2023-2024 — ..."; split off the years. */
export function splitYears(description = "") {
	const m = description.match(/^(\d{4}(?:-\d{4})?) — (.*)$/s);
	return { years: m?.[1] ?? "", story: m?.[2] ?? description };
}
