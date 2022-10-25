import { FC, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useRoute } from "wouter";
import { PlatformRoute } from "../../configs/routes";
import { AUTH_USER, IStore } from "../../store/reducers/auth.reducer";
import avatar from "../../temp/images/campaigns/mulgakongz-collection.png";
import { UserIcon } from "../../components/icons/profiles/UserIcon";
import { WalletIcon } from "../../components/icons/profiles/WalletIcon";
import { NFTIcon } from "../../components/icons/profiles/NFTIcon";
import { CollectionIcon } from "../../components/icons/profiles/CollectionIcon";
import { ListingIcon } from "../../components/icons/profiles/ListingIcon";
import { DonationIcon } from "../../components/icons/profiles/DonationIcon";
import { SettingIcon } from "../../components/icons/profiles/SettingIcon";
import { CreateIcon } from "../../components/icons/profiles/CreateIcon";

interface NavItem {
  category: string;
  title: string;
  children?: NavItem[];
  icon?: React.FC;
}

const defaultNavs: NavItem[] = [
  {
    category: "home",
    title: "My profile",
    icon: UserIcon,
  },
  {
    category: "wallets",
    title: "My wallets",
    icon: WalletIcon,
  },
  {
    category: "nfts",
    title: "My NFTs",
    icon: NFTIcon,
  },
  {
    category: "collections",
    title: "My collections",
    icon: CollectionIcon,
  },
  {
    category: "listings",
    title: "My listings",
    icon: ListingIcon,
  },
  {
    category: "donations",
    title: "My donations",
    icon: DonationIcon,
  },
  {
    category: "settings",
    title: "Settings",
    icon: SettingIcon,
  },
];

const createNavs: NavItem[] = [
  {
    category: "new-nft",
    title: "Create NFT",
    icon: CreateIcon,
  },
  {
    category: "new-collection",
    title: "Create collection",
    icon: CreateIcon,
  },
  {
    category: "new-listing",
    title: "Create listing",
    icon: CreateIcon,
  },
  {
    category: "new-mintpage",
    title: "Create mint page",
    icon: CreateIcon,
  },
];

interface ProfileSideBarProps {
  visible?: boolean;
  setVisible?: (visible: boolean) => void;
}

export const ProfileSideBar: FC<ProfileSideBarProps> = ({ visible, setVisible }) => {
  const [, params] = useRoute(PlatformRoute.ProfileDetails);

  const authedUser = useSelector<IStore, AUTH_USER | undefined>(
    (state) => state.auth.authedUser
  );

  return (
    <div
      className={`side-bar ${
        visible ? "absolute" : "hidden lg:flex"
      } lg:sticky top-[80px] lg:top-0 left-0 flex-col w-full lg:min-w-[240px] lg:max-w-[240px] py-8 bg-white border-r border-base-content border-opacity-25 dark:bg-mid-dark z-10`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <div className="flex flex-col items-center px-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="object-cover w-25 h-25 mx-2 rounded-full"
          src={authedUser?.user.profileImage || avatar.src}
          alt="avatar"
        />
        <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 text-xs hover:underline">
          Mulga The Artist
        </h4>
      </div>
      {/* <div>
        <PrimaryButton
          className="ml-10 py-2 px-4 mt-4"
          onClick={() => (walletAddress ? disconnect() : setOpenModal(true))}
        >
          {walletAddress ? "Disconnect Wallet" : "Connect Wallet"}
        </PrimaryButton>
      </div> */}
      <div className="flex flex-col flex-1 mt-6">
        <div>
          {defaultNavs.map((item, idx) =>
            item.children ? (
              <div className="collapse collapse-plus" key={`default-side-sub-${idx}`}>
                <input type="checkbox" />
                <div className="collapse-title !px-2 !py-2 border-b border-t border-[#686868]">
                  <span className={`mx-4 font-medium text-[#C4C4C4]`}>{item.title}</span>
                </div>
                <div className="collapse-content">
                  {item.children.map((subItem, sIdx) => (
                    <Link
                      className={`flex items-center transition-colors duration-300 transform`}
                      href={"/profile/" + subItem.category}
                      key={`default-side-sub-nav-${sIdx}`}
                    >
                      <div
                        className={`cursor-pointer px-6 py-2 border-b border-[#686868] ${
                          subItem.category == params?.category ? "bg-[#5A5A5A]" : ""
                        }`}
                      >
                        <span className={`mx-4 font-medium text-[#C4C4C4]`}>
                          {subItem.title}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                className={`flex items-center transition-colors duration-300 transform`}
                href={"/profile/" + item.category}
                key={`default-side-sub-${idx}`}
                onClick={() => setVisible && setVisible(false)}
              >
                <div
                  className={`flex items-center cursor-pointer px-4 py-3 border-b border-[#686868] ${
                    idx === 0 ? "border-t" : ""
                  } ${item.category == params?.category ? "bg-[#5A5A5A]" : ""}`}
                >
                  {item.icon && <item.icon />}
                  <span className={`mx-4 font-medium text-[#C4C4C4]`}>{item.title}</span>
                </div>
              </Link>
            )
          )}
        </div>
        <span className="pl-[1.5rem] text-[20px] font-bold mt-8 mb-4">CREATE</span>
        <nav>
          {createNavs.map((item, idx) => (
            <Link
              className={`flex items-center p-2 transition-colors duration-300 transform`}
              href={"/profile/" + item.category}
              key={idx}
              onClick={() => setVisible && setVisible(false)}
            >
              <div
                className={`flex items-center cursor-pointer px-4 py-2 border-b border-[#686868] ${
                  item.category == params?.category ? "bg-[#5A5A5A]" : ""
                } ${idx === 0 ? "border-t" : ""}`}
              >
                {item.icon && <item.icon />}
                <span className={`mx-4 font-medium text-[#C4C4C4]`}>{item.title}</span>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
