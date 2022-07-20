export default async (_, res) => {
  const API_KEY = process.env.BETASERIES_REFACTOR_API_KEY;
  const ACCESS_TOKEN = process.env.BETASERIES_REFACTOR_ACCESS_TOKEN;
  const response = await fetch("https://api.betaseries.com/members/infos", {
    headers: {
      "X-BetaSeries-Version": 3.0,
      "X-BetaSeries-Key": `${API_KEY}`,
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    method: "GET",
  });

  const memberdata = await response.json();

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1200, stale-while-revalidate=600"
  );

  return res.status(200).json(memberdata.member.stats.episodes);
};
