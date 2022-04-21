import type { AppProps } from "next/app";
import "../styles/global.css";

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

import { AppFooter } from "../components/AppFooter";
import { AppHeader } from "../components/AppHeader";
import { WalletContext } from "../components/wallet/WalletContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WalletContext network={WalletAdapterNetwork.Mainnet}>
      <div className="flex flex-col h-full min-h-screen bg-gray-50">
        <AppHeader />
        <div className="flex flex-col flex-1 w-full max-w-screen-3xl mx-auto">
          <Component {...pageProps} />
        </div>
        <AppFooter />
      </div>
    </WalletContext>
  );
}

export default MyApp;
