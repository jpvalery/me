const title = "Jp Valery 🦝";
const description = "Polymath based in Montréal, QC. This is my lil plot of land on the interwebs";
const siteUrl = "https://jpvalery.me"

const SEO = {
  title: title,
  description: description,
  canonical: siteUrl,
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    title: title,
    description: description,
    images: [
      {
        url: 'https://jpvalery.me/static/og-banner.jpg',
        width: 1920,
        height: 1280,
        alt: 'Open Graph Image',
      },
    ],
  },
  twitter: {
    handle: "@jpvalery",
    site: siteUrl,
    cardType: "summary_large_image",
  },
};

export default SEO;
