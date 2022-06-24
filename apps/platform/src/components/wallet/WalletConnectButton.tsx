import React, { FC, MouseEventHandler, useCallback, useMemo } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useMetaMask } from "metamask-react";
import { Button, ButtonProps } from "./Button";

import { MetaMaskStatus } from "../../typed/enum/metaMaskStatus";

export const WalletConnectButton: FC<ButtonProps> = ({ children, ...props }) => {
  const { wallet, connect, connecting, connected } = useWallet();
  const { status: metaMaskReadyStatus } = useMetaMask();

  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      if (!event.defaultPrevented) connect().catch(() => {});
    },
    [connect]
  );

  const content = useMemo(() => {
    if (children) return children;
    if (connecting || metaMaskReadyStatus === MetaMaskStatus.Connecting)
      return "Connecting ...";
    if (connected || metaMaskReadyStatus === MetaMaskStatus.Connected) return "Connected";
    if (wallet) return "Connect";
    return "Connect Wallet";
  }, [children, connecting, connected, wallet, metaMaskReadyStatus]);

  return (
    <Button onClick={handleClick} {...props}>
      {content}
    </Button>
  );
};
