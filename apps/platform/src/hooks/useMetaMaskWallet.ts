import { createContext, useContext } from "react";
import { InjectedConnector } from "@web3-react/injected-connector";

interface MetaMaskContextType {
  isActive: boolean;
  account: string | null | undefined;
  isLoading: boolean;
  connect: () => void;
  disconnect: () => void;
  shouldDisable: boolean;
}

const DEFAULT_CONTEXT = {
  isActive: false,
  account: "",
  isLoading: false,
  connect() {
    console.log("Connect");
  },
  disconnect() {
    console.log("Disconnect");
  },
  shouldDisable: false,
};

export const MetaMaskContext = createContext<MetaMaskContextType>(DEFAULT_CONTEXT);

export const useMetaMaskWallet = (): MetaMaskContextType => useContext(MetaMaskContext);

export const injected = new InjectedConnector({ supportedChainIds: [1, 42, 1337] });
