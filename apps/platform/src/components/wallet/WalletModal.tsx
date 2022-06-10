import React, { FC, useCallback } from "react";
import { useMetaMask } from "metamask-react";

import { Modal } from "../Modal";
import { MetaMaskIcon } from "../icons/MetaMaskIcon";
import { MetaMaskStatus } from "../../typed/enum/metaMaskStatus";
import { isMetaMaskConnected, isMetaMaskInstalled } from "../../utils/isMetaMask";

interface WalletModalProps {
  closeDropdown: () => void;
}

export const WalletModal: FC<WalletModalProps> = ({ closeDropdown }) => {
  const { status: metaMaskReadyStatus, connect } = useMetaMask();
  const isMetaMaskStatusConnected = isMetaMaskConnected(
    metaMaskReadyStatus as MetaMaskStatus
  );

  const handleMetaMaskWallet = useCallback(() => {
    if (isMetaMaskInstalled()) {
      connect();
    } else {
      console.log("Not installed");
    }

    closeDropdown();
  }, [connect, closeDropdown]);

  return (
    <Modal modalName="wallet-modal">
      <h1 className="p-10 text-2xl sm:text-3xl text-white text-center font-medium">
        Connect a wallet to continue
      </h1>

      {isMetaMaskStatusConnected && (
        <div className="py-3 px-5 mb-10 border border-orange-600 bg-orange-400 bg-opacity-10 text-gray-200 rounded-xl">
          <p>
            Note: You must disconnect MetaMask from your browser before you can connect to
            another wallet.
          </p>
        </div>
      )}

      <h3 className="flex w-full text-gray-400 text-lg">Ethereum</h3>
      <ul className="w-full my-3 list-none">
        <li className="py-2 px-3 rounded-lg button-hover">
          <label
            className="w-full text-lg sm:text-xl normal-case"
            htmlFor="wallet-modal"
            onClick={handleMetaMaskWallet}
          >
            <div className="flex items-center space-x-3 text-white">
              <MetaMaskIcon />
              <div className="flex justify-between items-baseline w-full">
                <span>MetaMask</span>
                {isMetaMaskInstalled() && (
                  <span className="text-sm sm:text-base font-normal opacity-60">
                    Detected
                  </span>
                )}
              </div>
            </div>
          </label>
        </li>
      </ul>
    </Modal>
  );
};
