/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useContext, useEffect, useState } from "react";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK, { CoinbaseWalletProvider } from "@coinbase/wallet-sdk";
import Web3 from "web3";
import { AbstractProvider } from "web3-core/types";
import { JsonRpcPayload, JsonRpcResponse } from "web3-core-helpers";
import { Contract } from "web3-eth-contract";
import { AbiItem } from "web3-utils";

import { EthereumNetwork } from "../configs/constants";

import factoryABI from "../assets/jsons/abi/factory.json";
import singleNFTABI from "../assets/jsons/abi/singleNFT.json";
import marketplaceABI from "../assets/jsons/abi/marketplace.json";
import paymentTokenABI from "../assets/jsons/abi/erc20.json";
import axios from "axios";
import { useLocation } from "wouter";

export const Network = ["Ethereum", "Polygon", "Solana"];

export const NetworkName = {
  // '1': "ethereum", // mainnet 1
  "5": "ethereum", // mainnet 1
  "137": "polygon",
  "80001": "polygon", //
  "44787": "celo", //
  "420": "optimism", //
  "421613": "arbitrum", //
};
export type NetworkID = "5" | "80001" | "44787" | "420" | "421613";
export type Wallet = "metamask" | "walletconnect" | "coinbase" | "phantom";
export type SignType = "auth" | "donation";
export type WalletProvider = WalletConnectWeb3Provider | CoinbaseWalletProvider | string;

export declare class WalletConnectWeb3Provider
  extends WalletConnectProvider
  implements AbstractProvider
{
  sendAsync(
    payload: JsonRpcPayload,
    callback: (error: Error | null, result?: JsonRpcResponse) => void
  ): void;
}

interface IContractSet {
  factory?: Contract;
  singleNFT: Contract;
  marketplace?: Contract;
  paymentToken?: Contract;
}

interface IWalletProvider {
  address?: string;
  networkName?: string;
  wallet?: Wallet;
  provider?: WalletProvider;
  loading?: boolean;
  web3Instance?: Web3;
  contracts?: IContractSet;
  connectWallet: (wallet: Wallet) => Promise<void>;
  reset: () => void;
  signTransaction: () => Promise<string | undefined>;
  updateNetworkName: (networkName: string) => void;
}

const WalletContext = React.createContext<IWalletProvider>({
  connectWallet: () => new Promise(() => {}),
  reset: () => {},
  signTransaction: () => new Promise(() => {}),
  updateNetworkName: () => {},
});
const httpProvider =
  "https://eth-goerli.g.alchemy.com/v2/LYuZuxHIZHqSqR5qCsT768jCORqGoXqn";

// eslint-disable-next-line @typescript-eslint/ban-types
export const WalletProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [address, setAddress] = useState<string>();
  const [networkName, setNetworkName] = useState<string>();
  const [wallet, setWallet] = useState<Wallet>();
  const [provider, setProvider] = useState<WalletProvider>();
  const [web3Instance, setWeb3Instance] = useState<Web3>();
  const [contracts, setContracts] = useState<IContractSet>();

  const [loading, setLoading] = useState<boolean>(false);

  const updateWeb3 = React.useCallback(
    async (provider: WalletProvider) => {
      const web3 = new Web3(provider);
      if (typeof provider != "string" && wallet) {
        provider
          .on("accountsChanged", (accounts: Array<string>) => {
            setAddress(accounts[0]);
          })
          .on("chainChanged", (chainID: string) => {
            if (+chainID == 5 || +chainID == 80001) {
            }
          });
      }

      const factoryContract: Contract = new web3.eth.Contract(
        factoryABI as AbiItem[] | AbiItem,
        EthereumNetwork.address.factory
      );
      const singleNFTContract: Contract = new web3.eth.Contract(
        singleNFTABI as AbiItem[] | AbiItem,
        EthereumNetwork.address.singleNFT
      );
      const marketplaceContract: Contract = new web3.eth.Contract(
        marketplaceABI as AbiItem[] | AbiItem,
        EthereumNetwork.address.marketplace
      );
      const paymentTokenContract: Contract = new web3.eth.Contract(
        paymentTokenABI as AbiItem[] | AbiItem,
        EthereumNetwork.address.paymentToken
      );

      const networkID = await web3.eth.getChainId();
      setNetworkName(NetworkName[networkID.toString() as NetworkID]);
      setWeb3Instance(web3);
      setProvider(provider);
      setContracts({
        factory: factoryContract,
        singleNFT: singleNFTContract,
        marketplace: marketplaceContract,
        paymentToken: paymentTokenContract,
      });
    },
    [wallet]
  );

  const connectWallet = async (wallet: Wallet) => {
    switch (wallet) {
      case "metamask":
        connectMetaMask();
        break;
      case "walletconnect":
        connectWalletConnect();
        break;
      case "coinbase":
        connectCoinbase();
        break;
    }
  };

  const connectMetaMask = React.useCallback(async () => {
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
        setLoading(true);
        try {
          const accounts = await provider.request({
            method: "eth_requestAccounts",
          });

          setAddress(accounts[0]);
          setWallet("metamask");
          updateWeb3(provider);
        } catch (err) {}
        setLoading(false);
      }
    }
  }, [updateWeb3]);

  const connectWalletConnect = React.useCallback(async () => {
    setLoading(true);
    try {
      const provider = new WalletConnectProvider({
        infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
      });
      const accounts = await provider.enable();
      setAddress(accounts[0]);
      setWallet("walletconnect");
      updateWeb3(provider as WalletConnectWeb3Provider);
    } catch (err) {}
    setLoading(false);
  }, [updateWeb3]);

  const connectCoinbase = React.useCallback(async () => {
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
      setAddress(accounts[0]);
      setWallet("coinbase");
      updateWeb3(ethereum);
    } catch (err) {}
    setLoading(false);
  }, [updateWeb3]);

  const connectPhantomWallet = async () => {
    // if (typeof window !== undefined) {
    //   setLoading(true);
    //   try {
    //     if ("phantom" in window) {
    //       const provider = window.phantom?.solana;
    //       const account = await provider.connect();
    //       dispatch(updateAddress(account.publicKey.toString()));
    //     }
    //   } catch (err) {}
    //   setLoading(false);
    // }
  };

  const reset = React.useCallback(() => {
    setAddress(undefined);
    setWallet(undefined);
    updateWeb3(httpProvider);
    // setProvider(undefined);
    // setWeb3Instance(undefined);
    // setContracts(undefined);
  }, [updateWeb3]);

  const signTransaction = React.useCallback(async () => {
    setLoading(true);
    try {
      if (provider && address) {
        const web3 = new Web3(provider);

        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API}/api/auth/request-sign-transaction`,
          {
            address,
          }
        );

        const nonce = res.data.nonce;

        if (nonce) {
          const message = `Givetree one time nonce: ${nonce}`;
          const signature = await web3.eth.personal.sign(
            message,
            address,
            "givetree-signs"
          );
          setLoading(false);
          return signature;
        }
      }
      setLoading(false);
      return undefined;
    } catch (err) {
      setLoading(false);
      return undefined;
    }
  }, [address, provider]);

  const updateNetworkName = (_networkName: string) => {
    setNetworkName(_networkName);
  };

  return (
    <WalletContext.Provider
      value={{
        address,
        wallet,
        provider,
        loading,
        web3Instance,
        contracts,
        networkName,
        connectWallet,
        reset,
        signTransaction,
        updateNetworkName,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);

  if (!context) {
    throw new Error("useWallet hook must be used inside WalletProvider");
  }

  return context;
};
