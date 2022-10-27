import React, { FC, useState } from "react";
import cx from "classnames";

import { LoadingIcon } from "../../components/icons/LoadingIcon";
import { MetaMaskIcon } from "../../components/icons/MetaMaskIcon";
import { WalletConnectIcon } from "../../components/icons/WalletConnectIcon";
import { AuthType, useAuth } from "../../context/AuthContext";
import { CoinbaseIcon } from "../../components/icons/CoinbaseIcon";
import { PhantomIcon } from "../../components/icons/PhantomIcon";
import { Network, useWallet, Wallet } from "../../context/WalletContext";
import { usePrevious } from "../../hooks/usePrevious";

export const SignIn: FC = () => {
  const { loading, address, connectWallet } = useWallet();
  const { loading: authLoading, login } = useAuth();
  const prevAuthLoading = usePrevious(authLoading);

  const [selected, setSelected] = useState<boolean>(false);
  const [authType, setAuthType] = useState<AuthType>();

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [activeTabWallet, setActiveTabWallet] = useState<number>(0);

  React.useEffect(() => {
    if (selected && address) {
      login({ address }, "wallet");
    }
  }, [selected, address, login]);

  React.useEffect(() => {
    if (prevAuthLoading === true && authLoading === false) {
      setSelected(false);
    }
  }, [prevAuthLoading, authLoading]);

  const handleWallet = (wallet: Wallet) => () => {
    setSelected(true);
    connectWallet(wallet);
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-center h-full max-w-layout-s mx-auto pt-16">
        <h1 className="text-[50px] font-bold text-black mb-4">Sign in</h1>
        {!authType ? (
          <>
            <span className="text-black text-center mb-8">
              Sign in with a cryptocurrency wallet or email address.
            </span>
            <div className="flex flex-col w-full border border-black bg-white rounded-2xl-1 px-8 py-8">
              <button
                className="btn rounded-2xl-1 h-[100px] bg-[#0057FF] text-[20px] font-bold text-white mb-4"
                onClick={() => {
                  setAuthType("wallet");
                }}
              >
                Cryptocurrency Wallet
              </button>
              <button
                className="btn rounded-2xl-1 h-[100px] bg-[#0057FF] text-[20px] text-white font-bold"
                onClick={() => {
                  setAuthType("email");
                }}
              >
                Email address
              </button>
            </div>
          </>
        ) : authType === "email" ? (
          <div className="flex flex-col w-full border border-black bg-white rounded-2xl-1 px-8 py-8 text-black">
            <div className="input-form-group flex flex-col items-start mb-4">
              <label className="font-bold mb-2">Username</label>
              <input
                type="text"
                className={`outline-none focus:border-sky-400 mt-1 block w-full sm:text-sm border rounded-md p-3 bg-transparent border-black`}
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {/* <span className="text-red-500 text-xs mt-1"></span> */}
            </div>
            <div className="input-form-group flex flex-col items-start mb-4">
              <label className="font-bold mb-2">Email</label>
              <input
                type="email"
                className={`outline-none focus:border-sky-400 mt-1 block w-full sm:text-sm border rounded-md p-3 bg-transparent border-black`}
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* <span className="text-red-500 text-xs mt-1"></span> */}
            </div>
            <div className="input-form-group flex flex-col items-start mb-4">
              <label className="font-bold mb-2">Password</label>
              <input
                type="password"
                className={`outline-none focus:border-sky-400 mt-1 block w-full sm:text-sm border rounded-md p-3 bg-transparent border-black`}
                placeholder="Enter a secure password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <span className="text-red-500 text-xs mt-1"></span> */}
            </div>
            <div className="flex w-full justify-between mt-4">
              <button
                className="btn rounded-2xl-1 h-[60px] bg-[#0057FF] border-none text-[20px] font-bold text-white w-full"
                onClick={() => login({ email, password }, "email")}
              >
                Sign in
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col w-full border border-black bg-white rounded-2xl-1 text-black">
            <div className="border-b overflow-x-auto scroll-pb-5 px-8 pt-2">
              <div className="w-full">
                <ul
                  className="nav nav-tabs flex gap-2 list-none pl-0"
                  id="tabs-tab"
                  role="tablist"
                >
                  {Network.map((item, idx) => (
                    <li
                      className={cx("border-b-4 nav-item", {
                        "active-nav": idx == activeTabWallet,
                        "border-transparent": idx != activeTabWallet,
                      })}
                      role="presentation"
                      key={idx}
                      onClick={() => setActiveTabWallet(idx)}
                    >
                      <span className="nav-link block text-lg leading-tight capitalize px-6 py-3 font-bold cursor-pointer">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className={cx("ethereum-wallet w-full flex-col gap-3 px-8 py-4", {
                flex: activeTabWallet < 2,
                hidden: activeTabWallet > 1,
              })}
            >
              <button
                className="cursor-pointer font-bold py-4 px-5 rounded-[2px] flex items-center gap-3 hover:bg-slate-400 flex justify-between items-center"
                onClick={handleWallet("metamask")}
                disabled={loading}
              >
                <div className="flex gap-3">
                  <MetaMaskIcon />
                  <span>MetaMask</span>
                </div>
                {loading ? <LoadingIcon className="w-6 h-6" /> : ""}
              </button>
              <button
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
              </button>
            </div>
            <div
              className={cx("solana-wallet w-full flex-col gap-3 px-8 py-4", {
                flex: activeTabWallet > 1,
                hidden: activeTabWallet < 2,
              })}
            >
              <button
                className="cursor-pointer font-bold py-4 px-5 rounded-[2px] flex items-center gap-3 hover:bg-slate-400 flex justify-between items-center"
                onClick={handleWallet("walletconnect")}
                disabled={loading}
              >
                <div className="flex gap-3">
                  <PhantomIcon className="rounded-full" />
                  <span>Phantom</span>
                </div>
                {loading ? <LoadingIcon className="w-6 h-6" /> : ""}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
