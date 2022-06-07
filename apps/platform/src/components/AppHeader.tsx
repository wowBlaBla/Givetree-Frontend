import React from "react";
import cx from "classnames";
import { useMetaMask } from "metamask-react";
import { Link } from "react-router-dom";
import { useWallet } from "@solana/wallet-adapter-react";

import { AppNavLink } from "./AppNavLink";
import { GiveTreeLogo } from "./GiveTreeLogo";
import { UserIcon } from "./icons/UserIcon";
import { WalletButton } from "./wallet/WalletButton";
import { PlatformRoute } from "../configs/routes";
import { MetaMaskStatus } from "../typed/enum/metaMaskStatus";

export const AppHeader = (): JSX.Element => {
  const { connected } = useWallet();
  const { status } = useMetaMask();

  return (
    <div className="fixed w-full bg-brand-black z-50 py-2 px-3">
      <div className="grid grid-cols-2 sm:grid-cols-4 w-full">
        <Link className="flex items-center" to={PlatformRoute.Home}>
          <GiveTreeLogo className="w-32 h-8 sm:h-12 text-white" withText />
        </Link>

        <div className="hidden md:flex justify-center items-center col-span-2 w-full md:space-x-8 lg:space-x-16">
          <AppNavLink href={PlatformRoute.Home}>Home</AppNavLink>
          <AppNavLink href={PlatformRoute.CampaignListing}>Launchpad</AppNavLink>
          <AppNavLink href={PlatformRoute.CharityListing}>Impact Partners</AppNavLink>
        </div>

        <div className="flex justify-end w-full items-center space-x-3">
          {(connected || status === MetaMaskStatus.Connected) && (
            <UserIcon className="text-gray-500 hover:text-white w-7 h-7 transition-hover select-none" />
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
