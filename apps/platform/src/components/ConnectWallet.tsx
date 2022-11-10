import React, { FC } from "react";
import cx from "classnames";
import { useWallet, Wallet } from "../context/WalletContext";

import { MetaMaskIcon } from "../components/icons/MetaMaskIcon";
import { WalletConnectIcon } from "../components/icons/WalletConnectIcon";
import { CoinbaseIcon } from "../components/icons/CoinbaseIcon";
import { PhantomIcon } from "../components/icons/PhantomIcon";
import { LoadingIcon } from "./icons/LoadingIcon";
import { usePrevious } from "../hooks/usePrevious";

interface ConnectWalletProps {
  callback?: () => Promise<void>;
  externalLoading?: boolean;
  className?: string;
}

export const ConnectWallet: FC<ConnectWalletProps> = ({
  callback,
  className,
  externalLoading,
}) => {
  const { loading, connectWallet, provider } = useWallet();

  // const [activeTabWallet, setActiveTabWallet] = useState<number>(0);
  const [selected, setSelected] = React.useState<boolean>(false);

  const prevLoading = usePrevious(loading);
  React.useEffect(() => {
    if (prevLoading === true && loading === false) {
      setTimeout(() => setSelected(false), 1000);
    }
  }, [prevLoading, loading]);

  React.useEffect(() => {
    if (selected && provider) {
      callback && callback();
    }
  }, [selected, provider]);

  const handleWallet = (wallet: Wallet) => () => {
    setSelected(true);
    if (!provider) {
      connectWallet(wallet);
    }
  };

  return (
    <div className={cx(className, "flex flex-col w-full rounded-2xl-1 text-black")}>
      {/* <div className="border-b overflow-x-auto scroll-pb-5 px-8 pt-2">
        <div className="w-full">
          <ul
            className="nav nav-tabs flex gap-2 list-none pl-0"
            id="tabs-tab"
            role="tablist"
          >
            {Network.map((item, idx) => (
              <li
                className={cx("border-b-4 nav-item", {
                  "border-[#8C8D91]": idx == activeTabWallet,
                  "border-transparent": idx != activeTabWallet,
                })}
                role="presentation"
                key={idx}
                onClick={() => setActiveTabWallet(idx)}
              >
                <span className="nav-link block leading-tight capitalize px-3 py-2 font-bold cursor-pointer">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
      <div className={cx("ethereum-wallet w-full flex-col flex")}>
        <button
          className={cx(
            "cursor-pointer font-bold py-4 px-5 rounded-[2px] flex items-center gap-3 hover:bg-slate-400 flex justify-between items-center",
            {
              "bg-slate-400": loading,
            }
          )}
          onClick={handleWallet("metamask")}
          disabled={loading || externalLoading}
        >
          <div className="flex gap-3">
            <MetaMaskIcon />
            <span>MetaMask</span>
          </div>
          {loading || externalLoading ? <LoadingIcon className="w-6 h-6" /> : ""}
        </button>
        {/* <button
          className="cursor-pointer font-bold py-4 px-5 rounded-[2px] flex items-center gap-3 hover:bg-slate-400 flex justify-between items-center"
          onClick={handleWallet("walletconnect")}
          disabled={loading}
        >
          <div className="flex gap-3">
            <WalletConnectIcon />
            <span>Wallet Connect</span>
          </div>
          {loading ? <LoadingIcon className="w-6 h-6" /> : ""}
        </button>
        <button
          className="cursor-pointer font-bold py-4 px-5 rounded-[2px] flex items-center gap-3 hover:bg-slate-400 flex justify-between items-center"
          onClick={handleWallet("coinbase")}
          disabled={loading}
        >
          <div className="flex gap-3">
            <CoinbaseIcon className="rounded-full" />
            <span>Coinbase Wallet</span>
          </div>
          {loading ? <LoadingIcon className="w-6 h-6" /> : ""}
        </button> */}
      </div>
      {/* <div
        className={cx("solana-wallet w-full flex-col gap-3 py-4", {
          flex: activeTabWallet > 1,
          hidden: activeTabWallet < 2,
        })}
      > */}
      {/* <button
        className="cursor-pointer font-bold py-4 px-5 rounded-[2px] flex items-center gap-3 hover:bg-slate-400 flex justify-between items-center"
        onClick={handleWallet("walletconnect")}
        disabled={loading}
      >
        <div className="flex gap-3">
          <PhantomIcon className="rounded-full" />
          <span>Phantom</span>
        </div>
        {loading ? <LoadingIcon className="w-6 h-6" /> : ""}
      </button> */}
      {/* </div> */}
    </div>
  );
};
