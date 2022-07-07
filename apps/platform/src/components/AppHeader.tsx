import React, { FC, ReactElement, ReactNode, useState } from "react";
import cx from "classnames";
import { Link, useRoute } from "wouter";
import { GiveTreeLogo } from "./GiveTreeLogo";
import { PlatformRoute } from "../configs/routes";
import { MenuIcon } from "./icons/MenuIcon";
import { ConnectWalletButton } from "./wallet/ConnectWalletButton";
import { CollectionIcon, GlobeIcon, HomeIcon } from "@heroicons/react/outline";
import { LaunchIcon } from "./icons/LaunchIcon";

interface AppHeaderNavLink {
  title: string;
  href: PlatformRoute;
  disabled?: boolean;
  icon: ReactElement;
}

const appHeaderNavLinks: AppHeaderNavLink[] = [
  {
    title: "Home",
    href: PlatformRoute.Home,
    disabled: false,
    icon: <HomeIcon className="w-5 h-5" />,
  },
  {
    title: "Mints",
    href: PlatformRoute.CampaignListing,
    disabled: false,
    icon: <LaunchIcon className="w-5 h-5" />,
  },
  {
    title: "Marketplace",
    href: PlatformRoute.MarketplaceListing,
    disabled: true,
    icon: <CollectionIcon className="w-5 h-5" />,
  },
  {
    title: "Charities",
    href: PlatformRoute.CharityListing,
    disabled: false,
    icon: <GlobeIcon className="w-5 h-5" />,
  },
];

interface AppHeaderNavLinkProps {
  children: ReactNode;
  disabled?: boolean;
  href: PlatformRoute;
  onClick?: () => void;
}

const AppHeaderNavLink: FC<AppHeaderNavLinkProps> = ({
  children,
  disabled,
  href,
  onClick,
}) => {
  const [match, _params] = useRoute(href);

  return (
    <>
      {!disabled ? (
        <Link
          className={cx(
            "text-base font-medium hover:text-brand-orange transition-hover",
            {
              "text-brand-orange": match,
              "text-gray-800": !match,
            }
          )}
          href={href}
          onClick={onClick}
        >
          {children}
        </Link>
      ) : (
        <div
          className="text-base font-medium text-gray-400 cursor-default tooltip tooltip-bottom whitespace-nowrap"
          data-tip="Coming soon"
        >
          {children}
        </div>
      )}
    </>
  );
};

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

          <Link className="flex items-center cursor-pointer" to={PlatformRoute.Home}>
            <GiveTreeLogo className="w-32 h-8 lg:h-12 text-brand-black" withText />
          </Link>
        </div>

        {/* Desktop Navigation */}

        <div className="hidden lg:flex justify-center items-center w-full md:col-span-2 md:space-x-6 lg:space-x-16">
          {appHeaderNavLinks.map((link, idx) => (
            <AppHeaderNavLink key={idx} href={link.href} disabled={link.disabled}>
              {link.title}
            </AppHeaderNavLink>
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
        <div className="flex absolute flex-col flex-1 h-screen px-5 mt-3 space-y-5 text-gray-500">
          {appHeaderNavLinks.map((link, idx) => (
            <AppHeaderNavLink
              key={idx}
              href={link.href}
              disabled={link.disabled}
              onClick={handleDropdown}
            >
              <div className="flex items-center space-x-1">
                {link.icon}
                <span>{link.title}</span>
              </div>
            </AppHeaderNavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
