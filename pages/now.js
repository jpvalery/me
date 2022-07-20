import { Post } from "@jpvalery/mistral";
import { NextSeo } from "next-seo";
import NextLink from "next/link";

export default function Now() {
  return (
    <>
      <NextSeo
        title="Now"
        description="Ever wondered what am I up to lately? or too shy to ask?"
        openGraph={{
          title: "Now",
          description:
            "Ever wondered what am I up to lately? or too shy to ask?",
          images: [
            {
              url:
                "https://og.jpvalery.me/**Now**.png?theme=dotme&md=1&fontSize=125px&images=https%3A%2F%2Fog.jpvalery.me%2Fstatic%2Fraccoon.svg&heights=300",
            },
          ],
        }}
      />
      <p className="mt-4 text-base font-semibold uppercase tracking-wide text-stone-400">
        Last updated: July 20th, 2022
      </p>
      <Post header="What am I up to now?">
        <article className="prose prose-xl py-4 text-stone-50 prose-a:text-now-600">
          <p>
            Almost a year since my last update, <span>what is up?</span>
          </p>
          <p>Life has been a bit chaotic, not gonna lie</p>
          <p>
            Between traveling to France for an emergency, trying to buy a house
            in the worse market in Canada's history, and separating with my
            long-term partner, I have to admit that it's been a bit more chaotic
            than I hoped.
          </p>
          <p>
            On the brighter side, I was promoted to Team Lead at Customer.io and
            that new challenge has been fulfilling. It strikes a nice balance of
            captain/player and makes for totally not boring weeks.
          </p>
          <p>
            With the waves of Covid, I haven't really traveled nor did I find
            the energy to plan the next travel. For a time I wanted to work
            remotely in the US and enjoy the nomadic privilege, but with the gas
            prices being where they were, this plan fizzled.
          </p>
          <p>
            I've invested in an electric bike earlier this year and this is one
            of the best investment I made in a while. I've already biked over
            700km in less than 6 months and I'm eager to keep beating my
            records.
          </p>
          <p>
            As always, games take a good chunk of my time. I've been a bit burnt
            out by Apex and found new excitement in Fortnite, Fall Guys, and
            Generation Zero.
          </p>
        </article>
      </Post>
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center">
          <h2 className="bg-[#16161D] px-3 text-lg font-medium text-stone-50">
            Previous versions
          </h2>
        </div>
      </div>
      <ul>
        <li className="text-stone-100 hover:text-now-600">
          <NextLink href="/now/2021-08-12">August 12th, 2021</NextLink>
        </li>
        <li className="text-stone-100 hover:text-now-600">
          <NextLink href="/now/2021-03-30">March 30th, 2021</NextLink>
        </li>
        <li className="text-stone-100 hover:text-now-600">
          <NextLink href="/now/2021-01-10">January 10th, 2021</NextLink>
        </li>
      </ul>
    </>
  );
}
