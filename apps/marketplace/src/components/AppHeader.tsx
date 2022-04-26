import React, { FC, ReactNode } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import cx from "classnames";
import { GiveTreeLogo } from "./GiveTreeLogo";
import { WalletMultiButton } from "./wallet/WalletMultiButton";
import { UserIcon } from "./icons/UserIcon";
import { Link, NavLink, useMatch, useResolvedPath } from "react-router-dom";
import { MarketplaceRoute } from "../configs/routes";

interface AppNavLink {
  to: MarketplaceRoute;
  children: ReactNode;
}

const AppNavLink: FC<AppNavLink> = ({ children, to }) => {
  const resolved = useResolvedPath(to);
  const isMatch = useMatch({ path: resolved.pathname, end: true });

  return (
    <NavLink
      to={to}
      className={cx("text-white text-lg hover:text-brand-orange-hover transition-hover", {
        "text-brand-orange-active": isMatch,
      })}
    >
      {children}
    </NavLink>
  );
};

export const AppHeader = () => {
  const { connected } = useWallet();

  return (
    <div className="fixed w-full bg-brand-black z-50">
      <div className="flex justify-between items-center mx-4 py-5">
        <Link to={MarketplaceRoute.Home}>
          <GiveTreeLogo className="w-32 h-8 sm:h-12" />
        </Link>

        <div className="hidden sm:block space-x-24">
          <AppNavLink to={MarketplaceRoute.Home}>Marketplace</AppNavLink>
          <AppNavLink to={MarketplaceRoute.CollectionListing}>Explore</AppNavLink>
          <AppNavLink to={MarketplaceRoute.ImpactPartnerListing}>
            Impact Partners
          </AppNavLink>
        </div>

        <div className="flex items-center space-x-3">
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
