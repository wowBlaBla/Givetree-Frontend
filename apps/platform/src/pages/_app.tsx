import React, { FC } from "react";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { WalletProvider } from "../components/wallet/WalletProvider";
import { client } from "../api/apollo/client";
import { SOLANA_NETWORK } from "../configs/constants";

import "../assets/styles/global.css";
import "react-toastify/dist/ReactToastify.css";
import { store } from "../store/store";
import { Provider } from "react-redux";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <WalletProvider network={SOLANA_NETWORK}>
            <Component {...pageProps} suppressHydrationWarning />
          </WalletProvider>
        </ApolloProvider>
      </Provider>

  );
};

export default MyApp;
