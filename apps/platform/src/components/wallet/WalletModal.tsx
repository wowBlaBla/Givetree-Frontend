import React, { FC, useCallback } from "react";
import cx from "classnames";
import { useMetaMask } from "metamask-react";
import { useWallet as useSolanaWallet } from "@solana/wallet-adapter-react";
import { WalletName } from "@solana/wallet-adapter-base";

import { Modal } from "../Modal";
import { MetaMaskIcon } from "../icons/MetaMaskIcon";
import { MetaMaskStatus } from "../../typed/enum/metaMaskStatus";
import { isMetaMaskConnected, isMetaMaskInstalled } from "../../utils/isMetaMask";
import { WalletIcon } from "./WalletIcon";

interface WalletModalProps {
  closeDropdown: () => void;
}

export const WalletModal: FC<WalletModalProps> = ({ closeDropdown }) => {
  const { status: metaMaskReadyStatus, connect } = useMetaMask();
  const { disconnect, wallets, select } = useSolanaWallet();
  const isMetaMaskinstaled = isMetaMaskInstalled();
  const isMetaMaskStatusConnected = isMetaMaskConnected(
    metaMaskReadyStatus as MetaMaskStatus
  );

  const handleMetaMaskWallet = useCallback(() => {
    if (!isMetaMaskinstaled) {
      return window.open("https://metamask.io", "_blank");
    }

    connect();
    closeDropdown();
    disconnect();
  }, [connect, closeDropdown, disconnect, isMetaMaskinstaled]);

  const handleSolanaWallet = useCallback(
    (walletName: WalletName, isDisabled: boolean) => {
      if (isDisabled) {
        return;
      }

      select(walletName);
      closeDropdown();
    },
    [closeDropdown, select]
  );

  return (
    <Modal modalName="wallet-modal">
      <h1 className="py-10 px-8 text-2xl sm:text-3xl text-white text-center font-medium">
        Connect a wallet to continue
      </h1>

      {isMetaMaskStatusConnected && (
        <div className="py-3 px-5 mb-10 border border-orange-600 bg-orange-400 bg-opacity-10 text-gray-200 rounded-xl">
          <p>
            Note: You must disconnect MetaMask from your web browser before you can
            connect to another wallet.
          </p>
        </div>
      )}

      <ul className="w-full list-none">
        <li className="my-2 py-1 px-3 rounded-lg button-hover">
          <label
            className="w-full text-lg sm:text-xl normal-case"
            htmlFor="wallet-modal"
            onClick={handleMetaMaskWallet}
          >
            <div className="flex items-center space-x-3 text-white">
              <MetaMaskIcon />
              <div className="flex justify-between items-center w-full">
                <span>MetaMask</span>
                <span className="text-sm sm:text-base font-normal opacity-60 tracking-wide">
                  Ethereum
                </span>
              </div>
            </div>
          </label>
        </li>
      </ul>

      <ul className="w-full list-none">
        {wallets.map((wallet, idx) => (
          <li key={idx} className="my-2 py-1 px-3 rounded-lg button-hover">
            <label
              className="w-full text-lg sm:text-xl normal-case"
              htmlFor={cx({
                "wallet-modal": !isMetaMaskStatusConnected,
              })}
              onClick={() =>
                handleSolanaWallet(wallet.adapter.name, isMetaMaskStatusConnected)
              }
            >
              <div
                className={cx("flex items-center space-x-3", {
                  "text-white": !isMetaMaskStatusConnected,
                })}
              >
                <WalletIcon className="w-6 h-6" wallet={wallet} />
                <div className="flex justify-between items-center w-full">
                  <span>{wallet.adapter.name}</span>
                  <span className="text-sm sm:text-base font-normal opacity-60 tracking-wide">
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
