export const site = {
	title: "Jp Valery",
	description:
		"Customer Success Engineer at Resend, private pilot with a floats rating, photographer and side-project builder based in Montréal.",
	email: "contact@jpvalery.me",
	location: "Montréal, QC",
};

export const socials = [
	{ label: "Twitter", url: "https://twitter.com/jpvalery" },
	{ label: "GitHub", url: "https://github.com/jpvalery" },
	{ label: "Unsplash", url: "https://unsplash.com/@jpvalery" },
	{ label: "LinkedIn", url: "https://linkedin.com/in/jpvalery" },
] as const;

export interface NavItem {
	label: string;
	url: string;
	/** External links open in a new tab */
	external?: boolean;
	children?: NavItem[];
}

/** Header navigation; children become dropdowns on desktop. */
export const navigation: NavItem[] = [
	{
		label: "About",
		url: "/",
		children: [
			{ label: "Now", url: "/now" },
			{ label: "Stack", url: "/stack" },
			{ label: "Dashboard", url: "/dashboard" },
		],
	},
	{
		label: "Work",
		url: "/work",
		children: [
			{ label: "Resume", url: "https://resume.jpvalery.me", external: true },
			{ label: "Work with me", url: "/work/how-to-work-with-me" },
			{ label: "Recommendations", url: "/work/recommendations" },
		],
	},
	{
		label: "Projects",
		url: "/projects",
		children: [
			{ label: "Hockay", url: "https://hockay.com", external: true },
			{
				label: "Safety Briefing",
				url: "https://safety-briefing.com",
				external: true,
			},
			{
				label: "TrimCarbon.com",
				url: "https://trimcarbon.com",
				external: true,
			},
			{
				label: "Flaps",
				url: "https://github.com/jpvalery/flaps",
				external: true,
			},
			{ label: "Cemetery", url: "/projects/cemetery" },
		],
	},
	{
		label: "Photography",
		url: "/photography",
		children: [
			{ label: "Portfolio", url: "https://jpvalery.photo", external: true },
			{
				label: "Contact Sheets",
				url: "https://archive.jpvalery.photo",
				external: true,
			},
		],
	},
	{ label: "Contact", url: "/contact" },
];

export const footerLinks: NavItem[] = [
	{ label: "Photography", url: "/photography" },
	{ label: "Work", url: "/work" },
	{ label: "Projects", url: "/projects" },
	{ label: "Now", url: "/now" },
	{ label: "Contact", url: "/contact" },
];
