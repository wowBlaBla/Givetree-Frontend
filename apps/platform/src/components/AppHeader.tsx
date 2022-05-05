import React, { FC, ReactNode } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import cx from "classnames";
import { GiveTreeLogo } from "./GiveTreeLogo";
import { WalletMultiButton } from "./wallet/WalletMultiButton";
import { UserIcon } from "./icons/UserIcon";
import { Link, NavLink, useMatch, useResolvedPath } from "react-router-dom";
import { PlatformRoute } from "../configs/routes";

interface AppNavLink {
  to: PlatformRoute;
  children: ReactNode;
}

const AppNavLink: FC<AppNavLink> = ({ children, to }) => {
  const resolved = useResolvedPath(to);
  const isMatch = useMatch({ path: resolved.pathname, end: true });

  return (
    <NavLink
      to={to}
      className={cx(
        "text-white lg:text-lg hover:text-brand-orange-hover transition-hover",
        {
          "text-brand-orange-active": isMatch,
        }
      )}
    >
      {children}
    </NavLink>
  );
};

export const AppHeader = () => {
  const { connected } = useWallet();

  return (
    <div className="fixed w-full bg-brand-black z-50 py-2 px-3">
      <div className="grid grid-cols-2 sm:grid-cols-4 w-full">
        <Link className="flex items-center" to={PlatformRoute.Home}>
          <GiveTreeLogo className="w-32 h-8 sm:h-12" />
        </Link>

        <div className="hidden col-span-2 sm:flex justify-center items-center w-full space-x-5 xl:space-x-24">
          <AppNavLink to={PlatformRoute.Home}>Home</AppNavLink>
          <AppNavLink to={PlatformRoute.CampaignListing}>Launchpad</AppNavLink>
          <AppNavLink to={PlatformRoute.CharityListing}>Impact Partners</AppNavLink>
        </div>

        <div className="flex justify-end w-full items-center space-x-3">
          {connected && (
            <UserIcon className="text-gray-500 hover:text-brand-orange-hover w-9 h-9 transition-hover select-none" />
          )}

          <WalletMultiButton
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
