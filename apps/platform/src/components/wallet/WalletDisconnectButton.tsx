import { useWallet } from "@solana/wallet-adapter-react";
import { useMetaMask } from "metamask-react";
import React, { FC, MouseEventHandler, useCallback, useMemo } from "react";
import { Button, ButtonProps } from "./Button";
import { WalletIcon } from "./WalletIcon";

export const WalletDisconnectButton: FC<ButtonProps> = ({
  children,
  disabled,
  onClick,
  ...props
}) => {
  const { wallet, disconnect, disconnecting } = useWallet();
  const { account } = useMetaMask();

  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      if (onClick) onClick(event);
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      if (!event.defaultPrevented) disconnect().catch(() => {});
    },
    [onClick, disconnect]
  );

  const content = useMemo(() => {
    if (children) return children;
    if (disconnecting) return "Disconnecting ...";
    if (wallet) return "Disconnect";
    if (account) return "Disconnect";

    return "Disconnect Wallet";
  }, [children, disconnecting, wallet, account]);

  return (
    <Button
      className="wallet-adapter-button-trigger"
      disabled={disabled || !wallet}
      startIcon={wallet ? <WalletIcon wallet={wallet} /> : undefined}
      onClick={handleClick}
      {...props}
    >
      <div className="hidden sm:inline-block">{content}</div>
    </Button>
  );
};
