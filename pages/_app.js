import "tailwindcss/tailwind.css";

import React, { useEffect } from "react";
import Router from "next/router";
import Head from "next/head";

import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";

import SEO from "../next-seo-config";

import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo {...SEO} />
      <div className="max-w-6xl px-6 pb-6 mx-auto">
        <Header />
        <div className="max-w-3xl py-12 mx-auto">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
