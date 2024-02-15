import { config } from "dotenv-safe";
import { Head, Html, Main, NextScript } from "next/document";

config();

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
