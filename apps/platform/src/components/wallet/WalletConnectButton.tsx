import React, { FC, MouseEventHandler, useCallback, useMemo } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { PrimaryButton, ButtonProps } from "../PrimaryCta";

export const WalletConnectButton: FC<ButtonProps> = ({ children, ...props }) => {
  const { wallet, connect, connecting, connected } = useWallet();

  const handleOnClick: MouseEventHandler<HTMLButtonElement> = useCallback(
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
    <PrimaryButton onClick={handleOnClick} {...props}>
      {content}
    </PrimaryButton>
  );
};
