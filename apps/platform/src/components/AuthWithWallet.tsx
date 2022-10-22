import { FC, useState } from "react";
import cx from "classnames";
import { CoinbaseIcon } from "./icons/CoinbaseIcon";
import { MetaMaskIcon } from "./icons/MetaMaskIcon";
import { WalletConnectIcon } from "./icons/WalletConnectIcon";
import { useDispatch } from "react-redux";
import WalletConnectProvider from "@walletconnect/web3-provider";
import {
  openModal,
  updateAddress,
  updateAuthed,
  updateProvider,
} from "../store/actions/auth.action";
import Web3 from "web3";
import {AbiItem} from 'web3-utils';
import {Contract} from 'web3-eth-contract';
import CoinbaseWalletSDK, { CoinbaseWalletProvider } from "@coinbase/wallet-sdk";
import { AbstractProvider } from "web3-core/types";
import { JsonRpcPayload, JsonRpcResponse } from "web3-core-helpers";
import axios from "axios";
import { LoadingIcon } from "./icons/LoadingIcon";
import { PhantomIcon } from "./icons/PhantomIcon";
import { useLocation } from "wouter";
import { toast } from "react-toastify";

import factoryABI from "../assets/jsons/abi/factory.json";
import singleNFTABI from "../assets/jsons/abi/singleNFT.json";
import marketplaceABI from "../assets/jsons/abi/marketplace.json";
import { EthereumNetwork } from "../configs/constants";
import { updateContracts } from "../store/actions/mvp.actions";

const navs = ["Ethereum", "Polygon", "Solana"];

export declare class WalletConnectWeb3Provider
  extends WalletConnectProvider
  implements AbstractProvider
{
  sendAsync(
    payload: JsonRpcPayload,
    callback: (error: Error | null, result?: JsonRpcResponse) => void
  ): void;
}

interface Props {
  type: number;
  hiddenTitle?: boolean;
}

export const AuthWithWallet: FC<Props> = ({ type, hiddenTitle = false }) => {
  const dispatch = useDispatch();
  const [, setLocation] = useLocation();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [active, setActive] = useState<number>(-1);
  const [activeTab, setActiveTab] = useState<number>(0);

  const connectMetaMask = async () => {
    if (window.ethereum) {
      const ethereum = window.ethereum;
      let provider;
      if (ethereum.providerMap) {
        for (const [key, value] of ethereum.providerMap) {
          if (key.toLowerCase() == "metamask") provider = value;
        }
      } else {
        if (ethereum.isMetaMask) {
          provider = ethereum;
        }
      }
      if (provider) {
        setActive(0);
        setLoading(true);
        try {
          const accounts = await provider.request({
            method: "eth_requestAccounts",
          });
          if (!hiddenTitle) await authByWallet(accounts[0], "metamask");
          connectAndUpdate(provider, accounts[0]);
        } catch (err) {}
        setActive(-1);
        setLoading(false);
      }
    }
  };

  const connectWalletConnect = async () => {
    setActive(1);
    setLoading(true);
    try {
      const provider = new WalletConnectProvider({
        infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
      });
      const accounts = await provider.enable();
      if (!hiddenTitle) await authByWallet(accounts[0], "walletconnect");
      connectAndUpdate(provider as WalletConnectWeb3Provider, accounts[0]);
    } catch (err) {}
    setActive(-1);
    setLoading(false);
  };

  const connectCoinbase = async () => {
    setActive(2);
    setLoading(true);
    try {
      const coinbaseWallet = new CoinbaseWalletSDK({
        appName: "Givetree",
        overrideIsMetaMask: true,
      });

      const ethereum = coinbaseWallet.makeWeb3Provider(
        "https://mainnet.infura.io/v3/9278c04944064d5a8f9ad13e549e550c",
        1
      );
      const accounts = await ethereum.enable();
      if (!hiddenTitle) await authByWallet(accounts[0], "coinbase");
      connectAndUpdate(ethereum, accounts[0]);
    } catch (err) {}
    setActive(-1);
    setLoading(false);
  };

  const authByWallet = async (address: string, walletType: string) => {
    const api = !type
      ? `${process.env.NEXT_PUBLIC_API}/api/auth/register-wallet`
      : `${process.env.NEXT_PUBLIC_API}/api/auth/login-wallet`;
    await axios
      .post(api, {
        address,
      })
      .then((res) => {
        toast.success("You have logged in successfully!");
        
        localStorage.setItem("wallet_address", address);
        localStorage.setItem("access_token", res.data.accessToken);
        localStorage.setItem("refresh_token", res.data.refreshToken);
        localStorage.setItem("connected-address", address);
        localStorage.setItem("connected-wallet", walletType);

        dispatch(openModal(false));
        dispatch(updateAuthed(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const connectPhantomWallet = async () => {
    if (typeof window !== undefined) {
      setLoading(true);
      try {
        if ("phantom" in window) {
          const provider = window.phantom?.solana;
          const account = await provider.connect();

          // dispatch(updateProvider(provider));
          dispatch(openModal(false));
          dispatch(updateAddress(account.publicKey.toString()));
        }
      } catch (err) {}
      setLoading(false);
    }
  };

  const connectAndUpdate = (
    provider: WalletConnectWeb3Provider | CoinbaseWalletProvider,
    address: string
  ) => {
    const web3 = new Web3(provider);
    const factoryContract:Contract = new web3.eth.Contract(factoryABI as AbiItem[] | AbiItem, EthereumNetwork.address.factory);
    const singleNFTContract:Contract = new web3.eth.Contract(singleNFTABI as AbiItem[] | AbiItem, EthereumNetwork.address.singleNFT);
    const marketplaceContract:Contract = new web3.eth.Contract(marketplaceABI as AbiItem[] | AbiItem, EthereumNetwork.address.marketplace);
    
    dispatch(updateProvider(new Web3(provider)));
    dispatch(openModal(false));
    dispatch(updateAddress(address));
    dispatch(updateContracts({ factoryContract, singleNFTContract, marketplaceContract }));
    setLocation("/profile/home-appearance");
  };

  return (
    <div
      className={cx("flex-col gap-5 items-center sm:mt-0 sm:ml-4", {
        flex: type > -1,
        hidden: type < 0,
      })}
    >
      <h2
        className={cx("text-3xl leading-6 font-medium text-white", {
          hidden: hiddenTitle,
        })}
      >
        {type == 0 ? "Create account" : "Sign in"}
      </h2>
      <div className="flex flex-col gap-3 rounded-lg bg-gray-600 p-6">
        <h3 className="text-white text-2xl font-bold text-center">Wallet</h3>
        <div className="border-b border-white border-opacity-25 overflow-x-auto scroll-pb-5">
          <div className="max-w-layout mx-auto w-full">
            <ul
              className="nav nav-tabs flex gap-2 list-none border-b-0 pl-0"
              id="tabs-tab"
              role="tablist"
            >
              {navs.map((item, idx) => (
                <li
                  className={cx("border-b-4 nav-item", {
                    "active-nav": idx == activeTab,
                    "border-transparent": idx != activeTab,
                  })}
                  role="presentation"
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                >
                  <span className="nav-link block text-lg leading-tight capitalize px-6 py-3 text-white hover:text-brand-orange font-bold">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={cx("ethereum-wallet w-full flex-col gap-3 h-52", {
            flex: activeTab < 2,
            hidden: activeTab > 1,
          })}
        >
          <button
            className="cursor-pointer text-white font-bold shadow-md py-4 px-5 bg-slate-500 rounded-[2px] flex items-center gap-3 hover:bg-slate-400 flex justify-between items-center"
            onClick={connectMetaMask}
            disabled={isLoading}
          >
            <div className="flex gap-3">
              <MetaMaskIcon />
              <span>MetaMask</span>
            </div>
            {active == 0 ? <LoadingIcon className="w-6 h-6" /> : ""}
          </button>
          <button
            className="cursor-pointer text-white font-bold shadow-md py-4 px-5 bg-slate-500 rounded-[2px] flex items-center gap-3 hover:bg-slate-400 flex justify-between items-center"
            onClick={connectWalletConnect}
            disabled={isLoading}
          >
            <div className="flex gap-3">
              <WalletConnectIcon />
              <span>Wallet Connect</span>
            </div>
            {active == 1 ? <LoadingIcon className="w-6 h-6" /> : ""}
          </button>
          <button
            className="cursor-pointer text-white font-bold shadow-md py-4 px-5 bg-slate-500 rounded-[2px] flex items-center gap-3 hover:bg-slate-400 flex justify-between items-center"
            onClick={connectCoinbase}
            disabled={isLoading}
          >
            <div className="flex gap-3">
              <CoinbaseIcon className="rounded-full" />
              <span>Coinbase Wallet</span>
            </div>
            {active == 2 ? <LoadingIcon className="w-6 h-6" /> : ""}
          </button>
        </div>
        <div
          className={cx("solana-wallet w-full flex flex-col gap-3 h-52", {
            flex: activeTab > 1,
            hidden: activeTab < 2,
          })}
        >
          <button
            className="cursor-pointer text-white font-bold shadow-md py-4 px-5 bg-slate-500 rounded-[2px] flex items-center gap-3 hover:bg-slate-400 flex justify-between items-center"
            onClick={connectPhantomWallet}
            disabled={isLoading}
          >
            <div className="flex gap-3">
              <PhantomIcon className="rounded-full" />
              <span>Phantom</span>
            </div>
            {active == 2 ? <LoadingIcon className="w-6 h-6" /> : ""}
          </button>
        </div>
      </div>
    </div>
  );
};
