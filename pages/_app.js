import "tailwindcss/tailwind.css";
import "../fonts/fonts.css";

import Head from "next/head";
import React from "react";

import { DefaultSeo } from "next-seo";
import SEO from "../next-seo-config";

import { Footer, Header, MainBody } from "@jpvalery/mistral";
import Brand from "../components/Brand";

import menus from "../content/menu.json";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo {...SEO} />
      <Header menus={menus} brand={<Brand />} />
      <MainBody>
        <Component {...pageProps} />
      </MainBody>
      <Footer displaySocial />
    </>
  );
}

export default MyApp;
