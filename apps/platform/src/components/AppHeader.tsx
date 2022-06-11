import React, { useState } from "react";
import cx from "classnames";
import { useMetaMask } from "metamask-react";
import { Link } from "react-router-dom";

import { AppNavLink } from "./AppNavLink";
import { GiveTreeLogo } from "./GiveTreeLogo";
import { UserIcon } from "./icons/UserIcon";
// import { WalletButton } from "./wallet/WalletButton";
import { PlatformRoute } from "../configs/routes";
import { MetaMaskStatus } from "../typed/enum/metaMaskStatus";
import { WalletButton } from "./wallet/WalletButton";
import { useWallet } from "@solana/wallet-adapter-react";
import { MenuIcon } from "./icons/MenuIcon";

export const AppHeader = (): JSX.Element => {
  const { connected } = useWallet();
  const { status } = useMetaMask();
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  const isWalletConnected = connected || status === MetaMaskStatus.Connected;

  const handleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <div className="fixed w-full bg-brand-black z-50 py-2">
      <div className="grid grid-cols-2 sm:grid-cols-4 w-full px-3">
        <div className="flex items-center space-x-1 sm:space-x-0">
          <div className="relative cursor-pointer sm:hidden" onClick={handleDropdown}>
            <MenuIcon className="w-7 h-7 text-white" />
          </div>

          <Link className="flex items-center" to={PlatformRoute.Home}>
            <GiveTreeLogo className="w-32 h-8 sm:h-12 text-white" withText />
          </Link>
        </div>

        <div className="hidden md:flex justify-center items-center col-span-2 w-full md:space-x-8 lg:space-x-16">
          <AppNavLink href={PlatformRoute.Home}>Home</AppNavLink>
          <AppNavLink href={PlatformRoute.CampaignListing}>Launchpad</AppNavLink>
          <AppNavLink href={PlatformRoute.CharityListing}>Impact Partners</AppNavLink>
        </div>

        <div
          className={cx("flex flex-1 justify-end items-center w-full", {
            "space-x-3": isWalletConnected,
          })}
        >
          {isWalletConnected && (
            <UserIcon className="text-gray-500 hover:text-white w-7 h-7 transition-hover select-none" />
          )}

          <WalletButton />
        </div>
      </div>

      <div
        className={cx(
          "absolute h-screen mt-2 bg-brand-black duration-300 overflow-hidden",
          {
            "w-56": openDropdown,
            "w-0": !openDropdown,
          }
        )}
      >
        <div className="flex absolute flex-1 flex-col h-screen space-y-5 mt-3 px-5 origin-left duration-300">
          <AppNavLink href={PlatformRoute.Home} onClick={handleDropdown}>
            Home
          </AppNavLink>
          <AppNavLink href={PlatformRoute.CampaignListing} onClick={handleDropdown}>
            Launchpad
          </AppNavLink>
          <AppNavLink href={PlatformRoute.CharityListing} onClick={handleDropdown}>
            Impact Partners
          </AppNavLink>
        </div>
      </div>
    </div>
  );
};
