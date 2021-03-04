const title = "Jp Valery 🦝";
const description = "Polymath based in Montréal, QC. This is my lil plot of land on the interwebs";

const SEO = {
  title: title,
  description: description,
  canonical: "https://jpvalery.me",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://jpvalery.com",
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
    site: "jpvalery.com",
    cardType: "summary_large_image",
  },
};

export default SEO;
