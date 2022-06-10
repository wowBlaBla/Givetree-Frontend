import React, { FC } from "react";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { WalletProvider } from "../components/wallet/WalletProvider";
import { client } from "../api/apollo/client";

import "../assets/styles/global.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <WalletProvider>
        <Component {...pageProps} suppressHydrationWarning />
      </WalletProvider>
    </ApolloProvider>
  );
};

export default MyApp;
