import React, { FC, ReactNode, useState } from "react";

import {
  MetaMaskWalletAddressContext,
  MetaMaskWalletAddressContextTypes,
} from "../../hooks/useMetaMaskWallet";

export interface MetaMaskWalletProviderProps extends MetaMaskWalletAddressContextTypes {
  children: ReactNode;
}

export const MetaMaskWalletProvider: FC<MetaMaskWalletProviderProps> = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState<string>("");

  return (
    <MetaMaskWalletAddressContext.Provider
      value={{
        walletAddress,
        setWalletAddress,
      }}
    >
      {children}
    </MetaMaskWalletAddressContext.Provider>
  );
};
