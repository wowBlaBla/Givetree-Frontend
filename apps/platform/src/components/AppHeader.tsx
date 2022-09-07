import React, { FC, ReactElement, ReactNode, useState, Fragment, useEffect } from "react";
import cx from "classnames";
import { Link, useRoute } from "wouter";
import { GiveTreeLogo } from "./GiveTreeLogo";
import { PlatformRoute } from "../configs/routes";
import { MenuIcon } from "./icons/MenuIcon";
import { /*CollectionIcon, GlobeIcon,*/ HomeIcon } from "@heroicons/react/outline";
import { LaunchIcon } from "./icons/LaunchIcon";
import { ChevronDownIcon, XIcon } from '@heroicons/react/solid'
import { SignButton } from "./SignButton";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../store/actions/auth.action";
import { IStore } from "../store/reducers/auth.reducer";
import { DropdownMenu } from "./DropdownMenu";
import { Menu, Transition } from "@headlessui/react";

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
        href: PlatformRoute.FundraiserDetails,
        disabled: false,
        icon: <HomeIcon className="w-5 h-5" />,
      },
      {
        title: "Charities",
        href: PlatformRoute.CharityListing,
        disabled: false,
        icon: <HomeIcon className="w-5 h-5" />,
      },
      {
        title: "Creators",
        href: PlatformRoute.CreatorListing,
        disabled: false,
        icon: <HomeIcon className="w-5 h-5" />,
      }
    ]
  },
  {
    title: "Create",
    href: PlatformRoute.Static,
    disabled: false,
    icon: <LaunchIcon className="w-5 h-5" />,
    childrens: undefined,
  },
  // {
  //   title: "SignIn",
  //   href: PlatformRoute.CampaignListing,
  //   disabled: false,
  //   icon: <LaunchIcon className="w-5 h-5" />,
  //   childrens: undefined,
  // },
  // {
  //   title: "SignUp",
  //   href: PlatformRoute.CampaignListing,
  //   disabled: false,
  //   icon: <LaunchIcon className="w-5 h-5" />,
  //   childrens: undefined,
  // },
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
        <>
          {
            !openSidebar ?
            <div className="dropdown dropdown-hover dropdown-end">
                <label
                  tabIndex={0}
                  className={cx(
                    "text-base font-medium cursor-pointer"
                  )}
                >{children}<ChevronDownIcon className="-mr-1 h-5 w-5 inline-block" aria-hidden="true" /></label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    {
                      list && list.map((item, idx) => {
                        return (
                          <li className="py-1" key={idx}>
                              <Link
                                href={item.href}
                                className={cx(
                                  // match ? 'bg-gray-100 text-gray-900 font-bold' : 
                                  'text-gray-700',
                                  'block px-4 py-4 text-base'
                                )}
                              >
                                {item.title}
                              </Link>
                          </li>
                        )
                      })
                    }
                </ul>
            </div>
            :
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="text-base font-medium hover:text-brand-orange transition-hover flex items-center">
                  {children}
                  <ChevronDownIcon className="-mr-1 ml-1 h-5 w-5 inline-block mt-1" aria-hidden="true" />
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
                              <Link
                                href={item.href}
                                className={cx(
                                  active ? 'bg-gray-100 text-gray-900 font-bold' : 'text-gray-700',
                                  'block px-4 py-4 text-base'
                                )}
                              >
                                {item.title}
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                      )
                    })
                  }
                </Menu.Items>
              </Transition>
            </Menu>
          }
        </>
      )}
    </div>
  );
};

export const AppHeader: FC = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const walletAddress = useSelector<IStore, string>((state) => state.auth.walletAddress);
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        // Set window width/height to state
        if (window.innerWidth > 1023) {
          setOpenSidebar(false);
        }
      }

      window.addEventListener('resize', handleResize);
      handleResize();
    }
  }, [])

  const handleDropdown = () => {
    setOpenSidebar(!openSidebar);
  };

  console.log("openSidebar", openSidebar);
  return (
    <div className="fixed z-50 w-full py-2 bg-white border-b shadow-sm">
      <div className="grid w-full grid-cols-2 px-3">
        <div className="flex items-center space-x-1 lg:space-x-0">
          
          <Link className="flex items-center cursor-pointer p-2" href={PlatformRoute.Home}>
            <a><GiveTreeLogo className="w-35 h-14-1/2 text-brand-black cursor-pointer" withText /></a>
          </Link>
        </div>

        {/* Wallet */}

        <div className="flex gap-10 justify-end items-center w-full">
          
          {/* Desktop Navigation */}

          <div className="hidden lg:flex justify-end items-center w-full gap-8">
            {appHeaderNavLinks.map((link, idx) => (
              <AppHeaderNavLink key={idx} list={link.childrens} href={link.href} onClick={() => link.href == PlatformRoute.Static ? ( walletAddress ? null : dispatch(openModal(true))) : null} disabled={link.disabled}>
                {link.title}
              </AppHeaderNavLink>
            ))}
          </div>
          <div className="flex gap-2 items-center">
            { walletAddress ? <DropdownMenu/> : <SignButton /> }

            <div className="relative cursor-pointer lg:hidden" onClick={handleDropdown}>
              <MenuIcon className="w-7 h-7" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className="sidebar"
      >
        <div
          className={cx(
            "fixed inset-0",
            {
              "hidden": !openSidebar
            }
          )}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)"}}
          onClick={() => setOpenSidebar(false)}
        />
        <div
          className={cx(
            "absolute h-screen duration-200 top-0 bg-white overflow-hidden origin-left border-t w-60 shadow-lg border-r-2 p-4",
            {
              "-translate-x-full": !openSidebar,
              "translate-x-0": openSidebar,
            }
          )}
        >
          <div className="text-right">
            <XIcon
              className="w-8 h-8 inline-block text-gray-600 cursor-pointer"
              onClick={handleDropdown}
            />
          </div>
          <div className="flex absolute flex-col flex-1 h-screen px-5 mt-3 space-y-5 text-gray-500">
            {appHeaderNavLinks.map((link, idx) => (
              <AppHeaderNavLink
                key={idx}
                href={link.href}
                disabled={link.disabled}
                list={link.childrens}
                onClick={() => link.href == PlatformRoute.Static ? dispatch(openModal(true)) : handleDropdown}
                openSidebar={openSidebar}
              >
                <div className="flex items-center space-x-1 cursor-pointer">
                  {link.icon}
                  <div>{link.title}</div>
                </div>
              </AppHeaderNavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
