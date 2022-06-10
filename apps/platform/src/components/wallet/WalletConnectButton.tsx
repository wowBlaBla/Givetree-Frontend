import React, { FC, MouseEventHandler, useCallback, useMemo } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useMetaMask } from "metamask-react";
import { Button, ButtonProps } from "./Button";
import { WalletIcon } from "./WalletIcon";
import { MetaMaskIcon } from "../icons/MetaMaskIcon";
import { MetaMaskStatus } from "../../typed/enum/metaMaskStatus";

export const WalletConnectButton: FC<ButtonProps> = ({ children, onClick, ...props }) => {
  const { wallet, connect, connecting, connected } = useWallet();
  const { account, status: metaMaskStatus } = useMetaMask();

  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      if (onClick) onClick(event);
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      if (!event.defaultPrevented) connect().catch(() => {});
    },
    [onClick, connect]
  );

  const content = useMemo(() => {
    if (children) return children;
    if (connecting || metaMaskStatus === MetaMaskStatus.Connecting)
      return "Connecting ...";
    if (connected || metaMaskStatus === MetaMaskStatus.Connected) return "Connected";
    if (wallet) return "Connect";
    return "Connect Wallet";
  }, [children, connecting, connected, wallet, metaMaskStatus]);

  const walletIcon = () => {
    if (wallet) {
      return <WalletIcon wallet={wallet} />;
    }

    if (account) {
      return <MetaMaskIcon />;
    }

    return undefined;
  };

  return (
    <Button
      className="wallet-adapter-button-trigger"
      startIcon={walletIcon()}
      onClick={handleClick}
      {...props}
    >
      <div className="hidden sm:inline-block">{content}</div>
    </Button>
  );
};
