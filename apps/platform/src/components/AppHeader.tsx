import React, { FC, ReactElement, ReactNode, useState, Fragment } from "react";
import cx from "classnames";
import { Link, useRoute } from "wouter";
import { Menu, Transition } from '@headlessui/react'
import { GiveTreeLogo } from "./GiveTreeLogo";
import { PlatformRoute } from "../configs/routes";
import { MenuIcon } from "./icons/MenuIcon";
import { ConnectWalletButton } from "./wallet/ConnectWalletButton";
import { /*CollectionIcon, GlobeIcon,*/ HomeIcon } from "@heroicons/react/outline";
import { LaunchIcon } from "./icons/LaunchIcon";
import { ChevronDownIcon } from '@heroicons/react/solid'

interface Dropdown {
  title: string;
  href: PlatformRoute;
  disabled?: boolean;
  icon: ReactElement;
}

interface AppHeaderNavLink {
  title: string;
  href: PlatformRoute;
  disabled?: boolean;
  icon: ReactElement;
  childrens: Array<Dropdown> | undefined;
  openSidebar?: boolean;
}

const appHeaderNavLinks: AppHeaderNavLink[] = [
  {
    title: "Explore",
    href: PlatformRoute.Home,
    disabled: true,
    icon: <HomeIcon className="w-5 h-5" />,
    childrens: [
      {
        title: "NFT Fundraisers",
        href: PlatformRoute.Home,
        disabled: false,
        icon: <HomeIcon className="w-5 h-5" />,
      },
      {
        title: "Charities",
        href: PlatformRoute.Home,
        disabled: false,
        icon: <HomeIcon className="w-5 h-5" />,
      },
      {
        title: "Creators",
        href: PlatformRoute.Home,
        disabled: false,
        icon: <HomeIcon className="w-5 h-5" />,
      }
    ]
  },
  {
    title: "Create",
    href: PlatformRoute.CampaignListing,
    disabled: false,
    icon: <LaunchIcon className="w-5 h-5" />,
    childrens: undefined,
  },
];

interface AppHeaderNavLinkProps {
  children: ReactNode;
  list: Array<Dropdown> | undefined;
  disabled?: boolean;
  href: PlatformRoute;
  onClick?: () => void;
  openSidebar?: boolean;
}

const AppHeaderNavLink: FC<AppHeaderNavLinkProps> = ({
  children,
  disabled,
  list,
  href,
  onClick,
  openSidebar
}) => {
  const [match, _params] = useRoute(href);

  return (
    <div className="text-gray-800">
      {!disabled ? (
        <Link
          className={cx(
            "text-base font-medium hover:text-brand-orange transition-hover",
            {
              "text-brand-orange": match,
            }
          )}
          href={href}
          onClick={onClick}
        >
          {children}
        </Link>
      ) : (
        // <div
        //   className="text-base font-medium text-gray-400 cursor-default tooltip tooltip-bottom whitespace-nowrap"
        //   data-tip="Coming soon"
        // >
        //   {children}
        // </div>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="text-base font-medium hover:text-brand-orange transition-hover ">
              <span>{children}</span>
              <ChevronDownIcon className="-mr-1 ml-1 h-5 w-5 inline-block" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              className={`origin-top-right ${!openSidebar ? "absolute ring-1 ring-black ring-opacity-5 shadow-lg w-56 " : "relative w-42"} right-0 mt-2 rounded-md bg-white divide-y divide-gray-100 focus:outline-none mt-6`}
            >
              {
                list && list.map((item, idx) => {
                  return (
                    <div className="py-1" key={idx}>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={cx(
                              active ? 'bg-gray-100 text-gray-900 font-bold' : 'text-gray-700',
                              'block px-4 py-4 text-base'
                            )}
                          >
                            {item.title}
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  )
                })
              }
            </Menu.Items>
          </Transition>
        </Menu>
      )}
    </div>
  );
};

export const AppHeader: FC = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const handleDropdown = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div className="fixed z-50 w-full py-2 bg-white border-b shadow-sm">
      <div className="grid w-full grid-cols-2 px-3">
        <div className="flex items-center space-x-1 lg:space-x-0">
          <div className="relative cursor-pointer lg:hidden" onClick={handleDropdown}>
            <MenuIcon className="w-7 h-7" />
          </div>

          <Link className="flex items-center cursor-pointer p-2" href={PlatformRoute.Home}>
            <a><GiveTreeLogo className="w-35 h-14-1/2 text-brand-black cursor-pointer" withText /></a>
          </Link>
        </div>

        {/* Wallet */}

        <div className="flex gap-10 justify-end items-center w-full">
          
          {/* Desktop Navigation */}

          <div className="hidden lg:flex justify-end items-center w-full gap-8">
            {appHeaderNavLinks.map((link, idx) => (
              <AppHeaderNavLink key={idx} list={link.childrens} href={link.href} disabled={link.disabled}>
                {link.title}
              </AppHeaderNavLink>
            ))}
          </div>
          <ConnectWalletButton />
        </div>
      </div>

      {/* Mobile Navigation */}

      <div
        className={cx(
          "absolute h-screen mt-2 bg-white overflow-hidden duration-300 origin-left",
          {
            "w-48 shadow-lg border-r-2": openSidebar,
            "w-0": !openSidebar,
          }
        )}
      >
        <div className="flex absolute flex-col flex-1 h-screen px-5 mt-3 space-y-5 text-gray-500">
          {appHeaderNavLinks.map((link, idx) => (
            <AppHeaderNavLink
              key={idx}
              href={link.href}
              disabled={link.disabled}
              list={link.childrens}
              onClick={handleDropdown}
              openSidebar={openSidebar}
            >
              <div className="flex items-center space-x-1">
                {link.icon}
                <div>{link.title}</div>
              </div>
            </AppHeaderNavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
