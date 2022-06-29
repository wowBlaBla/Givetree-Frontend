import React, { FC } from "react";
import { WalletName, WalletReadyState } from "@solana/wallet-adapter-base";
import { Wallet } from "@solana/wallet-adapter-react";
import { WalletIcon } from "./WalletIcon";

export interface WalletListItemProps {
  handleOnClick: (name: WalletName) => void;
  wallet: Wallet;
}

export const WalletListItem: FC<WalletListItemProps> = ({ handleOnClick, wallet }) => {
  return (
    <li
      key={wallet.adapter.name}
      className="relative my-1 py-1 px-2 rounded-lg button-hover"
    >
      <label
        className="w-full text-lg sm:text-xl normal-case"
        htmlFor="wallet-modal"
        onClick={() => handleOnClick(wallet.adapter.name)}
      >
        <div className="flex items-center space-x-3">
          <WalletIcon className="w-6 h-6" wallet={wallet} />
          <div className="flex justify-between items-center w-full">
            <span className="font-semibold">{wallet.adapter.name}</span>
            {wallet.readyState === WalletReadyState.Installed && (
              <span className="py-0.5 px-2 text-sm sm:text-base font-medium opacity-60 tracking-wide">
                Detected
              </span>
            )}
          </div>
        </div>
      </label>
    </li>
  );
};
