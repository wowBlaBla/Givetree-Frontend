import { Dialog, Transition } from "@headlessui/react";
import cx from "classnames";
import { FC, Fragment, useRef, useState, useCallback } from "react";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import { useSelector, useDispatch } from "react-redux";
import { openModal, updateProvider } from "../../store/actions/auth.action";
import { IStore } from "../../store/reducers/auth.reducer";

const navs = [
    "Ethereum",
    "Polygon",
    "Solana"
];

const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: "460f40a260564ac4a4f4b3fffb032dad", // required
      },
    },
}

let web3Modal:Web3Modal;
    if (typeof window !== 'undefined') {
    web3Modal = new Web3Modal({
        network: 'mainnet', // optional
        cacheProvider: true,
        providerOptions, // required,
    })
}

export const AuthModal:FC = () => {

    const openAuthModal = useSelector<IStore, boolean>((state) => state.auth.openAuthModal);
    const dispatch = useDispatch();
    
    const cancelButtonRef = useRef(null)
    const [activePanel, setActivePanel] = useState(0);

    const connect = useCallback(async() => {
        try {
            const provider = await web3Modal.connect();
            const web3Provider = new Web3(provider);
            dispatch(updateProvider(web3Provider));
            dispatch(openModal(false));
        } catch(err) {
            console.log(err);
        }
    }, [dispatch])

    return (
        <Transition.Root show={openAuthModal} as={Fragment}>
            <Dialog as="div" className="relative z-100" initialFocus={cancelButtonRef} onClose={() => {
                dispatch(openModal(false));
                setActivePanel(0);
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
                <div className="fixed z-100 inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed z-full inset-0 overflow-y-auto">
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
                        <Dialog.Panel className="relative rounded-lg text-left transform transition-all sm:max-w-lg sm:w-full h-[34rem]">
                            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 h-50">
                                <div className="grid text-center">
                                    <div className={cx("flex-col gap-5 items-center sm:mt-0 sm:ml-4", {
                                        "flex": activePanel == 0,
                                        "hidden": activePanel != 0,
                                    })}>{/* first */}
                                        <Dialog.Title as="h2" className="text-3xl leading-6 font-medium text-white">
                                            Log in or create account
                                        </Dialog.Title>
                                        <button className="w-72 h-20 rounded-lg text-lg font-bold text-white bg-cyan-400" onClick={() => setActivePanel(1)}>Sign Up</button>
                                        <button className="w-72 h-20 rounded-lg text-lg font-bold text-white bg-cyan-400" onClick={() => connect()}>Sign In</button>
                                    </div>
                                    <div className={cx("flex-col gap-5 items-center sm:mt-0 sm:ml-4", {
                                        "flex": activePanel == 1,
                                        "hidden": activePanel != 1,
                                    })}>{/* second */}
                                        <Dialog.Title as="h2" className="text-3xl leading-6 font-medium text-white">
                                            Create Account
                                        </Dialog.Title>
                                        <button className="w-72 h-20 rounded-lg text-lg font-bold text-white bg-cyan-400" onClick={() => setActivePanel(2)}>Wallet</button>
                                        <button className="w-72 h-20 rounded-lg text-lg font-bold text-white bg-cyan-400" onClick={() => setActivePanel(3)}>Email</button>
                                    </div>
                                    <div className={cx("flex-col gap-5 items-center sm:mt-0 sm:ml-4", {
                                        "flex": activePanel == 2,
                                        "hidden": activePanel != 2,
                                    })}>
                                        <Dialog.Title as="h2" className="text-3xl leading-6 font-medium text-white">
                                            Create account
                                        </Dialog.Title>
                                        <div className="flex flex-col gap-3 py-10 border rounded-lg bg-gray-600">
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
                                            <ul className="flex flex-col items-start gap-4 px-10 py-8">
                                                <li className="h-8 cursor-pointer text-white font-bold">Metamask</li>
                                                <li className="h-8 cursor-pointer text-white font-bold">Wallet 2</li>
                                                <li className="h-8 cursor-pointer text-white font-bold">Wallet 3</li>
                                                <li className="h-8 cursor-pointer text-white font-bold">Wallet 4</li>
                                                <li className="h-8 cursor-pointer text-white font-bold">Wallet 5</li>
                                                <li className="h-8 cursor-pointer text-white font-bold">Wallet 6</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={cx("flex-col gap-5 items-center sm:mt-0 sm:ml-4", {
                                        "flex": activePanel == 3,
                                        "hidden": activePanel != 3,
                                    })}>
                                        <Dialog.Title as="h2" className="text-3xl leading-6 font-medium text-white">
                                            Create account
                                        </Dialog.Title>
                                        <div className="flex flex-col gap-3 py-10 border rounded-lg bg-gray-600 px-12 w-full">
                                            <div className="text-white flex flex-col gap-2">
                                                <h3 className="text-2xl font-bold">Email</h3>
                                                <h4>Create an account</h4>
                                                <span>Already have an account? <span>Login</span></span>
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