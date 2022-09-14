import { Dialog, Transition } from "@headlessui/react";
import cx from "classnames";
import { FC, Fragment, useRef, useState } from "react";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { useSelector, useDispatch } from "react-redux";
import { openModal, updateAddress, updateProvider } from "../../store/actions/auth.action";
import { IStore } from "../../store/reducers/auth.reducer";
import { MetaMaskIcon } from "../icons/MetaMaskIcon";
import { WalletConnectIcon } from "../icons/WalletConnectIcon";
import { CoinbaseIcon } from "../icons/CoinbaseIcon";
import { MailIcon, PlusIcon } from "@heroicons/react/outline";
import { ConnectWalletIcon } from "../icons/ConnectWalletIcon";
import CoinbaseWalletSDK, {CoinbaseWalletProvider} from "@coinbase/wallet-sdk";
import { XIcon } from "@heroicons/react/solid";
import { JsonRpcPayload, JsonRpcResponse } from 'web3-core-helpers';
import { AbstractProvider } from 'web3-core/types';

export declare class WalletConnectWeb3Provider extends WalletConnectProvider implements AbstractProvider {
    sendAsync(payload: JsonRpcPayload, callback: (error: Error | null, result?: JsonRpcResponse) => void): void;
}

const navs = [
    "Ethereum",
    "Polygon",
    "Solana"
];

export const AuthModal:FC = () => {

    const openAuthModal = useSelector<IStore, boolean>((state) => state.auth.openAuthModal);
    const dispatch = useDispatch();
    
    const cancelButtonRef = useRef(null)
    const [activePanel, setActivePanel] = useState<string>('0');

    const connectWalletConnect = async() => {
        try {
            const provider = new WalletConnectProvider({
                infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
            });
            const accounts = await provider.enable();
            connectAndUpdate(provider as WalletConnectWeb3Provider, accounts[0]);
        } catch(err) {

        }
    }

    const connectMetaMask = async() => {
        if (window.ethereum) {
            const ethereum = window.ethereum;
            let provider;
            if (ethereum.providerMap) {
                for (const [key, value] of ethereum.providerMap) {
                    if (key.toLowerCase() == 'metamask') provider = value;
                }
            }

            else {
                if (ethereum.isMetaMask) {
                    provider = ethereum;
                }
            }
            if (provider) {
                const accounts = await provider.request({
                    method: "eth_requestAccounts"
                });
                connectAndUpdate(provider, accounts[0]);
            }
        }
    }

    const connectCoinbase = async() => {
        const coinbaseWallet = new CoinbaseWalletSDK({
            appName: "Givetree",
            overrideIsMetaMask: true
        });

        const ethereum = coinbaseWallet.makeWeb3Provider("https://mainnet.infura.io/v3/9278c04944064d5a8f9ad13e549e550c", 1);
        const accounts = await ethereum.enable();
        connectAndUpdate(ethereum, accounts[0]);
    }
    
    const connectAndUpdate = (provider:WalletConnectWeb3Provider | CoinbaseWalletProvider, address:string) => {
        dispatch(updateProvider(new Web3(provider)));
        dispatch(openModal(false));
        dispatch(updateAddress(address));
    }

    return (
        <Transition.Root show={openAuthModal} as={Fragment}>
            <Dialog as="div" className="relative z-100" initialFocus={cancelButtonRef} onClose={() => {
                dispatch(openModal(false));
                setActivePanel('0');
            }}>
                
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed z-100 inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                </Transition.Child>

                <div className="fixed z-full inset-0 overflow-y-auto">
                    <span
                        className="top-0 right-0 z-full cursor-pointer absolute m-4"
                        onClick={() => {
                            dispatch(openModal(false));
                            setActivePanel('0');
                        }}
                    >
                        <XIcon className="w-8 h-8 text-white"/>
                    </span>
                    <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                        <Dialog.Panel className="relative rounded-lg text-left transform transition-all sm:max-w-lg sm:w-full">
                            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="grid text-center">
                                    <div className={cx("flex-col gap-5 items-center sm:mt-0 sm:ml-4", {
                                        "flex": activePanel == '0',
                                        "hidden": activePanel != '0',
                                    })}>{/* first */}
                                        <Dialog.Title as="h2" className="text-3xl leading-6 font-medium text-white">
                                            Log in or create account
                                        </Dialog.Title>
                                        <button className="w-72 h-20 rounded-lg text-lg font-bold text-white bg-cyan-400" onClick={() => setActivePanel('up-1')}>Sign Up</button>
                                        <button className="w-72 h-20 rounded-lg text-lg font-bold text-white bg-cyan-400" onClick={() => setActivePanel('in-1')}>Sign In</button>
                                    </div>
                                    <div className={cx("flex-col gap-5 items-center sm:mt-0 sm:ml-4", {
                                        "flex": activePanel == "up-1" || activePanel == "in-1",
                                        "hidden": activePanel != "up-1" && activePanel != "in-1",
                                    })}>{/* second */}
                                        <Dialog.Title as="h2" className="text-3xl leading-6 font-medium text-white">
                                            { activePanel == "up-1" ? "Create account" : "Sign in"}
                                        </Dialog.Title>
                                        <button className="w-72 h-20 rounded-lg text-lg font-bold text-white bg-cyan-400 flex items-center gap-3 justify-center" onClick={() => setActivePanel(activePanel == "up-1" ? "up-2": "in-2")}>
                                            <ConnectWalletIcon/>
                                            <span>Wallet</span>
                                        </button>
                                        <button className="w-72 h-20 rounded-lg text-lg font-bold text-white bg-cyan-400 flex items-center gap-3 justify-center" onClick={() => setActivePanel(activePanel == "up-1" ? "up-3": "in-3")}>
                                            <MailIcon className="w-8 h-8"/>
                                            <span>Email</span>
                                        </button>
                                    </div>
                                    <div className={cx("flex-col gap-5 items-center sm:mt-0 sm:ml-4", {
                                        "flex": activePanel == "up-2" || activePanel == "in-2",
                                        "hidden": activePanel != "up-2" && activePanel != "in-2",
                                    })}>
                                        <Dialog.Title as="h2" className="text-3xl leading-6 font-medium text-white">
                                            {activePanel == "up-2" ? "Create account" : "Sign in"}
                                        </Dialog.Title>
                                        <div className="flex flex-col gap-3 rounded-lg bg-gray-600 p-6">
                                            <h3 className="text-white text-2xl font-bold">Wallet</h3>
                                            <div className="border-b border-white overflow-x-auto scroll-pb-5">
                                                <div className="max-w-screen-2xl mx-auto w-full">
                                                    <ul
                                                        className="nav nav-tabs flex gap-2 list-none border-b-0 pl-0"
                                                        id="tabs-tab"
                                                        role="tablist"
                                                    >
                                                        {
                                                            navs.map((item, idx) => (
                                                                <li
                                                                    className={cx("border-b-4 nav-item", {
                                                                        "active-nav": idx == 0,
                                                                        "border-transparent": idx != 0
                                                                    })}
                                                                    role="presentation"
                                                                    key={idx}
                                                                >
                                                                    <a
                                                                        href="#tabs-home"
                                                                        className="nav-link block text-lg leading-tight capitalize px-6 py-3 hover:border-b-brand-orange hover:bg-gray-100 focus:border-transparent active text-white"
                                                                        id="tabs-home-tab"
                                                                        data-bs-toggle="pill"
                                                                        data-bs-target="#tabs-home"
                                                                        role="tab"
                                                                        aria-controls="tabs-home"
                                                                        aria-selected="true"
                                                                    >
                                                                        {item}
                                                                    </a>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                            <div
                                                className="cursor-pointer text-white font-bold shadow-md py-4 px-5 bg-slate-500 rounded-[2px] flex items-center gap-3 hover:bg-slate-400"
                                                onClick={connectMetaMask}
                                            >
                                                <MetaMaskIcon/>
                                                <span>MetaMask</span>
                                            </div>
                                            <div
                                                className="cursor-pointer text-white font-bold shadow-md py-4 px-5 bg-slate-500 rounded-[2px] flex items-center gap-3 hover:bg-slate-400"
                                                onClick={connectWalletConnect}
                                            >
                                                <WalletConnectIcon/>
                                                <span>Wallet Connect</span>
                                            </div>
                                            <div
                                                className="cursor-pointer text-white font-bold shadow-md py-4 px-5 bg-slate-500 rounded-[2px] flex items-center gap-3 hover:bg-slate-400"
                                                onClick={connectCoinbase}
                                            >
                                                <CoinbaseIcon className="rounded-full"/>
                                                <span>Coinbase Wallet</span>
                                            </div>
                                            <div className="cursor-pointer text-white font-bold shadow-md py-4 px-5 bg-slate-500 rounded-[2px] flex justify-center gap-2 items-center">
                                                <span>Show more options</span>
                                                <PlusIcon className="w-4 h-4"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx("flex-col gap-5 items-center sm:mt-0 sm:ml-4", {
                                        "flex": activePanel == "up-3" || activePanel == "in-3",
                                        "hidden": activePanel != "up-3" && activePanel != "in-3",
                                    })}>
                                        <Dialog.Title as="h2" className="text-3xl leading-6 font-medium text-white">
                                            {activePanel == "up-3" ? "Create account": "Sign in"}
                                        </Dialog.Title>
                                        <div className="flex flex-col gap-3 py-10 border rounded-lg bg-gray-600 px-12 w-full">
                                            <div className="text-white flex flex-col gap-2">
                                                <h3 className="text-2xl font-bold">Email</h3>
                                                <h4>{activePanel == "up-3" ? "Create an account" : "Sign in"}</h4>
                                                {activePanel == "up-3" ? <span>Already have an account? <span>Login</span></span> : 
                                                <span>Don&apos;t have an account? <span>Sign up</span></span> }
                                            </div>
                                            <div className="form-layout flex flex-col gap-2">
                                                <div className="input-form-group flex flex-col items-start">
                                                    <label className="text-white font-bold">Username</label>
                                                    <input
                                                        type="text"
                                                        className="outline-none focus:ring-cyan-700 focus:ring focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-3"
                                                        placeholder="Enter username"
                                                    />
                                                </div>
                                                <div className="input-form-group flex flex-col items-start">
                                                    <label className="text-white font-bold">Email</label>
                                                    <input
                                                        type="email"
                                                        className="outline-none focus:ring-cyan-700 focus:ring focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-3"
                                                        placeholder="Enter email"
                                                    />
                                                </div>
                                                <div className="input-form-group flex flex-col items-start">
                                                    <label className="text-white font-bold">Password</label>
                                                    <input
                                                        type="password"
                                                        className="outline-none focus:ring-cyan-700 focus:ring focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-3"
                                                        placeholder="Enter a secure password"
                                                    />
                                                </div>
                                                <div className="input-form-group flex flex-col items-start">
                                                    <label className="text-white font-bold">Confirm Password</label>
                                                    <input
                                                        type="password"
                                                        className="outline-none focus:ring-cyan-700 focus:ring focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-3"
                                                        placeholder="Enter a secure password"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <button className="flex text-white justify-center items-center py-2.5 px-3 rounded-lg bg-cyan-600 text-sm sm:text-sm font-bold tracking-wide cursor-pointer button-hover w-full">Continue</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
    </Transition.Root>
    )
}