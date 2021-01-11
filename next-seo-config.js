const title = 'Jp Valery 🦝';
const description =
  'Polymath based in Montréal, QC. This is my lil plot of land on the interwebs';

const SEO = {
  title,
  description,
  canonical: 'https://jpvalery.me',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://jpvalery.com',
    title,
    description,
    images: [
      {
        url: 'https://jpvalery.me/static/images/jp-valery-banner.jpg',
        alt: title
      }
    ]
  },
  twitter: {
    handle: '@jpvalery',
    site: 'jpvalery.com',
    cardType: 'summary_large_image'
  }
};

export default SEO;
