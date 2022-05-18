import { WalletReadyState } from "@solana/wallet-adapter-base";
import { Wallet } from "@solana/wallet-adapter-react";
import React, { FC, MouseEventHandler, ReactElement } from "react";
import { Button } from "./Button";
import { WalletIcon } from "./WalletIcon";

export interface WalletListItemProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  tabIndex?: number;
  wallet?: Wallet;
  iconOverride?: ReactElement;
}

export const WalletListItem: FC<WalletListItemProps> = ({
  handleClick,
  tabIndex,
  wallet,
}) => {
  return (
    <li>
      {wallet && (
        <Button
          onClick={handleClick}
          startIcon={<WalletIcon wallet={wallet} />}
          tabIndex={tabIndex}
        >
          {wallet && wallet.adapter.name}
          {wallet && wallet.readyState === WalletReadyState.Installed && (
            <span>Detected</span>
          )}
        </Button>
      )}
    </li>
  );
};
