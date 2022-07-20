import format from "comma-number";
import useSWR from "swr";

import { Scorecard } from "@jpvalery/mistral";
import fetcher from "../../lib/fetcher";

export default function Unsplash() {
  const { data } = useSWR("/api/unsplash", fetcher);

  const downloads = format(data?.downloads);
  const views = format(data?.views);
  const link = "https://unsplash.com/@jpvalery";

  return (
    <>
      <Scorecard
        header="Unsplash Downloads"
        link={link}
        metric={downloads}
        color="amber"
      />
      <Scorecard
        header="Unsplash Views"
        link={link}
        metric={views}
        color="amber"
      />
    </>
  );
}
