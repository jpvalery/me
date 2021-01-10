import '../styles/globals.css'

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head';

import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import { MDXProvider } from '@mdx-js/react';
import * as Fathom from 'fathom-client'

import SEO from '../next-seo.config';
import MDXComponents from '@/components/MDXComponents';

function MyApp({ Component, pageProps }) {
  const router = useRouter()

useEffect(() => {
  // Initialize Fathom when the app loads
  Fathom.load();
  Fathom.setSiteId('ENV_FATHOM_SITEID');

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
    <MDXProvider components={MDXComponents}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </MDXProvider>
  </ThemeProvider>
);
}

export default MyApp
