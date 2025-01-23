import Image from 'next/image';

import infj from '@/images/infj-personality-type-header.png';

import { Container } from '@/components/Container';

export const metadata = {
	title: 'How to work with Jp',
	description: `This is a document I'm always sharing with any new reports as a way to understand each other better and build trust.`,
};

export default function About() {
	return (
		<Container className="prose mx-auto mt-6 max-w-5xl space-y-7 text-zinc-600 dark:text-zinc-400">
			<div className="mb-4 rounded-sm bg-stone-950/5 p-4 text-base italic dark:bg-stone-50/5">
				This is a document I&apos;m sharing with any new reports as a way to
				understand each other better and build trust.
			</div>
			<h3 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
				Background
			</h3>
			<p>
				I was born in Southern France where I spent the first 22 years of my
				life before moving to Montr&eacute;al, QC.
			</p>
			<p>
				I went through the &quot;Grandes &Eacute;coles&quot; system in France (2
				years of cram school + 3 years of business school) and graduated with an
				MSc in Management. It&apos;s hard to make a perfect correspondence with
				the North American system but the closest approximation would be that I
				have a major in Marketing and a minor in Design.{' '}
			</p>

			<p>
				I started my first venture when I was 16 (an indie music label) and
				mostly worked as a freelancer or in non-profits until I graduated.
			</p>
			<p>
				I began my career working in the video game industry, first in
				Community, then in leading marketing efforts for the games I worked on.
				Among the cool stuff I did was being on the front page of Twitch or
				working with Marvel. After that, I worked in e-commerce for a bit before
				moving to CS/Growth in start-ups in industries as unrelated as possible
				(music production before real estate).
			</p>
			<p>
				I joined <a href="http://Customer.io">Customer.io</a> in April 2021
				after having been a customer for a few years. I think it gives me a
				unique perspective as having been on both sides of the screen and
				understanding the challenges faced by our customers.
			</p>
			<h3 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
				Personality
			</h3>
			<p>
				I&apos;m not a big fan of personality tests but the Myers-Brigg is
				pretty spot on for me: I&apos;m an{' '}
				<code className="font-mono text-amber-600">INFJ-T</code>. People who are
				close to me and have been for years will tell you that it&apos;s
				objectively a very accurate description of my overall personality.
			</p>
			<figure className="grid grid-flow-row items-center gap-4 rounded-sm px-6 py-0 text-sm text-stone-400 italic md:grid-flow-col">
				<a href="https://www.16personalities.com/infj-personality">
					<div className="w-full">
						<Image src={infj} alt="INFJ" className="h-52 object-cover" />
					</div>
				</a>
				<div className="grid grid-flow-row gap-4">
					<div>
						Who is An Advocate (INFJ)? An Advocate (INFJ) is someone with the
						Introverted, Intuitive, Feeling, and Judging personality traits.
						They tend to approach life with deep thoughtfulness and imagination.
						Their inner vision, personal values, and a quiet, principled version
						of humanism guide them in all things.
					</div>
					<div>
						Advocates (INFJs) have some specific needs when it comes to a
						satisfying work environment. For people with this personality type,
						the most rewarding work allows them to help others while also
						growing as a person. And it&apos;s a given that an ideal career for
						Advocates must be in line with their individual values.
					</div>
				</div>
			</figure>
			<p>
				While I was good at school, I always thoroughly had more fun learning by
				doing than in a classroom.{' '}
			</p>
			<p>
				My brain is extremely curious and easily gets passionate about
				something. I <span className="italic">hate</span> not knowing how to do
				something. So I learn how to do things so I don&apos;t have to
				experience that feeling again.
			</p>
			<p>
				I like nerding out and finding creative solutions to problems. I&apos;m
				a problem-solver at heart. Give me problems and I&apos;ll spit out
				solutions.{' '}
			</p>
			<p>
				If I make a promise, I&apos;ll hold it no matter the cost. Keeping my
				word is not negotiable.{' '}
			</p>
			<p>
				I&apos;m definitely an introvert—used to be more of an extrovert. I
				don&apos;t like big crowds or vast social networks. I&apos;m a rather
				private person but I don&apos;t mind sharing anything if you ask.
			</p>
			<p>
				That being said, I care a lot about people near me, whether family,
				friends, or colleagues and will always put them first.
			</p>
			<p>
				While I can seem calm and composed at first, I get easily excited by
				things that passionate me.
			</p>
			<p>
				Tangentially, if I get into something that gets me focused/stimulated I
				can easily lose track of time. I easily get in a flow state and
				it&apos;s addicting.{' '}
			</p>
			<p>
				I will always favor quality over quantity. &quot;Buy nice rather than
				buy twice&quot; is one of my philosophies (and writing this I realize
				that it could also say &quot;do nice rather than do twice&quot;).{' '}
			</p>
			<p>
				I give my trust easily but if it&apos;s broken it&apos;s{' '}
				<span className="italic">really</span> hard to patch it up.{' '}
			</p>
			<p>
				I don&apos;t like interrupting people and will almost always yield the
				floor if we&apos;re starting to speak at the same time. This
				doesn&apos;t mean that I like being interrupted repeatedly.
			</p>
			<p>
				Sometimes, I&apos;m not the best at picking social cues or getting
				innuendos. I&apos;m communicating pretty explicitly and like people to
				be explicit with me.{' '}
			</p>
			<p>
				I&apos;m vocal both when I&apos;m pleased and when I&apos;m displeased.
				I can have strong opinions. I don&apos;t shy away from conflict but
				I&apos;ll never raise my voice. Disagreement doesn&apos;t mean
				disrespect.{' '}
			</p>
			<h3 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
				How I approach work
			</h3>
			<p>
				Work is really important for me. Quality work is essential to my overall
				happiness
			</p>
			<p>
				If I&apos;m gonna spend a third of my awake time working, better make
				sure that it counts.{' '}
			</p>
			<p>
				My work must be{' '}
				<span className="font-bold text-zinc-700 dark:text-zinc-200">
					fulfilling
				</span>
				—i.e. challenging, fun, and something I can be proud of at the end of
				the day.
			</p>
			<p>
				I burnt out a few times in the past but I&apos;ve made it to a point
				where I&apos;m better at managing myself and identifying symptoms.
			</p>
			<h4 className="text-2xl font-bold tracking-tight text-zinc-700 sm:text-3xl dark:text-zinc-200">
				How I collaborate with other people
			</h4>
			<p>
				I&apos;m a reliable collaborator—and tend to expect the same from people
				working with me.
			</p>
			<p>
				If I commit to delivering on something, I&apos;ll deliver it. If
				anything happens that makes it impossible to deliver on the timeline I
				promised, I&apos;ll update the other stakeholders immediately.
			</p>
			<p>
				I like brainstorming and getting other perspectives on challenges
				I&apos;m trying to solve.{' '}
			</p>
			<p>I work best in small, focused, groups.</p>
			<h4 className="text-2xl font-bold tracking-tight text-zinc-700 sm:text-3xl dark:text-zinc-200">
				How I approach managing/leading
			</h4>
			<p>
				Overall, I try to emulate the patterns from the great managers I had and
				steer clear of the patterns from the shitty managers I had while
				remaining cognizant that everybody&apos;s different.{' '}
			</p>
			<p>
				I&apos;ll try very hard to adapt myself to your own style and needs—if
				I&apos;m not quite hitting the mark I want to hear it as early as
				possible.
			</p>
			<p>My authentic leadership style can be summarized as:</p>
			<ul>
				<li>I want to enable you to do the best work of your career</li>
				<li>
					I want to help you grow and become more than you thought possible
				</li>
				<li>I will be available as much or as little as you need me.</li>
			</ul>
			<p>I want our relationship to be based on trust:</p>
			<ul>
				<li>
					I&apos;ll work on a no-secrets basis with you. (and while I&apos;m
					cognizant that this requires a high level of trust and comfort, I hope
					that we can work towards that goal together).{' '}
				</li>
				<li>I trust you to manage your time and work autonomously. </li>
			</ul>
			<p>
				As mentioned above, I&apos;m not the best at picking social cues—if it
				seems that I&apos;m not picking up on something it&apos;s almost
				certainly not voluntarily. Please explicit things :){' '}
			</p>
			<h3 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
				Some words of wisdom
			</h3>
			<p>
				I like quotes/sayings not to sound obnoxious at dinner parties but
				because they help bring new perspectives or remind myself of them:
			</p>
			<ul>
				<li>
					<span className="font-bold text-zinc-700 dark:text-zinc-200">
						{' '}
						A ship in harbor is safe but that&apos;s not what ships are built
						for{' '}
					</span>{' '}
					—going out of the comfort zone is not safe but that&apos;s where
					adventure and growth lie
				</li>
				<li>
					<span className="font-bold text-zinc-700 dark:text-zinc-200">
						Everything is forever until it isn&apos;t
					</span>
					—both good and bad things will come and pass, and while some things
					can seem eternal they can quickly change or collapse
				</li>
				<li>
					<span className="font-bold text-zinc-700 dark:text-zinc-200">
						{' '}
						Some things are unbelievable until they&apos;re undeniable{' '}
					</span>{' '}
					—it&apos;s not because something seems unrealistic today that
					it&apos;ll always be. More often than not, there will be a point where
					that thing will be obvious.
				</li>
				<li>
					<span className="font-bold text-zinc-700 dark:text-zinc-200">
						Be curious, not judgmental
					</span>
					—Ted Lasso is full of positive wisdom but that sums up a learning that
					I had earlier in my career to understand &quot;{' '}
					<span className="italic">
						{' '}
						what circumstances led people in the past to make that decision
						thinking it was the best possible option?{' '}
					</span>{' '}
					&quot; is a better approach than judging &quot;{' '}
					<span className="italic">why did they do things that way?</span>
					&quot;.
				</li>
				<li>
					<span className="font-bold text-zinc-700 dark:text-zinc-200">
						There&apos;s a lot of beauty in ordinary things
					</span>
				</li>
			</ul>
		</Container>
	);
}
