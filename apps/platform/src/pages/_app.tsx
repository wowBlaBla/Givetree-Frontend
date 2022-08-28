import React, { FC } from "react";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { WalletProvider } from "../components/wallet/WalletProvider";
import { client } from "../api/apollo/client";
import { SOLANA_NETWORK } from "../configs/constants";

import "../assets/styles/global.css";
import "react-toastify/dist/ReactToastify.css";
import { AppWrapper } from "../context/state";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppWrapper>
      <ApolloProvider client={client}>
        <WalletProvider network={SOLANA_NETWORK}>
          <Component {...pageProps} suppressHydrationWarning />
        </WalletProvider>
      </ApolloProvider>
    </AppWrapper>

  );
};

export default MyApp;
