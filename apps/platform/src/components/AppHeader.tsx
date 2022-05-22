import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import { useWallet } from "@solana/wallet-adapter-react";
import { useMetaMask } from "metamask-react";

import { AppNavLink } from "./AppNavLink";
import { GiveTreeLogo } from "./GiveTreeLogo";
import { UserIcon } from "./icons/UserIcon";
import { WalletButton } from "./wallet/WalletButton";
import { PlatformRoute } from "../configs/routes";
import { MetaMaskStatus } from "../typed/enum/metaMaskStatus";
import { MenuIcon } from "./icons/MenuIcon";

export const AppHeader = (): JSX.Element => {
  const { connected } = useWallet();
  const { status } = useMetaMask();

  return (
    <div className="fixed w-full p-3 bg-brand-black z-50">
      <div className="grid grid-cols-2 md:grid-cols-3">
        <div className="flex items-center space-x-3 md:space-x-0">
          <div className="inline-block md:hidden">
            <MenuIcon className="w-7 h-7 text-white" />
          </div>

          <Link className="flex items-center" to={PlatformRoute.Home}>
            <GiveTreeLogo className="w-32 h-8 sm:h-12" />
          </Link>
        </div>

        <div className="hidden md:flex justify-center items-center w-full md:space-x-8 lg:space-x-16">
          <AppNavLink to={PlatformRoute.Home}>Home</AppNavLink>
          <AppNavLink to={PlatformRoute.CampaignListing}>Launchpad</AppNavLink>
          <AppNavLink to={PlatformRoute.CharityListing}>Impact Partners</AppNavLink>
        </div>

        <div className="flex justify-end w-full items-center space-x-3">
          {(connected || status === MetaMaskStatus.Connected) && (
            <UserIcon className="text-gray-500 hover:text-brand-orange-hover w-9 h-9 transition-hover select-none" />
          )}

          <WalletButton
            className={cx({
              "bg-brand-orange": status !== MetaMaskStatus.Connected && !connected,
              "wallet-adapter-button-active":
                connected || status === MetaMaskStatus.Connected,
            })}
          />
        </div>
      </div>
    </div>
  );
};
