import React, { FC, MouseEventHandler, useCallback, useMemo } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Button, ButtonProps } from "./Button";

export const WalletConnectButton: FC<ButtonProps> = ({ children, ...props }) => {
  const { wallet, connect, connecting, connected } = useWallet();

  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      if (!event.defaultPrevented) connect().catch(() => {});
    },
    [connect]
  );

  const content = useMemo(() => {
    if (children) return children;
    if (connecting) return "Connecting ...";
    if (connected) return "Connected";
    if (wallet) return "Connect";
    return "Connect Wallet";
  }, [children, connecting, connected, wallet]);

  return (
    <Button onClick={handleClick} {...props}>
      {content}
    </Button>
  );
};
