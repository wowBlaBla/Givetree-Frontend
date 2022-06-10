import React, { FC } from "react";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { client } from "../api/apollo/client";
import { MetaMaskProvider } from "metamask-react";

import "../assets/styles/global.css";
// import { WalletProvider } from "@solana/wallet-adapter-react";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <MetaMaskProvider>
        <Component {...pageProps} suppressHydrationWarning />
      </MetaMaskProvider>
    </ApolloProvider>
  );
};

export default MyApp;
