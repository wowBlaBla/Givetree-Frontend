import React, { FC } from "react";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { client } from "../api/apollo/client";
import { WalletContext } from "../components/wallet/WalletContext";
import "../assets/styles/global.css";
import { MetaMaskProvider } from "metamask-react";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <MetaMaskProvider>
      <WalletContext>
        <div className="flex flex-col flex-1 w-full mx-auto" suppressHydrationWarning>
          <Component {...pageProps} />
        </div>
      </WalletContext>
    </MetaMaskProvider>
  </ApolloProvider>
);

export default MyApp;
