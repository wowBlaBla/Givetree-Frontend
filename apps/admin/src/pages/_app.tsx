import React, { FC } from "react";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { client } from "../client";

import "../assets/styles/global.css";
import { AuthProvider } from "../AuthProvider";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <AuthProvider>
      <div className="flex flex-col flex-1 w-full mx-auto" suppressHydrationWarning>
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  </ApolloProvider>
);

export default MyApp;
