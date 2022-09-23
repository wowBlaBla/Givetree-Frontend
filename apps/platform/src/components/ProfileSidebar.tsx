import { XCircleIcon } from "@heroicons/react/outline";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useRoute } from "wouter";
import { PlatformRoute } from "../configs/routes";
import { updateAddress } from "../store/actions/auth.action";
import { IStore } from "../store/reducers/auth.reducer";
import avatar from "../temp/images/campaigns/mulgakongz-collection.png";
import { AuthWithWallet } from "./AuthWithWallet";
import { PrimaryButton } from "./PrimaryCta";
const navs = [
    {
        category: "home",
        title: "My Profile"
    },
    {
        category: "nft",
        title: "My NFTs"
    },
    {
        category: "mint",
        title: "Create NFT"
    },
    {
        category: "fundraisers",
        title: "My Fundraisers"
    },
    {
        category: "settings",
        title: "Settings"
    },
]
export const ProfileSideBar:FC = () => {
    const [, params] = useRoute(PlatformRoute.ProfileDetails);
    const dispatch = useDispatch();
    const walletAddress = useSelector<IStore, string>((state) => state.auth.walletAddress);
    const [openModal, setOpenModal] = useState<boolean>(false);

    const disconnect = () => {
        dispatch(updateAddress(''));
    }

    useEffect(() => {
        if (walletAddress) setOpenModal(false);
    }, [walletAddress]);

    return (
        <div className="hidden sm:flex flex-col w-75 py-8 bg-white border-r border-base-content border-opacity-25 dark:bg-mid-dark min-h-screen">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="flex flex-col items-start mt-6 px-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    className="object-cover w-25 h-25 mx-2 rounded-full"
                    src={avatar.src}
                    alt="avatar"
                />
                <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 text-base hover:underline">
                    Mulga The Artist
                </h4>
            </div>
            <div>
                <PrimaryButton
                    className="ml-10 py-2 px-4 mt-4"
                    onClick={
                        () => walletAddress ? disconnect() : setOpenModal(true)
                    }
                >{
                    walletAddress ? "Disconnect Wallet" : "Connect Wallet"
                }</PrimaryButton>
            </div>
            <div className="flex flex-col justify-between flex-1 mt-6">
                <nav>
                    {
                        navs.map((item, idx) => (
                            <Link
                                href={("/profile/" + params?.role + "/" + item.category)}
                                key={idx}
                            >
                                <a
                                    className={`flex items-center p-4 transition-colors duration-300 transform dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700 ${item.category == params?.category ? "bg-menu-orange text-white" : " text-gray-600 "}`}
                                    href=""
                                >
                                    <span className="mx-4 font-medium">{item.title}</span>
                                </a>
                            </Link>
                        ))
                    }
                </nav>
            </div>
            <div className="modal-panel">
                <input
                    type="checkbox"
                    id="my-modal-5"
                    className="modal-toggle"
                    checked={openModal}
                    readOnly
                />
                <label htmlFor="my-modal-5" className="modal">
                    <span
                        className="absolute top-0 right-0 mr-2 mt-2 text-white cursor-pointer"
                        onClick={
                            () => walletAddress ? disconnect() : setOpenModal(false)
                        }
                    >
                        <XCircleIcon className="w-7 h-7"/>
                    </span>
                    <AuthWithWallet
                        type={1}
                        hiddenTitle
                    />
                </label>
            </div>
        </div>
    )
}