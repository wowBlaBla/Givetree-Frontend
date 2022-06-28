import React, { FC, useState } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import { AppNavLink } from "./AppNavLink";
import { GiveTreeLogo } from "./GiveTreeLogo";
import { PlatformRoute } from "../configs/routes";
import { MenuIcon } from "./icons/MenuIcon";
import { WalletButton } from "./wallet/WalletButton";

interface AppHeaderNavLink {
  title: string;
  link: PlatformRoute;
}

const appHeaderNavItems: AppHeaderNavLink[] = [
  {
    title: "Home",
    link: PlatformRoute.Home,
  },
  {
    title: "Mints",
    link: PlatformRoute.CampaignListing,
  },
  {
    title: "Marketplace",
    link: PlatformRoute.MarketplaceListing,
  },
  {
    title: "Charities",
    link: PlatformRoute.CharityListing,
  },
];

export const AppHeader: FC = () => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  const handleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <div className="fixed w-full py-2 bg-white border-b-2 shadow-lg z-50">
      <div className="grid grid-cols-2 md:grid-cols-4 w-full px-3">
        <div className="flex items-center space-x-1 md:space-x-0">
          <div className="relative cursor-pointer md:hidden" onClick={handleDropdown}>
            <MenuIcon className="w-7 h-7" />
          </div>

          <Link className="flex items-center" to={PlatformRoute.Home}>
            <GiveTreeLogo className="w-32 h-8 md:h-12 text-brand-black" withText />
          </Link>
        </div>

        {/* Desktop Navigation */}

        <div className="hidden md:flex justify-center items-center col-span-2 w-full md:space-x-8 lg:space-x-16 text-gray-500">
          {appHeaderNavItems.map((navItem, idx) => (
            <AppNavLink key={idx} href={navItem.link}>
              <span>{navItem.title}</span>
            </AppNavLink>
          ))}
        </div>

        {/* Wallet */}

        <div className="flex flex-1 justify-end items-center w-full">
          <WalletButton />
        </div>
      </div>

      {/* Mobile Navigation */}

      <div
        className={cx("absolute h-screen mt-2 bg-white duration-300 overflow-hidden", {
          "w-48": openDropdown,
          "w-0": !openDropdown,
        })}
      >
        <div className="flex absolute flex-1 flex-col h-screen space-y-5 mt-3 px-5 text-gray-500 origin-left duration-300">
          {appHeaderNavItems.map((navItem, idx) => (
            <AppNavLink key={idx} href={navItem.link}>
              <span>{navItem.title}</span>
            </AppNavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
