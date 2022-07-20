import { NextSeo } from "next-seo";

import { Header1, Scorecard } from "@jpvalery/mistral";
// We require individual components for each because SWR requires a data parameter and so we can only have one per file
import Betaseries from "../components/dashboard/Betaseries";
import Unsplash from "../components/dashboard/Unsplash";

export default function Now() {
  return (
    <>
      <NextSeo
        title="Dashboard"
        description="Jp, in numbers. Get some stats like my views Unsplash or the number of TV Shows I watched."
        openGraph={{
          title: "Dashboard",
          description:
            "Jp, in numbers. Get some stats like my views Unsplash or the number of TV Shows I watched.",
          images: [
            {
              url:
                "https://og.jpvalery.me/**Dashboard**.png?theme=dotme&md=1&fontSize=125px&images=https%3A%2F%2Fog.jpvalery.me%2Fstatic%2Fraccoon.svg&heights=300",
            },
          ],
        }}
      />
      <main>
        <Header1>Jp in numbers</Header1>
        <container className="mt-8 grid grid-cols-1 gap-4">
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            <Unsplash />
            <Betaseries />
            <Scorecard
              header="IMDB - Show/Movies seen"
              link="https://www.imdb.com/user/ur59148764/ratings?sort=your_rating,desc&ratingFilter=0&mode=detail&ref_=undefined&lastPosition=0"
              metric="1,158"
              color="amber"
            />
          </div>
        </container>
      </main>
    </>
  );
}
