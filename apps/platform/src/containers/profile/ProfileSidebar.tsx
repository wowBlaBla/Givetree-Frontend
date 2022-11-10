import { FC } from "react";
import { Link, useRoute } from "wouter";
import { PlatformRoute } from "../../configs/routes";
import avatar from "../../assets/images/upload-avatar.svg";
import { UserIcon } from "../../components/icons/profiles/UserIcon";
import { NFTIcon } from "../../components/icons/profiles/NFTIcon";
import { CollectionIcon } from "../../components/icons/profiles/CollectionIcon";
import { ListingIcon } from "../../components/icons/profiles/ListingIcon";
import { DonationIcon } from "../../components/icons/profiles/DonationIcon";
import { SettingIcon } from "../../components/icons/profiles/SettingIcon";
import { CreateIcon } from "../../components/icons/profiles/CreateIcon";
import { useAuth } from "../../context/AuthContext";

export type NavItem = {
  category: string;
  title: string;
  children?: NavItem[];
  icon?: React.FC;
  hasChild?: boolean;
  coming?: boolean;
};

const defaultNavs: NavItem[] = [
  {
    category: "home",
    title: "My profile",
    icon: UserIcon,
  },
  // {
  //   category: "wallets",
  //   title: "My wallets",
  //   icon: WalletIcon,
  // },
  {
    category: "nfts",
    title: "My NFTs",
    icon: NFTIcon,
  },
  {
    category: "collections",
    title: "My collections",
    icon: CollectionIcon,
    coming: true,
  },
  {
    category: "listings",
    title: "My listings",
    icon: ListingIcon,
    coming: true,
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
  // {
  //   category: "new-listing",
  //   title: "Create listing",
  //   icon: CreateIcon,
  // },
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
  const { authUser } = useAuth();

  return (
    <div
      className={`side-bar stick-side-bar ${
        visible ? "absolute" : "hidden lg:flex"
      } lg:sticky top-[80px] lg:top-0 left-0 flex-col w-full lg:min-w-[240px] lg:max-w-[240px] py-8 border-r border-base-content border-opacity-25 bg-mid-dark z-10`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <div className="flex flex-col items-center px-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {
          authUser?.user.profileImage ? 
          <img
            className="object-cover w-28 h-28 mx-2 rounded-full"
            src={authUser?.user.profileImage || avatar.src}
            alt="avatar"
          />
          :
          <div
            className="w-32 h-32 rounded-full bg-white bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${avatar.src})`}}
          />
        }

        <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 text-xs hover:underline">
          {authUser?.user.userName || ""}
        </h4>
      </div>
      <div className="flex flex-col flex-1 mt-6 nav-items">
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
                href={item.coming ? "#" : "/profile/" + item.category}
                key={`default-side-sub-${idx}`}
                onClick={() => setVisible && setVisible(false)}
              >
                <div
                  className={`relative flex items-center cursor-pointer px-4 py-3 border-b border-[#686868] ${
                    idx === 0 ? "border-t" : ""
                  } ${item.category == params?.category ? "bg-[#5A5A5A]" : ""}`}
                >
                  {item.icon && <item.icon />}
                  <span className={`mx-4 font-medium text-[#C4C4C4]`}>{item.title}</span>
                  {item.coming ? (
                    <div className="badge bg-[#BD00FF] border-0 text-white absolute py-3 text-[10px] right-2">
                      Coming Soon
                    </div>
                  ) : null}
                </div>
              </Link>
            )
          )}
        </div>
        {/* <span className="pl-[1.5rem] text-[20px] font-bold mt-8 mb-4">CREATE</span>
        <nav>
          {createNavs.map((item, idx) => (
            <Link
              className={`flex items-center p-2 transition-colors duration-300 transform`}
              key={idx}
              href="#"
              onClick={() => setVisible && setVisible(false)}
            >
              <div
                className={`relative flex items-center cursor-pointer px-4 py-2 border-b border-[#686868] ${
                  item.category == params?.category ? "bg-[#5A5A5A]" : ""
                } ${idx === 0 ? "border-t" : ""}`}
              >
                {item.icon && <item.icon />}
                <span className={`mx-4 font-medium text-[#C4C4C4]`}>{item.title}</span>
                <div className="badge badge-primary absolute py-3 text-[10px] right-2">Coming</div>
              </div>
            </Link>
          ))}
        </nav> */}
      </div>
    </div>
  );
};
