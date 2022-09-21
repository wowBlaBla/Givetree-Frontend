import { Dialog, Transition } from "@headlessui/react";
import cx from "classnames";
import { FC, Fragment, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../store/actions/auth.action";
import { IStore } from "../../store/reducers/auth.reducer";
import { XIcon } from "@heroicons/react/solid";
import { SignupWithEmail } from "../SignupWithEmail";
import { SigninWithEmail } from "../SigninWithEmail";
import { AuthWithWallet } from "../AuthWithWallet";

export const AuthModal:FC = () => {

    const openAuthModal = useSelector<IStore, boolean>((state) => state.auth.openAuthModal);
    const dispatch = useDispatch();
    const cancelButtonRef = useRef(null)
    const [activePanel, setActivePanel] = useState<string>('0');    

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
                    <div className="fixed z-100 inset-0 bg-[#14161A] transition-opacity"/>
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
                                        <button className="w-72 h-20 rounded-lg text-lg font-bold text-white bg-[#677489] hover:bg-[#262C55]" onClick={() => setActivePanel('up-1')}>Sign Up</button>
                                        <button className="w-72 h-20 rounded-lg text-lg font-bold text-white bg-[#677489] hover:bg-[#262C55]" onClick={() => setActivePanel('in-1')}>Sign In</button>
                                    </div>
                                    <div className={cx("flex-col gap-5 items-center sm:mt-0 sm:ml-4", {
                                        "flex": activePanel == "up-1" || activePanel == "in-1",
                                        "hidden": activePanel != "up-1" && activePanel != "in-1",
                                    })}>{/* second */}
                                        <Dialog.Title as="h2" className="text-3xl leading-6 font-medium text-white">
                                            { activePanel == "up-1" ? "Create account" : "Sign in"}
                                        </Dialog.Title>
                                        <button className="w-72 h-20 rounded-lg text-lg font-bold text-white bg-[#677489] hover:bg-[#262C55] flex items-center gap-3 justify-center" onClick={() => setActivePanel(activePanel == "up-1" ? "up-2": "in-2")}>
                                            <span>Wallet</span>
                                        </button>
                                        <button className="w-72 h-20 rounded-lg text-lg font-bold text-white bg-[#677489] hover:bg-[#262C55] flex items-center gap-3 justify-center" onClick={() => setActivePanel(activePanel == "up-1" ? "up-3": "in-3")}>
                                            <span>Email</span>
                                        </button>
                                    </div>
                                    <AuthWithWallet type={activePanel == "up-2" ? 0 : (activePanel == "in-2" ? 1 : -1)}/>
                                    <>
                                        {
                                            activePanel == "up-3" ? <SignupWithEmail/> : (activePanel == "in-3" ? <SigninWithEmail/> : "")
                                        }
                                    </>
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