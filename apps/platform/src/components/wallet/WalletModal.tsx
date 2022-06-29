import React, { FC, useCallback, useMemo, useState } from "react";
import cx from "classnames";
import { useWallet as useSolanaWallet, Wallet } from "@solana/wallet-adapter-react";
import { WalletName, WalletReadyState } from "@solana/wallet-adapter-base";

import { Collapse } from "./Collapse";
import { Modal } from "../Modal";
import { WalletListItem } from "./WalletListItem";
import { WalletSVG } from "./WalletSVG";

interface WalletModalProps {
  closeDropdown: () => void;
}

export const WalletModal: FC<WalletModalProps> = ({ closeDropdown }) => {
  const { select, wallets } = useSolanaWallet();
  const [expanded, setExpanded] = useState(false);

  const [installedWallets, otherWallets] = useMemo(() => {
    const installed: Wallet[] = [];
    const notDetected: Wallet[] = [];
    const loadable: Wallet[] = [];

    for (const wallet of wallets) {
      if (wallet.readyState === WalletReadyState.NotDetected) {
        notDetected.push(wallet);
      } else if (wallet.readyState === WalletReadyState.Loadable) {
        loadable.push(wallet);
      } else if (wallet.readyState === WalletReadyState.Installed) {
        installed.push(wallet);
      }
    }

    return [installed, [...loadable, ...notDetected]];
  }, [wallets]);

  const getStartedWallet = useMemo(() => {
    return installedWallets.length
      ? installedWallets[0]
      : wallets.find(
          (wallet: { adapter: { name: WalletName } }) => wallet.adapter.name === "Torus"
        ) ||
          wallets.find(
            (wallet: { adapter: { name: WalletName } }) =>
              wallet.adapter.name === "Phantom"
          ) ||
          wallets.find(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (wallet: { readyState: any }) =>
              wallet.readyState === WalletReadyState.Loadable
          ) ||
          otherWallets[0];
  }, [installedWallets, wallets, otherWallets]);

  const handleSolanaWallet = useCallback(
    (walletName: WalletName) => {
      select(walletName);
      closeDropdown();
    },
    [closeDropdown, select]
  );

  const handleCollapse = useCallback(() => setExpanded(!expanded), [expanded]);

  return (
    <Modal modalName="wallet-modal">
      {installedWallets.length ? (
        <>
          <h1 className="py-10 px-10 text-2xl sm:text-3xl text-center font-medium">
            Connect a wallet to continue
          </h1>
          <ul className="w-full list-none">
            {installedWallets.map((wallet) => (
              <WalletListItem
                key={wallet.adapter.name}
                wallet={wallet}
                handleOnClick={handleSolanaWallet}
              />
            ))}

            {otherWallets.length && (
              <Collapse expanded={expanded} id="wallet-modal-collapse">
                {otherWallets.map((wallet) => (
                  <WalletListItem
                    key={wallet.adapter.name}
                    wallet={wallet}
                    handleOnClick={handleSolanaWallet}
                  />
                ))}
              </Collapse>
            )}

            {otherWallets.length && (
              <button
                className="flex justify-end items-center w-full mt-5 space-x-2 cursor-pointer border-none bg-transparent"
                onClick={handleCollapse}
                tabIndex={0}
              >
                <span>{expanded ? "Less " : "More "}options</span>
                <svg
                  width="13"
                  height="7"
                  viewBox="0 0 13 7"
                  xmlns="http://www.w3.org/2000/svg"
                  className={cx({
                    "transform rotate-180 transition duration-400 ease-in-out": expanded,
                  })}
                >
                  <path d="M0.71418 1.626L5.83323 6.26188C5.91574 6.33657 6.0181 6.39652 6.13327 6.43762C6.24844 6.47872 6.37371 6.5 6.50048 6.5C6.62725 6.5 6.75252 6.47872 6.8677 6.43762C6.98287 6.39652 7.08523 6.33657 7.16774 6.26188L12.2868 1.626C12.7753 1.1835 12.3703 0.5 11.6195 0.5H1.37997C0.629216 0.5 0.224175 1.1835 0.71418 1.626Z" />
                </svg>
              </button>
            )}
          </ul>
        </>
      ) : (
        <>
          <h1 className="py-10 px-10 text-2xl sm:text-3xl text-center font-medium">
            You&lsquo;ll need a wallet on Solana to continue
          </h1>
          <div className="flex flex-col justify-center items-center space-y-2 cursor-pointer">
            <WalletSVG />
            <button
              type="button"
              className="block w-full mt-12 p-2 text-lg border-none text-gray-500 font-semibold"
              onClick={() => handleSolanaWallet(getStartedWallet.adapter.name)}
            >
              Get started
            </button>
          </div>

          {otherWallets.length && (
            <>
              <button
                className="flex justify-end items-center w-full mt-5 space-x-2 cursor-pointer border-none p-4 bg-transparent"
                onClick={handleCollapse}
                tabIndex={0}
              >
                <span>{expanded ? "Hide " : "Already have a wallet? View "}options</span>
                <svg
                  width="13"
                  height="7"
                  viewBox="0 0 13 7"
                  xmlns="http://www.w3.org/2000/svg"
                  className={cx({
                    "transform rotate-180 transition duration-600 ease-in-out": expanded,
                  })}
                >
                  <path d="M0.71418 1.626L5.83323 6.26188C5.91574 6.33657 6.0181 6.39652 6.13327 6.43762C6.24844 6.47872 6.37371 6.5 6.50048 6.5C6.62725 6.5 6.75252 6.47872 6.8677 6.43762C6.98287 6.39652 7.08523 6.33657 7.16774 6.26188L12.2868 1.626C12.7753 1.1835 12.3703 0.5 11.6195 0.5H1.37997C0.629216 0.5 0.224175 1.1835 0.71418 1.626Z" />
                </svg>
              </button>

              <Collapse expanded={expanded} id="wallet-adapter-modal-collapse">
                <ul className="wallet-adapter-modal-list">
                  {otherWallets.map((wallet) => (
                    <WalletListItem
                      key={wallet.adapter.name}
                      wallet={wallet}
                      handleOnClick={handleSolanaWallet}
                    />
                  ))}
                </ul>
              </Collapse>
            </>
          )}
        </>
      )}
    </Modal>
  );
};
