import React, { FC } from "react";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { WalletProvider as SolanaWalletProvider } from "../components/wallet/WalletProvider";
import { client } from "../api/apollo/client";
import { SOLANA_NETWORK } from "../configs/constants";

import "../assets/styles/global.css";
import "react-toastify/dist/ReactToastify.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <SolanaWalletProvider network={SOLANA_NETWORK}>
        <Component {...pageProps} suppressHydrationWarning />
      </SolanaWalletProvider>
    </ApolloProvider>
  );
};

export default MyApp;
