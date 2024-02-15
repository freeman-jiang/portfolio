import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

import { GeistSans } from "geist/font/sans";

function PortfolioApp({ Component, pageProps }: AppProps) {
  return (
    <main className={GeistSans.className}>
      <Head>
        <title>Freeman Jiang - Portfolio</title>
        <meta
          name="description"
          content="Freeman Jiang is a CS student at the University of Waterloo and full stack engineer working with TypeScript, Node.js, and React."
        />
        <meta charSet="UTF-8" />
        <meta name="author" content="Freeman Jiang" />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}

export default PortfolioApp;
