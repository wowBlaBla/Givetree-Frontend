import React from "react";
import { useMetaMask } from "metamask-react";
import { Button } from "./wallet/Button";

export const MetaButton = () => {
  const { status, connect, account } = useMetaMask();

  const walletStatus = () => {
    if (status === "initializing") return "Syncing..";
    if (status === "unavailable") return "MetaMask not available";
    if (status === "notConnected") return "Connect wallet";
    if (status === "connecting") return "Connecting...";
    if (status === "connected") return account;
  };

  if (walletStatus()) {
    return (
      <Button className="bg-brand-orange" onClick={connect}>
        {walletStatus()}
      </Button>
    );
  }

  return null;
};
