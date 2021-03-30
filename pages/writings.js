import { ExternalLinkIcon } from "@heroicons/react/solid";

export default function Writings() {
  return (
    <main>
      <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
        Writings
      </h1>
      <div className="grid grid-flow-row gap-4">
        <article className="mt-4 prose prose-xl text-gray-300">
          <p>Hoping to populate more this section soon</p>
        </article>

        <div className="grid grid-flow-row gap-2 p-4 text-white bg-gray-800 rounded">
          <h1 className="text-xl font-bold">UJaaP</h1>
          <p>
            A manifesto to methodically approach your communications with your
            users based on how they interact with your product. The right
            message at the right time for the right person with the right
            benefit.
          </p>
          <a href="https://ujaap.com" target="_blank">
            <span className="inline-flex text-base font-medium text-gray-300">
              UJaaP.com
              <ExternalLinkIcon className="w-4 h-4 mt-1 ml-2" />
            </span>
          </a>
        </div>

        <div className="grid grid-flow-row gap-2 p-4 text-white bg-gray-800 rounded">
          <h1 className="text-xl font-bold">Cuisinomicon</h1>
          <p>
            A collection of improvised or invented recipes for delicious food
            and drinks.
          </p>
          <a href="https://cuisinomicon.com" target="_blank">
            <span className="inline-flex text-base font-medium text-gray-300">
              cuisinomicon.com
              <ExternalLinkIcon className="w-4 h-4 mt-1 ml-2" />
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}
