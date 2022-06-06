import React, { FC } from "react";
import cx from "classnames";
import { AppNavLink } from "./AppNavLink";
import { PlatformRoute } from "../configs/routes";

interface AppSideNavProps {
  className?: string;
}

export const AppSideNav: FC<AppSideNavProps> = ({ className }) => {
  return (
    <div className={cx("w-1/7 bg-brand-black z-50", className)}>
      <div className="flex flex-col space-y-5 mt-5 px-5">
        <AppNavLink href={PlatformRoute.Home}>
          <span>Home</span>
        </AppNavLink>
        <AppNavLink href={PlatformRoute.CampaignListing}>
          <span>Launchpad</span>
        </AppNavLink>
        <AppNavLink href={PlatformRoute.CharityListing}>
          <span>Impact Partners</span>
        </AppNavLink>
      </div>
    </div>
  );
};
