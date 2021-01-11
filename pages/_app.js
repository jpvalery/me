import "tailwindcss/tailwind.css";

import React, { useEffect } from 'react'
import Router from 'next/router'
import Head from 'next/head';

import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import * as Fathom from 'fathom-client'

import SEO from '../next-seo-config';

import Header from '../components/Header'
import Footer from '../components/Footer'

// Record a pageview when route changes
Router.events.on('routeChangeComplete', () => {
  Fathom.trackPageview();
});

function MyApp({ Component, pageProps }) {
    // Initialize Fathom when the app loads
  useEffect(() => {
    Fathom.load('VVGVMHHZ');
  }, []);

return (
  <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo {...SEO} />
        <div className="max-w-6xl mx-auto pb-6 px-6">
          <Header />
            <div className="max-w-3xl mx-auto py-12">
              <Component {...pageProps} />
            </div>
          <Footer />
        </div>
  </ThemeProvider>
);
}

export default MyApp
