import "../styles/globals.css";

import type { AppProps } from "next/app";
import SessionProviderAuth from "../components/SessionProviderAuth";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProviderAuth session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProviderAuth>
  );
}

export default MyApp;
