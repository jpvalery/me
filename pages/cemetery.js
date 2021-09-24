import Tombstone from "../components/Tombstone";
import { NextSeo } from "next-seo";

export default function Now() {
  return (
    <>
      <NextSeo
        title="Cemetery"
        description="A cemetery of past projects"
        openGraph={{
          title: "Cemetery",
          description: "A cemetery of past projects",
          images: [
            {
              url:
                "https://og.jpvalery.me/**Cemetery**.png?theme=dotme&md=1&fontSize=125px&images=https%3A%2F%2Fog.jpvalery.me%2Fstatic%2Fraccoon.svg&heights=300",
            },
          ],
        }}
      />
      <main>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          A cemetery of past projects
        </h1>
        <p className="mt-4 text-gray-300">
          Everything dies one day. This is the cemetery of things I built and
          killed off at one point
        </p>
        <container className="grid grid-cols-1 gap-6 mt-8">
          <Tombstone
            title="BestPricingPages"
            years="2019-2019"
            link="https://bestpricingpages.com"
            description="Inspired by ReallyGoodEmail, I challenged myself to building a Gatsby static site to document the best pricing pages out there. Pricing is oftentimes underthought and I grew tired of always going back to the same pages or bookmarks. So I made this resources for people to share. It didn't get the audience I hope it would and so I stopped maintaining it."
          />
          <Tombstone
            title="Drones Nation"
            years="2015-2017"
            link="https://drones-nation.com"
            description="The sister-ship to VYSUAL, this new endeavor was taking the same model but the theme were the drones. From tips, to tutorials and reviews, we covered all-things-drones."
          />
          <Tombstone
            title="VYSUAL.ORG"
            years="2013-2017"
            link="https://vysual.org"
            description="An independent magazine talking about creativity and inspiration. Our differentiator was only editorialized content (no listicles or other clickbait) in French. We were averaging 10,000 visitors per month after a year. We actually got sponsored by Google and Microsoft through non-profit programs."
          />
          <Tombstone
            title="Adopte un Français"
            years="2014"
            link="https://www.behance.net/gallery/17481345/AdopteUnFrancaisca"
            description="Looking for a job and a visa to stay in Canada in 2014, I made an interactive web résumé called AdopteUnFrançais.ca (AdoptAFrenchman.ca). This led to multiple interviews and actually landing my first job at Gameloft"
          />
          <Tombstone
            title="McRoach Network"
            years="2008-2013"
            link="https://mcroach.net"
            description="An independent non-profit music label I founded when I was 16. Released multiple albums, organized one tour, and we were among the first structures to distribute on Spotify back in 2010. After 5 years and as I was moving to Canada, it felt natural to put this project to rest"
          />
        </container>
      </main>
    </>
  );
}
