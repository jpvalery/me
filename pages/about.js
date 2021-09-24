import { NextSeo } from "next-seo";

export default function Now() {
  return (
    <>
      <NextSeo
        title="About me"
        description="Incomplete biography for whoever might care"
        openGraph={{
          title: "About me",
          description: "Incomplete biography for whoever might care",
          images: [
            {
              url:
                "https://og.jpvalery.me/**About**.png?theme=dotme&md=1&fontSize=125px&images=https%3A%2F%2Fog.jpvalery.me%2Fstatic%2Fraccoon.svg&heights=300",
            },
          ],
        }}
      />
      <main>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          Who the heck is Jp
        </h1>
        <article className="mt-4 prose prose-xl text-gray-300 prose-indigo">
          <p>
            I guess that's what you're trying to figure out if you're on this
            page.
          </p>
          <p>
            I believe it's hard to summarize a person in a few paragraphs but
            I'll give it a shot.{" "}
          </p>
          <p>
            So, I'm Jp. Well, technically <em>Jean-Pierre</em> if you're going
            to ask but everybody has always called me Jp.
          </p>
          <p>
            I was born in France in 1992 and I lived there until I moved to
            Montréal in 2014. I became a dual-citizen in 2020.
          </p>
          <p>
            I'm currently a Customer Success Manager at Customer.io where I
            spend my days helping people have success with the platform like I
            did when I was a user of it.
          </p>
          <p>
            Before that, I've dabbled in{" "}
            <a href="https://linkedin.com/in/jpvalery">quite a few things</a>.
            From freelancing to multinationals, from the music industry to the
            video game industry, from marketing to RevOps.
          </p>
          <p>
            I like to keep things fresh and interesting. That being said, I
            think I finally found my sweet spot in seed-stage/series A startups.
            I offer <a href="https://growthmontreal.com">advisorship</a> to
            offer my experience and tips.
          </p>
          <p>
            Photography has been a huge component of my life for the past
            decade. My pictures have been viewed over 130,000,000 times on{" "}
            <a href="https://unsplash.com/@jpvalery">Unsplash</a>, have been
            published in 2 books, and exhibited once. The last year didn't
            really motivate me to take any pictures but I hope to get back to
            it.
          </p>
          <p>
            I'm also a gamer. I've been playing mostly on Xbox for the past few
            years but I hop on a computer regularly to hone my piloting skills
            on simulators.
          </p>
          <p>
            Last but not least, I'm really into gardening. This must be in my
            genes from my great-grandfather who was a farmer. It's like
            meditation to me and I crave the taste of fresh produce.
            Tangentially, I'm interested in homesteading and self-sufficieny.
            Hoping to buy a farmland in the future to have the space to indulge
            in that hobby.
          </p>
        </article>
      </main>
    </>
  );
}
