import React, { FC } from "react";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { client } from "../configs/client";

import "../assets/styles/global.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <div className="flex flex-col flex-1 w-full mx-auto" suppressHydrationWarning>
      <Component {...pageProps} />
    </div>
  </ApolloProvider>
);

export default MyApp;
