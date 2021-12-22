import { ExternalLinkIcon } from "@heroicons/react/solid";
import { NextSeo } from "next-seo";

export default function Writings() {
  return (
    <>
      <NextSeo
        title="Writings"
        description="Things I wrote at some point at that I found decent enough to publicly share them."
        openGraph={{
          title: "Writings",
          description:
            "Things I wrote at some point at that I found decent enough to publicly share them.",
          images: [
            {
              url:
                "https://og.jpvalery.me/**Writings**.png?theme=dotme&md=1&fontSize=125px&images=https%3A%2F%2Fog.jpvalery.me%2Fstatic%2Fraccoon.svg&heights=300",
            },
          ],
        }}
      />
      <main>
        <h1 className="text-5xl text-white font-cartridge">Writings</h1>
        <div className="grid grid-flow-row gap-4">
          <article className="mt-4 prose prose-xl text-stone-50">
            <p>Hoping to populate more this section soon</p>
          </article>

          <div className="grid grid-flow-row gap-2 p-4 text-white rounded bg-stone-800">
            <h1 className="text-xl font-bold">UJaaP</h1>
            <p>
              A manifesto to methodically approach your communications with your
              users based on how they interact with your product. The right
              message at the right time for the right person with the right
              benefit.
            </p>
            <a href="https://ujaap.com" target="_blank">
              <span className="inline-flex text-base font-medium text-stone-50">
                UJaaP.com
                <ExternalLinkIcon className="w-4 h-4 mt-1 ml-2" />
              </span>
            </a>
          </div>

          <div className="grid grid-flow-row gap-2 p-4 text-white rounded bg-stone-800">
            <h1 className="text-xl font-bold">Cuisinomicon</h1>
            <p>
              A collection of improvised or invented recipes for delicious food
              and drinks.
            </p>
            <a href="https://cuisinomicon.com" target="_blank">
              <span className="inline-flex text-base font-medium text-stone-50">
                cuisinomicon.com
                <ExternalLinkIcon className="w-4 h-4 mt-1 ml-2" />
              </span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
