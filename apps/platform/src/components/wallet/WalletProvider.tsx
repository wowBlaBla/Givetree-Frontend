import React, { FC, ReactNode, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider as SolanaProvider,
} from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { SOL_NETWORK } from "../../configs/constants";
import { MetaMaskProvider } from "metamask-react";

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider: FC<WalletProviderProps> = ({ children }) => {
  const endpoint = useMemo(() => clusterApiUrl(SOL_NETWORK), []);
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <MetaMaskProvider>
        <SolanaProvider wallets={wallets} autoConnect>
          {children}
        </SolanaProvider>
      </MetaMaskProvider>
    </ConnectionProvider>
  );
};
