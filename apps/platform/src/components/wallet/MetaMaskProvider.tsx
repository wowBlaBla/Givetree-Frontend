import React, { FC, ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { injected, MetaMaskContext } from "../../hooks/useMetaMaskWallet";

interface MetaMaskProviderProps {
  children?: ReactNode;
}

export const MetaMaskProvider: FC<MetaMaskProviderProps> = ({ children }) => {
  const { activate, account, active, deactivate } = useWeb3React();

  const [isActive, setIsActive] = useState(false);
  const [shouldDisable, setShouldDisable] = useState(false); // Should disable connect button while connecting to MetaMask
  const [isLoading, setIsLoading] = useState(true);

  // Connect to MetaMask wallet
  const connect = useCallback(async () => {
    console.log("Connecting to MetaMask...");
    setShouldDisable(true);
    try {
      await activate(injected).then(() => {
        setShouldDisable(false);
      });
    } catch (error) {
      console.log("Error on connecting: ", error);
    }
  }, [activate]);

  // Init Loading
  useEffect(() => {
    connect();
    setIsLoading(false);
  }, [connect]);

  // Check when App is Connected or Disconnected to MetaMask
  const handleIsActive = useCallback(() => {
    console.log("App is connected with MetaMask ", active);
    setIsActive(active);
  }, [active]);

  useEffect(() => {
    handleIsActive();
  }, [handleIsActive]);

  // Disconnect from Metamask wallet
  const disconnect = useCallback(async () => {
    console.log("Disconnecting wallet from App...");
    try {
      await deactivate();
    } catch (error) {
      console.log("Error on disconnnect: ", error);
    }
  }, [deactivate]);

  const values = useMemo(
    () => ({
      isActive,
      account,
      isLoading,
      connect,
      disconnect,
      shouldDisable,
    }),
    [isActive, isLoading, shouldDisable, connect, disconnect, account]
  );

  return <MetaMaskContext.Provider value={values}>{children}</MetaMaskContext.Provider>;
};
