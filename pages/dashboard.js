import Link from "next/link";

import Unsplash from "../components/dashboard/Unsplash";
import Betaseries from "../components/dashboard/Betaseries";
import MetricCard from "../components/dashboard/Card";

export default function Now() {
  return (
    <div>
      <main>
        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          Jp in numbers
        </h1>
        <container className="mt-8 grid grid-cols-1 gap-4">
          <Unsplash />
          <div className="grid gap-4 grid-cols-1 w-full sm:grid-cols-2">
            <Betaseries />
            <MetricCard
              header="IMDB - Show/Movies seen"
              link="https://www.imdb.com/user/ur59148764/ratings?sort=your_rating,desc&ratingFilter=0&mode=detail&ref_=undefined&lastPosition=0"
              metric="955"
            />
          </div>
        </container>
      </main>
    </div>
  );
}
