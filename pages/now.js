import NextLink from "next/link";
import { NextSeo } from "next-seo";

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
      <main>
        <h1 className="text-5xl text-white font-cartridge">
          What am I up to now?
        </h1>
        <p className="mt-4 text-base font-semibold tracking-wide uppercase text-stone-500">
          Last updated: August 12th, 2021
        </p>
        <article className="py-4 prose prose-xl text-stone-50 prose-a:text-now-600">
          <p>
            Almost 5 months since my last update, <em>what is up?</em>
          </p>
          <p>
            I started my new role at Customer.io and so far so good! I'm trying
            not to jinx it but I'm fortunate to have a nice team, great leaders,
            and working on a product I love. I think it really makes a
            difference. It's pretty exciting to help people extract the most out
            of it everyday.
          </p>
          <p>
            I'll be spending a few days in Gaspésie next week to see my old
            roomate, get some marine air, and hopefully take some nice pictures
            after almost 18 months without any photos...
          </p>
          <p>
            These days I'm playing mostly Apex Legends (pretty proud of my 20%
            win rate and 1 KD this season), Microsoft Flight Simulator, and
            bouncing between Red Dead Online, Grounded, and Back4Blood Beta the
            rest of the time.
          </p>
          <p>
            Despite a uncooperative weather, my garden has been doing pretty
            good. This year, I wanted to experiment with new species and I have
            had so much fun seeing my cucamelons, casper eggplants, etc...
            growing. So yummy!
          </p>
          <p>
            Now, with the upcoming Fall and although I'm vaccinated, I'm
            wondering about how the pandemic will shape the cold seaons.
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
            <h2 className="px-3 text-lg font-medium bg-stone-900 text-stone-50">
              Previous versions
            </h2>
          </div>
        </div>
        <ul>
          <li className="hover:text-now-600">
            <NextLink href="/now/2021-03-30">March 30th, 2021</NextLink>
          </li>
          <li className="hover:text-now-600">
            <NextLink href="/now/2021-01-10">January 10th, 2021</NextLink>
          </li>
        </ul>
      </main>
    </>
  );
}
