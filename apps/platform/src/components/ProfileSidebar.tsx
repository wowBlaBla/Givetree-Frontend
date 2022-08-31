import { FC } from "react";
import { Link } from "wouter";
import avatar from "../temp/images/campaigns/mulgakongz-collection.png";
const navs = [
    {
        href: "/profile/creator/home",
        title: "My Profile"
    },
    {
        href: "/profile/creator/nft",
        title: "My NFTs"
    },
    {
        href: "/profile/creator/mint",
        title: "Create NFT"
    },
    {
        href: "/profile/creator/fundraisers",
        title: "My Fundraisers"
    },
    {
        href: "/profile/creator/settings",
        title: "Settings"
    },
]
export const ProfileSideBar:FC = () => {
    return (
        <div className="flex flex-col w-75 py-8 bg-white border-r dark:bg-gray-900 dark:border-gray-700">
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
            <div className="flex flex-col justify-between flex-1 mt-6">
                <nav>
                    {
                        navs.map((item, idx) => (
                            <Link
                                href={item.href}
                                key={idx}
                            >
                                <a
                                    className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                                    href=""
                                >
                                    <span className="mx-4 font-medium">{item.title}</span>
                                </a>
                            </Link>
                        ))
                    }
                </nav>
            </div>
        </div>
    )
}