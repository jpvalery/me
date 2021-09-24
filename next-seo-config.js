const title = "Jp Valery 🦝";
const description =
  "Polymath based in Montréal, QC. This is my lil plot of land on the interwebs";
const siteUrl = "https://jpvalery.me";

const SEO = {
  titleTemplate: "%s | Jp Valery 🦝",
  defaultTitle: title,
  description: description,
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    title: title,
    description: description,
    images: [
      {
        url:
          "https://og.jpvalery.me/**Jp%20Valery**.png?theme=dotme&md=1&fontSize=125px&images=https%3A%2F%2Fog.jpvalery.me%2Fstatic%2Fraccoon.svg&heights=300",
        width: 1531,
        height: 875,
        alt: "Open Graph Image",
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
