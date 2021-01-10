import "tailwindcss/tailwind.css";

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head';

import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import { MDXProvider } from '@mdx-js/react';
import * as Fathom from 'fathom-client'

import SEO from '../next-seo-config';

import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

useEffect(() => {
  // Initialize Fathom when the app loads
  Fathom.load('ENV_FATHOM_SITEID');

  function onRouteChangeComplete() {
    Fathom.trackPageview()
  }
  // Record a pageview when route changes
  router.events.on('routeChangeComplete', onRouteChangeComplete)

  // Unassign event listener
  return () => {
    router.events.off('routeChangeComplete', onRouteChangeComplete)
  }
}, [])


return (
  <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo {...SEO} />
        <div className="max-w-6xl mx-auto py-4 sm:px-6 lg:px-8">
          <Header />
            <div className="max-w-3xl mx-auto py-16">
              <Component {...pageProps} />
            </div>
          <Footer />
        </div>
  </ThemeProvider>
);
}

export default MyApp
