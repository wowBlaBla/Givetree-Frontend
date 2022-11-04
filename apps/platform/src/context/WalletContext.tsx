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

export const Network = ['Ethereum', 'Polygon', 'Solana'];

export const NetworkName = {
  '1': "ethereum", // mainnet 1
  '5': "ethereum", // mainnet 1
  '137': 'polygon',
  '80001': 'polygon', //
  '44787': 'celo', //
  '420': 'optimism', //
  '421613': 'arbitrum' //
};
export type NetworkID = '5' | '80001' | '44787' | '420' | '421613';
export type Wallet = "metamask" | "walletconnect" | "coinbase" | "phantom";
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
  connectWallet: (wallet: Wallet) => void;
  reset: () => void;
}

const WalletContext = React.createContext<IWalletProvider>({
  connectWallet: () => {},
  reset: () => {},
});

// eslint-disable-next-line @typescript-eslint/ban-types
export const WalletProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [address, setAddress] = useState<string>();
  const [networkName, setNetworkName] = useState<string>();
  const [wallet, setWallet] = useState<Wallet>();
  const [provider, setProvider] = useState<WalletProvider>();
  const [web3Instance, setWeb3Instance] = useState<Web3>();
  const [contracts, setContracts] = useState<IContractSet>();

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const provider = "https://eth-goerli.g.alchemy.com/v2/LYuZuxHIZHqSqR5qCsT768jCORqGoXqn";
    updateWeb3(provider);
  }, []);

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
  };

  const connectWalletConnect = async () => {
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
  };

  const connectCoinbase = async () => {
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
  };

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

  const updateWeb3 = async(provider: WalletProvider) => {
    const web3 = new Web3(provider);

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
    setNetworkName(NetworkName[networkID.toString() as NetworkID ]);
    setWeb3Instance(web3);
    setProvider(provider);
    setContracts({
      factory: factoryContract,
      singleNFT: singleNFTContract,
      marketplace: marketplaceContract,
      paymentToken: paymentTokenContract
    });
  };

  const reset = () => {
    setAddress(undefined);
    setWallet(undefined);
    setProvider(undefined);
    setWeb3Instance(undefined);
    setContracts(undefined);
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
