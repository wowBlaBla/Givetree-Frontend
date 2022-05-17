import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import { useWallet } from "@solana/wallet-adapter-react";

import { AppNavLink } from "./AppNavLink";
import { GiveTreeLogo } from "./GiveTreeLogo";
import { UserIcon } from "./icons/UserIcon";
import { WalletButton } from "./wallet/WalletButton";
import { PlatformRoute } from "../configs/routes";

export const AppHeader = (): JSX.Element => {
  const { connected } = useWallet();

  return (
    <div className="fixed w-full bg-brand-black z-50 py-2 px-3">
      <div className="grid grid-cols-2 sm:grid-cols-4 w-full">
        <Link className="flex items-center" to={PlatformRoute.Home}>
          <GiveTreeLogo className="w-32 h-8 sm:h-12" />
        </Link>

        <div className="hidden col-span-2 sm:flex justify-center items-center w-full space-x-6 md:space-x-16 xl:space-x-24">
          <AppNavLink to={PlatformRoute.Home}>Home</AppNavLink>
          <AppNavLink to={PlatformRoute.CampaignListing}>Launchpad</AppNavLink>
          <AppNavLink to={PlatformRoute.CharityListing}>Impact Partners</AppNavLink>
        </div>

        <div className="flex justify-end w-full items-center space-x-3">
          {connected && (
            <UserIcon className="text-gray-500 hover:text-brand-orange-hover w-9 h-9 transition-hover select-none" />
          )}

          <WalletButton
            className={cx({
              "bg-brand-orange": !connected,
              "wallet-adapter-button-active": connected,
            })}
          />
        </div>
      </div>
    </div>
  );
};
