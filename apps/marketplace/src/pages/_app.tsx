import React, { FC } from "react";
import type { AppProps } from "next/app";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletContext } from "../components/wallet/WalletContext";
import "../assets/styles/global.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <WalletContext network={WalletAdapterNetwork.Mainnet}>
    <div className="flex flex-col flex-1 w-full mx-auto" suppressHydrationWarning>
      <Component {...pageProps} />
    </div>
  </WalletContext>
);

export default MyApp;
