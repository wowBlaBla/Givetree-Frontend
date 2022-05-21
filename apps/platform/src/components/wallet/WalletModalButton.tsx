import React, { FC, MouseEvent, useCallback } from "react";
import { ConnectWalletIcon } from "../icons/ConnectWalletIcon";
import { Button, ButtonProps } from "./Button";
import { useWalletModal } from "../../hooks/useWalletModal";

export const WalletModalButton: FC<ButtonProps> = ({
  children = "Connect Wallet",
  onClick,
  ...props
}) => {
  const { visible, setVisible } = useWalletModal();

  const handleClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        onClick(event);
      }

      if (!event.defaultPrevented) {
        setVisible(!visible);
      }
    },
    [onClick, visible, setVisible]
  );

  return (
    <Button className="wallet-adapter-button-trigger" onClick={handleClick} {...props}>
      <div className="inline-block sm:hidden">
        <ConnectWalletIcon />
      </div>
      <div className="hidden sm:inline-block">{children}</div>
    </Button>
  );
};
