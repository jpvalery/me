export const site = {
	title: "Jp Valery",
	tagline: "Tinkerer. Builder. Pilot.",
	description:
		"Customer Success Engineer at Resend, private pilot with a floats rating, photographer, and side-project builder based in Montréal.",
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
			{ label: "Dashboard", url: "/dashboard" },
		],
	},
	{ label: "Work", url: "/work" },
	{ label: "Projects", url: "/projects" },
	{ label: "Photography", url: "/photography" },
	{ label: "Contact", url: "/contact" },
];

export const footerLinks: NavItem[] = [
	{ label: "Photography", url: "/photography" },
	{ label: "Work", url: "/work" },
	{ label: "Projects", url: "/projects" },
	{ label: "Now", url: "/now" },
	{ label: "Contact", url: "/contact" },
];
