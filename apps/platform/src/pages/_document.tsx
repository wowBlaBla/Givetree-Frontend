import React, { FC } from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

const MyDocument: FC<Document> = () => (
  <Html>
    <Head>
      <link rel="icon" href="/favicon.ico" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicon/favicon-16x16.png"
      />
      {/* <link rel="manifest" href="/static/favicon/site.webmanifest" /> */}
      <link
        rel="mask-icon"
        href="/static/favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="theme-color" content="#ffffff" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
    </Head>

    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
