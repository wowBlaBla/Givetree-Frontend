/* eslint-disable jsx-a11y/click-events-have-key-events */
import { HomeIcon, XIcon } from "@heroicons/react/outline";
import React, { FC, ReactElement, useEffect, useRef, useState } from "react";
import cx from "classnames";
import { PlatformRoute } from "../configs/routes";
import { LaunchIcon } from "./icons/LaunchIcon";
import { Link, useLocation } from "wouter";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../store/reducers/auth.reducer";
import avatar from "../temp/images/campaigns/mulgakongz-collection.png";
import { openModal } from "../store/actions/auth.action";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      ElemBefore: React.ReactNode;
    }
  }
}

export type NavItemProps = {
  title: string;
  itemId: string;
  // disabled?: boolean;
  elemBefore?: React.FC<unknown>;
  subNav?: NavItemProps[];
};

export type SideNavigationProps = {
  items: NavItemProps[];
  activeItemId: string;
  onSelect?: ({ itemId }: { itemId: string }) => void;
};

interface Dropdown {
  title: string;
  href: string;
  disabled?: boolean;
  icon: ReactElement;
  onClick?: () => void;
}

interface AppHeaderNavLink {
  title: string;
  href: string;
  disabled?: boolean;
  icon: ReactElement;
  childrens?: Array<Dropdown>;
  iconColor?: string;
  openSidebar?: boolean;
}

const list: AppHeaderNavLink[] = [
  {
    title: "Home",
    href: PlatformRoute.Home,
    disabled: false,
    icon: <LaunchIcon className="w-5 h-5" />,
    childrens: undefined,
    iconColor: "bg-sky-500",
  },
  {
    title: "Explore",
    href: PlatformRoute.Static,
    disabled: true,
    icon: <HomeIcon className="w-5 h-5" />,
    iconColor: "bg-orange-500",
    childrens: [
      {
        title: "NFT Fundraisers",
        href: PlatformRoute.FundraiserDetails,
        disabled: false,
        icon: <HomeIcon className="w-5 h-5" />,
      },
      {
        title: "Charities",
        href: PlatformRoute.CharityListing,
        disabled: false,
        icon: <HomeIcon className="w-5 h-5" />,
      },
      {
        title: "Creators",
        href: PlatformRoute.CreatorListing,
        disabled: false,
        icon: <HomeIcon className="w-5 h-5" />,
      }
    ]
  },
  {
    title: "Create",
    href: PlatformRoute.Static,
    disabled: false,
    icon: <LaunchIcon className="w-5 h-5" />,
    iconColor: "bg-red-500",
    childrens: undefined,
  },
  {
    title: "About",
    href: PlatformRoute.Static,
    disabled: false,
    icon: <LaunchIcon className="w-5 h-5" />,
    iconColor: "bg-yellow-500",
    childrens: undefined,
  },
];

export const SideNavigation: FC = () => {

  const dispatch = useDispatch();
  const [,setLocation] = useLocation();

  const [appHeaderNavLinks, setHeaderNavLinks] = useState<AppHeaderNavLink[]>(list);
  const walletAddress = useSelector<IStore, string>((state) => state.auth.walletAddress);
  const openSideMenu = useSelector<IStore, boolean>((state) => state.auth.openSidebarMenu);
  const prevAddy = usePrevious(walletAddress);

  useEffect(() => {
    if (prevAddy != walletAddress) {
      const _list:AppHeaderNavLink[] = [...appHeaderNavLinks];
      if (walletAddress)
        _list.push({
          title: "Profile",
          href: "/profile/creator/home",
          disabled: false,
          icon: <LaunchIcon className="w-5 h-5" />,
          iconColor: "",
        });
      else _list.pop();
      setHeaderNavLinks(_list)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [walletAddress])

  return (
    <>
      <div
        className={
          cx(
            "vertical-navbar",
            {
              "hidden": !openSideMenu
            }
          )
        }
      >
        {
          appHeaderNavLinks.map((item, idx) => (
            <div
              className="nav-item px-2"
              key={idx}
              onClick={
                () => item.title == 'Create' && item.href == PlatformRoute.Static ?
                  ( walletAddress ? setLocation('/profile/creator/mint') : dispatch(openModal(true))) : setLocation(item.href)
              }
            >
              <div
                className={`w-12 h-12 rounded-full bg-cover ${item.iconColor}`}
                style={
                  walletAddress && item.title == "Profile" ? {
                    backgroundImage: `url(${avatar.src})`
                  }: {}
                }
              />
              <p className="text-center text-xs text-black">{item.title}</p>
              {
                item.childrens && (
                  <div className="extra-panel hidden">
                    <div
                      className={cx(
                        "absolute h-screen duration-200 bottom-0 left-[81px] bg-white overflow-hidden origin-left w-60 shadow-lg border-r border-t p-4",
                        {
                          "-translate-x-full": !true,
                          "translate-x-0": false,
                        }
                      )}
                    >
                      <div className="text-right">
                        <XIcon
                          className="w-8 h-8 inline-block text-gray-600 cursor-pointer"
                        />
                      </div>
                      <div className="flex absolute flex-col flex-1 h-screen px-5 mt-3 space-y-5 text-gray-500">
                        {
                          item.childrens.map((itemt, index) => (
                            <Link href={itemt.href} key={index} className="py-4 px-6 hover:bg-slate-200" onClick={itemt.onClick}>{itemt.title}</Link>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
          ))
        }
      </div>
    </>
  )
};

function usePrevious(value:string) {
  const ref = useRef('');
  useEffect(() => {
    ref.current = value;
  },[value]);
  return ref.current;
}