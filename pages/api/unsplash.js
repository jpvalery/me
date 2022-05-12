export default async (_, res) => {
  const ACCESS_TOKEN = process.env.UNSPLASH_REFACTOR_TOKEN;
  const response = await fetch(
    "https://api.unsplash.com//users/jpvalery/statistics",
    {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      method: "GET",
    }
  );

  const unsplashdata = await response.json();

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1200, stale-while-revalidate=600"
  );

  return res.status(200).json({
    downloads: unsplashdata.downloads.total,
    views: unsplashdata.views.total,
  });
};
