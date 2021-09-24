import NextLink from "next/link";

export default function Now() {
  return (
    <>
      <NextSeo
        title="Now (March 30th 2021)"
        description="What was I up to on March 30th 2021?"
        openGraph={{
          title: "Now (March 30th 2021)",
          description: "What was I up to on March 30th 2021?",
          images: [
            {
              url:
                "https://og.jpvalery.me/**Now**%20(March%2030th%202021).png?theme=dotme&md=1&fontSize=125px&images=https%3A%2F%2Fog.jpvalery.me%2Fstatic%2Fraccoon.svg&heights=300",
            },
          ],
        }}
      />
      <main>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          What am I up to now?
        </h1>
        <p className="mt-4 text-base font-semibold tracking-wide text-gray-500 uppercase">
          Last updated: March 30th, 2021
        </p>
        <article className="py-4 prose prose-xl text-gray-300 prose-indigo">
          <p>
            2021 started pretty crazy—no reasons to change the winning recipe of
            2020, eh?
          </p>
          <p>
            I left my role at Local Logic in February. I tried to get alignment
            on my future at the company after blowing past all my objectives and
            working non-stop for a year. I was told to quit. So, I went{" "}
            <em>yolo</em> and did just that.
          </p>
          <p>
            I have to say I'm pretty proud of me for doing so. It was both a
            crazy and a courageous choice to draw the line and say "no more". I
            think that a few years ago I would have kept enduring the abuse and
            toxicity, rather than calling it quits
          </p>
          <p>
            <em>Fortis Fortuna Adiuvat</em> as they say.
          </p>
          <p>
            I got a couple of freelancing gigs to keep me busy while I was
            enjoying funemployment and I landed a role at Customer.io as a
            Customer Success Manager. If you ran into me over the past few years
            and we chatted about marketing automation, there's a 99.999% chance
            I annoyed you with how freaking awesome Customer.io is as a product.
            So, I couldn't be more excited to be joining this team.
          </p>
          <p>
            These days I'm playing mostly Apex Legends, Dead by Daylight,
            H:CotW. I'm looking forward to jumping back a bit more on Flight
            Simulator, especially with an Oculus Quest on the way.
          </p>
          <p>
            I've started my seedlings for the season and as usual I'm just
            amazed by these lil' plants making their way up through the soil.
            Life is amazing.
          </p>
          <p>
            While the first quarter of 2021 was kinda bumpy, I'm excited for the
            rest of the year.
          </p>
        </article>
        <div className="relative py-8">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <h2 className="px-3 text-lg font-medium bg-gray-900 text-gray-50">
              Previous versions
            </h2>
          </div>
        </div>
        <ul>
          <li className="hover:text-indigo-600">
            <NextLink href="/now/2021-01-10">January 10th, 2021</NextLink>
          </li>
        </ul>
      </main>
    </>
  );
}
