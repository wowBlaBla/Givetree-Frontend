import { createContext, useContext } from "react";

export interface MetaMaskWalletAddressContextTypes {
  walletAddress?: string;
  setWalletAddress: (_walletAddress: string) => void;
}

const DEFAULT_CONTEXT = {
  isConnected: true,
  walletAddress: "",
  setWalletAddress(walletAddress: string) {},
};

export const MetaMaskWalletAddressContext =
  createContext<MetaMaskWalletAddressContextTypes>(DEFAULT_CONTEXT);

export const useMetaMaskWallet = (): MetaMaskWalletAddressContextTypes =>
  useContext(MetaMaskWalletAddressContext);
