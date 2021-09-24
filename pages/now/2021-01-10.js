import { NextSeo } from "next-seo";

export default function Now() {
  return (
    <>
      <NextSeo
        title="Now (January 10th 2021)"
        description="What was I up to on January 10th 2021?"
        openGraph={{
          title: "Now (January 10th 2021)",
          description: "What was I up to on January 10th 2021?",
          images: [
            {
              url:
                "https://og.jpvalery.me/**Now**%20(January%2010th%202021).png?theme=dotme&md=1&fontSize=125px&images=https%3A%2F%2Fog.jpvalery.me%2Fstatic%2Fraccoon.svg&heights=300",
            },
          ],
        }}
      />
      <main>
        <h1 className="text-4xl font-extrabold tracking-tight text-white">
          What was I up to on January 10th 2021?
        </h1>
        <article className="py-4 prose prose-xl text-gray-300 prose-indigo">
          <p>Well... 2020 was a effing dumpster fire, wasn't it?</p>
          <p>
            I'm hoping 2021 will be better (<em>as everyone probably is</em>)
            but let's say that I'm cautiously optimistic. Let's see how things
            are after our latest lockdown.
          </p>
          <p>
            On the bright side, I think the dumpster fire allowed me to really
            figure out what was important for me and what I wanted from my life.
          </p>
          <p>
            We also had a great harvest in our veggie garden over the summer and
            I converted my landlord and neighbor to the joy of growing your own
            food.
          </p>
          <p>
            I also built a flight sim chair out of wood and a recycled auto
            seat, as well as a custom joystick with an Arduino and some soldered
            buttons.
          </p>
          <p>
            These days I'm playing mostly Apex Legends and Rainbow Six Siege.
            The latest Red Dead Online update was a bloody joke and literally
            made me churn from the game. I've also started{" "}
            <a href="https://lichess.org/@/jpvalery">playing chess online</a>{" "}
            and I'm neither great nor terrible.
          </p>
          <p>
            I've been reading a lot of books on self-sufficiency and
            homesteading. I've also started preparing for the next growing
            seasons and can't wait to receive my order of seeds.
          </p>
          <p>
            Oh and, you've guessed it, I'm cleaning up my websites and domains.
            Kinda like spring cleaning but with DNS records and code and it's
            winter.
          </p>
          <p>
            <em>
              Also wondering if I should save these updates as some sort of
              seasonal journal.
            </em>
          </p>
        </article>
      </main>
    </>
  );
}
