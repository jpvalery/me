import Link from "next/link";
import { NextSeo } from "next-seo";

import Unsplash from "../components/dashboard/Unsplash";
import Betaseries from "../components/dashboard/Betaseries";
import MetricCard from "../components/dashboard/Card";

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
        <h1 className="font-cartridge text-5xl text-white">Jp in numbers</h1>
        <container className="mt-8 grid grid-cols-1 gap-4">
          <Unsplash />
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            <Betaseries />
            <MetricCard
              header="IMDB - Show/Movies seen"
              link="https://www.imdb.com/user/ur59148764/ratings?sort=your_rating,desc&ratingFilter=0&mode=detail&ref_=undefined&lastPosition=0"
              metric="1,112"
            />
          </div>
        </container>
      </main>
    </>
  );
}
