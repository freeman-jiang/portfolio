import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function PortfolioApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
    </>
  );
}

export default PortfolioApp;
