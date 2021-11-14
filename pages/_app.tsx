import { Fragment } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/layout";
import AppProviders from "../providers";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProviders>
      <Layout>
        <Fragment>
          <Head>
            <title>Online Shop</title>
            <meta
              content="Order from the best confectionary and sweet shops around you"
              name="description"
            />
          </Head>
          <Component {...pageProps} />
        </Fragment>
      </Layout>
    </AppProviders>
  );
}

export default MyApp;
