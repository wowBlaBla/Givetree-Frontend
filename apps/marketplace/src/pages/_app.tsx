import React, { FC } from "react";
import type { AppProps } from "next/app";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import "../assets/styles/global.css";
import { AppFooter } from "../components/AppFooter";
import { AppHeader } from "../components/AppHeader";
import { WalletContext } from "../components/wallet/WalletContext";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <WalletContext network={WalletAdapterNetwork.Mainnet}>
    <div className="flex flex-col h-full min-h-screen bg-gray-50">
      <AppHeader />
      <div className="flex flex-col flex-1 w-full mx-auto" suppressHydrationWarning>
        {typeof window === "undefined" ? null : <Component {...pageProps} />}
      </div>
      <AppFooter />
    </div>
  </WalletContext>
);

export default MyApp;
