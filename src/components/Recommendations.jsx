import Image from 'next/image';

const testimonials = [
	{
		body: `JP is the ultimate problem solver. Whether that's a process problem, a team problem, or a customer problem, he handles it as only a true jack-of-all-trades can. His versatility is his superpower, leading to infamous quotes like "everyone needs a JP" from Customer.io's VP of Customer Experience.\n\nIt's rare when such raw skill comes packaged with genuine empathy, but such is the case with JP. He's a wonderful human who cares personally while challenging directly. He was a gift to work with, and I'd jump at the chance to work with him again.`,
		author: {
			name: 'Brendan Fortune',
			imageUrl: '/avatars/brendan-fortune.jpg',
		},
		large: true,
	},
	{
		body: `In my 18+ years working in email marketing, I've collaborated with countless account managers, but none have come close to the level of excellence that Jp consistently delivers. What sets him apart isn't just his technical expertise—though that's exceptional—it's his ability to see beyond immediate solutions to envision long-term strategies that genuinely improve our business.\n\nJp combines remarkable responsiveness with a genuinely pleasant demeanor that makes every interaction productive and enjoyable. He possesses a rare talent for finding creative workarounds to complex challenges, approaching each problem with the mindset of a true partner invested in our success.\n\nHis industry knowledge extends across the entire marketing landscape, offering insights that have proven invaluable to our organization. Whether we're brainstorming innovative campaign approaches or tackling technical obstacles, Jp brings both enthusiasm and practical wisdom to the table.\n\nWhat I valued most, however, is that working with Jp feels less like a business relationship and more like collaborating with a trusted friend—someone who genuinely cares about our success and brings his whole, authentic self to the partnership. If you're looking for a professional who will transform how you approach marketing while making the journey genuinely enjoyable, I couldn't recommend Jp more highly.`,
		author: {
			name: 'Matthew Hayes',

			imageUrl: '/avatars/matt-hayes.jpg',
		},
	},
	{
		body: `I have worked with CSMs for over 15 years at countless software companies and I can say without hesitating that Jp was the best CSM I've ever had the pleasure of working with.\n\nWhen I took over management of our Customer.io campaigns in 2023 I had almost no experience with the tool, let alone other marketing communication tools. Jp was very patient and understanding during my journey to learn the tool better and get caught up to speed, and he explained things in a way that allowed me to easily grasp an otherwise complicated tool. Not only that, it wasn't just that I wanted to learn the tool so that I could maintain our current campaigns, but I had the desire to take our campaigns to the next level, which Jp was eager to show me how to do.\n\nA year or so later we are thriving and our campaigns have never performed better. In fact, I realized at one point I wasn't reaching out to Jp for help as much because he had done such a good job of teaching me how to solve problems on my own. I couldn't think of a better CSM success story than that!\n\nThrough it all Jp was kind, extremely knowledgeable, and simply put you could just tell he really cared. On several occasions when I was asked to leave feedback for him I would beg Customer.io to give him a raise because whatever he was making I'm sure it wasn't enough!\n\nIf you're reading this and you're still wondering if Jp would be a good person to have on your team, you need to stop what you're doing and snag him before someone else does.`,
		author: {
			name: 'Brendan Baker',

			imageUrl: '/avatars/brendan-baker.jpg',
		},
	},
	{
		body: `It is hard to beat the good fortune of having a manager like Jp. He is generous with his time, leads by example, and actively seeks ways to bring the best out of you. His talent and work ethic are eclipsed only by his care and humility. Jp is the kind of person who will go the extra mile for you, and at the same time, pave the way for you to walk your own path. He has been one of my greatest teachers, and I would recommend him without reservation. `,
		large: true,
		author: {
			name: 'Victoria Sabo',

			imageUrl: '/avatars/victoria-sabo.jpg',
		},
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Recommendations() {
	return (
		<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-start gap-8 text-sm/6 text-gray-900 sm:mt-20 md:grid-cols-2 xl:max-w-none">
			{testimonials.map((testimonial) => (
				<figure
					className={`max-h-min rounded-2xl bg-white ring-1 shadow-lg ring-gray-900/5 ${testimonial.large && `md:col-span-2`}`}
					key={testimonial.author.name}
				>
					<blockquote className="p-6 text-lg font-semibold tracking-tight text-gray-900 sm:p-12">
						<p className="whitespace-pre-line">{`“${testimonial.body}”`}</p>
					</blockquote>
					<figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
						<Image
							alt=""
							src={testimonial.author.imageUrl}
							className="size-10 flex-none rounded-full bg-gray-50"
							width="100"
							height="100"
						/>
						<div className="flex-auto">
							<div className="font-semibold">{testimonial.author.name}</div>
						</div>
					</figcaption>
				</figure>
			))}
		</div>
	);
}
