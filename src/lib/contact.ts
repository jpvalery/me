import { z } from 'zod';

export type FieldName =
	| 'name'
	| 'email'
	| 'role'
	| 'company'
	| 'website'
	| 'reason'
	| 'message'
	| 'budget';

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
	name: 'name',
	label: "What's your name?",
	placeholder: 'Your name',
	required: true,
};
const email: Field = {
	name: 'email',
	label: 'Where can I write back to you?',
	placeholder: 'you@example.com',
	required: true,
};
const role: Field = {
	name: 'role',
	label: "What's your role?",
	placeholder: 'Assistant to the regional manager',
	required: true,
};
const company: Field = {
	name: 'company',
	label: "What's your company?",
	placeholder: 'Dunder Mifflin, Inc.',
	required: true,
};
const website: Field = {
	name: 'website',
	label: "What's your website?",
	placeholder: 'infinity.dundermifflin.com',
};
const message = (label = 'Can you add more details?'): Field => ({
	name: 'message',
	label,
	required: true,
});

export const forms: Record<string, ContactFormDef> = {
	generic: {
		type: 'generic',
		title: 'Get in touch',
		description: 'Easily get in touch with me',
		intro: [],
		fields: [
			name,
			email,
			{
				name: 'reason',
				label: 'What can I help you with?',
				required: true,
				options: [
					{ value: 'say-hi', label: 'You just wanna say hi' },
					{ value: 'services', label: "You're interested in my services" },
					{ value: 'photo', label: "You'd like to talk photography" },
					{ value: 'other', label: 'Something else' },
				],
			},
			message(),
		],
	},
	photography: {
		type: 'photography',
		title: 'Get in touch about photography',
		description: 'Get in touch about my photography',
		intro: [
			"I'm available for editorial, commercial, and documentary projects.",
			"While I'm currently favoring more in-depth editorial and documentary projects, I'm happy to discuss other projects if they match my vision or move me.",
			"Please fill out the form below and let's get started.",
		],
		fields: [
			name,
			email,
			{
				name: 'reason',
				label: 'What can I help you with?',
				required: true,
				options: [
					{
						value: 'project-pitch',
						label: 'You want to collaborate on a project',
					},
					{ value: 'hire-me', label: "You'd like to hire/commission me" },
					{
						value: 'general-chat',
						label: "You'd like to chat about photography in general",
					},
					{
						value: 'specific-chat',
						label: "You'd like to chat about one of my series/projects",
					},
					{ value: 'other', label: 'Something else' },
				],
			},
			message(),
		],
	},
	advisorship: {
		type: 'advisorship',
		title: 'Hire me as an advisor',
		description: 'Hire me as an advisor',
		intro: [
			'The more details you give me, the faster we can start working together.',
			"Please fill out the form below and let's get started.",
		],
		fields: [
			name,
			email,
			role,
			company,
			website,
			{
				name: 'reason',
				label: 'What can I help you with?',
				required: true,
				options: [
					{ value: 'growth', label: 'Growth' },
					{ value: 'cs', label: 'Customer Success' },
					{ value: 'operations', label: 'GrowthOps / RevOps' },
					{ value: 'automation', label: 'Automation' },
					{ value: 'instrumentation', label: 'Instrumentation' },
					{ value: 'analytics', label: 'Analytics' },
					{ value: 'other', label: 'Something else' },
				],
			},
			message(),
		],
	},
	consultancy: {
		type: 'consultancy',
		title: 'Hire me as a consultant',
		description: 'Hire me as a consultant',
		intro: [
			"I'm currently available for projects.",
			'The more details you give me, the faster we can get this show on the road.',
			"Please fill out the form below and let's get started.",
		],
		fields: [
			name,
			email,
			role,
			company,
			website,
			{
				name: 'reason',
				label: 'What can I help you with?',
				required: true,
				options: [
					{ value: 'services', label: "You're interested in my services" },
					{
						value: 'scoped-project',
						label: 'You already have a scoped project',
					},
					{ value: 'integration', label: 'You need an expert in integration' },
					{
						value: 'automation',
						label: 'You want to automate your processes',
					},
					{
						value: 'instrumentation',
						label: 'You want to measure and instrument your product',
					},
					{ value: 'other', label: 'Something else' },
				],
			},
			message(),
			{
				name: 'budget',
				label: "What's your budget?",
				placeholder: '1,000 USD',
				required: true,
			},
		],
	},
	date: {
		type: 'date',
		title: "Sounds like we'd be a match?",
		description: 'Get in touch',
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
		const max = f.name === 'message' ? MAX.message : MAX.default;
		let s: z.ZodType;
		if (f.name === 'email')
			s = z.string().trim().pipe(z.email().max(MAX.default));
		else if (f.options)
			s = z.enum(f.options.map((o) => o.value) as [string, ...string[]]);
		else s = z.string().trim().max(max);
		if (f.required && !f.options && f.name !== 'email')
			s = (s as z.ZodString).min(1);
		shape[f.name] = f.required ? s : s.optional().or(z.literal(''));
	}
	return z.object({
		_type: z.literal(def.type),
		...shape,
		checked: z.literal(true),
		// Anti-bot fields, validated separately in the endpoint
		nickname: z.string().max(0).optional(),
		ts: z.number(),
		'cf-turnstile-response': z.string().min(1),
	});
}
