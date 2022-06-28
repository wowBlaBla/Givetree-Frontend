import React, { FC, useCallback } from "react";
import { useWallet as useSolanaWallet } from "@solana/wallet-adapter-react";
import { WalletName } from "@solana/wallet-adapter-base";

import { Modal } from "../Modal";
import { WalletIcon } from "./WalletIcon";

interface WalletModalProps {
  closeDropdown: () => void;
}

export const WalletModal: FC<WalletModalProps> = ({ closeDropdown }) => {
  const { disconnect, select, wallets } = useSolanaWallet();

  const handleSolanaWallet = useCallback(
    (walletName: WalletName) => {
      select(walletName);
      closeDropdown();
    },
    [closeDropdown, select]
  );

  return (
    <Modal modalName="wallet-modal">
      <h1 className="py-10 px-10 text-2xl sm:text-3xl text-center font-medium">
        Connect a wallet to continue
      </h1>

      <ul className="w-full list-none">
        {wallets.map((wallet, idx) => (
          <li key={idx} className="my-2 py-1 px-2 rounded-lg button-hover">
            <label
              className="w-full text-lg sm:text-xl normal-case"
              htmlFor="wallet-modal"
              onClick={() => handleSolanaWallet(wallet.adapter.name)}
            >
              <div className="flex items-center space-x-3">
                <WalletIcon className="w-6 h-6" wallet={wallet} />
                <div className="flex justify-between items-center w-full">
                  <span className="font-semibold">{wallet.adapter.name}</span>
                  <span className="py-0.5 px-2 text-sm sm:text-base font-medium opacity-60 tracking-wide">
                    Solana
                  </span>
                </div>
              </div>
            </label>
          </li>
        ))}
      </ul>
    </Modal>
  );
};
