import { z } from "zod";

export type FieldName = "name" | "email" | "reason" | "message";

export interface Field {
	name: FieldName;
	label: string;
	placeholder?: string;
	required?: boolean;
	options?: { value: string; label: string }[];
}

export interface ContactFormDef {
	type: string;
	title: string;
	description: string;
	intro: string[];
	fields: Field[];
	noindex?: boolean;
}

const name: Field = {
	name: "name",
	label: "What's your name?",
	placeholder: "Your name",
	required: true,
};
const email: Field = {
	name: "email",
	label: "Where can I write back to you?",
	placeholder: "you@example.com",
	required: true,
};
const message = (label = "Can you add more details?"): Field => ({
	name: "message",
	label,
	required: true,
});

export const forms: Record<string, ContactFormDef> = {
	generic: {
		type: "generic",
		title: "Get in touch",
		description:
			"Get in touch with Jp Valery about work, photography, or just to say hi.",
		intro: [],
		fields: [
			name,
			email,
			{
				name: "reason",
				label: "What can I help you with?",
				required: true,
				options: [
					{ value: "say-hi", label: "You just wanna say hi" },
					{ value: "services", label: "You're interested in my services" },
					{ value: "photo", label: "You'd like to talk photography" },
					{ value: "other", label: "Something else" },
				],
			},
			message(),
		],
	},
	photography: {
		type: "photography",
		title: "Get in touch about photography",
		description: "Get in touch with Jp Valery about photography.",
		intro: [
			"I'm available for editorial, commercial, and documentary projects.",
			"While I'm currently favoring more in-depth editorial and documentary projects, I'm happy to discuss other projects if they match my vision or move me.",
			"Please fill out the form below and let's get started.",
		],
		fields: [
			name,
			email,
			{
				name: "reason",
				label: "What can I help you with?",
				required: true,
				options: [
					{
						value: "project-pitch",
						label: "You want to collaborate on a project",
					},
					{ value: "hire-me", label: "You'd like to hire/commission me" },
					{
						value: "general-chat",
						label: "You'd like to chat about photography in general",
					},
					{
						value: "specific-chat",
						label: "You'd like to chat about one of my series/projects",
					},
					{ value: "other", label: "Something else" },
				],
			},
			message(),
		],
	},
	date: {
		type: "date",
		title: "Sounds like we'd be a match?",
		description: "Get in touch",
		intro: [],
		noindex: true,
		fields: [
			name,
			email,
			message("What caught your eye / Why do you think we'd be a match?"),
		],
	},
};

export const formTypes = Object.keys(forms);

const MAX = { message: 280, default: 80 } as const;

/** Server-side schema for one form, built from the same definition the UI renders. */
export function schemaFor(def: ContactFormDef) {
	const shape: Record<string, z.ZodType> = {};
	for (const f of def.fields) {
		// Every form needs a validated reply address; declare it explicitly below.
		if (f.name === "email") continue;
		const max = f.name === "message" ? MAX.message : MAX.default;
		let s: z.ZodType;
		if (f.options)
			s = z.enum(f.options.map((o) => o.value) as [string, ...string[]]);
		else s = z.string().trim().max(max);
		if (f.required && !f.options) s = (s as z.ZodString).min(1);
		shape[f.name] = f.required ? s : s.optional().or(z.literal(""));
	}
	return z.object({
		_type: z.literal(def.type),
		...shape,
		email: z.string().trim().pipe(z.email().max(MAX.default)),
		checked: z.literal(true),
		// Anti-bot fields, validated separately in the endpoint
		nickname: z.string().max(0).optional(),
		"cf-turnstile-response": z.string().min(1),
	});
}
