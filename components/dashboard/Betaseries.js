import format from "comma-number";
import useSWR from "swr";

import { Scorecard } from "@jpvalery/mistral";
import fetcher from "../../lib/fetcher";

export default function Betaseries() {
  const { data } = useSWR("/api/betaseries", fetcher);
  const episodes = format(data);
  const link = "https://www.betaseries.com/membre/jpvalery";

  return (
    <Scorecard
      header="Betaseries - Episodes seen"
      link={link}
      metric={episodes}
      color="amber"
    />
  );
}
