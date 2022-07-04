import React, { FC, ReactElement, useState } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import { AppNavLink } from "./AppNavLink";
import { GiveTreeLogo } from "./GiveTreeLogo";
import { PlatformRoute } from "../configs/routes";
import { MenuIcon } from "./icons/MenuIcon";
import { ConnectWalletButton } from "./wallet/ConnectWalletButton";
import { CollectionIcon, GlobeIcon, HomeIcon } from "@heroicons/react/outline";
import { LaunchIcon } from "./icons/LaunchIcon";

interface AppHeaderNavLink {
  title: string;
  link: PlatformRoute;
  disabled?: boolean;
  icon: ReactElement;
}

const appHeaderNavItems: AppHeaderNavLink[] = [
  {
    title: "Home",
    link: PlatformRoute.Home,
    disabled: false,
    icon: <HomeIcon className="w-5 h-5" />,
  },
  {
    title: "Mints",
    link: PlatformRoute.CampaignListing,
    disabled: false,
    icon: <LaunchIcon className="w-5 h-5" />,
  },
  {
    title: "Marketplace",
    link: PlatformRoute.MarketplaceListing,
    disabled: true,
    icon: <CollectionIcon className="w-5 h-5" />,
  },
  {
    title: "Charities",
    link: PlatformRoute.CharityListing,
    disabled: false,
    icon: <GlobeIcon className="w-5 h-5" />,
  },
];

export const AppHeader: FC = () => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  const handleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <div className="fixed z-50 w-full py-2 bg-white border-b shadow-sm">
      <div className="grid w-full grid-cols-2 lg:grid-cols-4 px-3">
        <div className="flex items-center space-x-1 lg:space-x-0">
          <div className="relative cursor-pointer lg:hidden" onClick={handleDropdown}>
            <MenuIcon className="w-7 h-7" />
          </div>

          <Link className="flex items-center" to={PlatformRoute.Home}>
            <GiveTreeLogo className="w-32 h-8 lg:h-12 text-brand-black" withText />
          </Link>
        </div>

        {/* Desktop Navigation */}

        <div className="lg:flex items-center justify-center hidden w-full md:col-span-2 md:space-x-6 lg:space-x-16">
          {appHeaderNavItems.map((navItem, idx) => (
            <AppNavLink key={idx} href={navItem.link} disabled={navItem.disabled}>
              <span>{navItem.title}</span>
            </AppNavLink>
          ))}
        </div>

        {/* Wallet */}

        <div className="flex items-center justify-end flex-1 w-full">
          <ConnectWalletButton />
        </div>
      </div>

      {/* Mobile Navigation */}

      <div
        className={cx(
          "absolute h-screen mt-2 bg-white overflow-hidden duration-300 origin-left",
          {
            "w-48 shadow-lg border-r-2": openDropdown,
            "w-0": !openDropdown,
          }
        )}
      >
        <div className="absolute flex flex-col flex-1 h-screen px-5 mt-3 space-y-5 text-gray-500">
          {appHeaderNavItems.map((navItem, idx) => (
            <AppNavLink
              key={idx}
              href={navItem.link}
              disabled={navItem.disabled}
              onClick={handleDropdown}
            >
              <div className="flex items-center space-x-1">
                {navItem.icon}
                <span>{navItem.title}</span>
              </div>
            </AppNavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
