import React, { FC } from "react";
import { Link } from "wouter";
import { GiveTreeLogo } from "./GiveTreeLogo";
import { PlatformRoute } from "../configs/routes";
import { MenuIcon } from "./icons/MenuIcon";
import { DropdownMenu } from "./DropdownMenu";
import { MenuBar } from "./MenuBar";
import { useAuth } from "../context/AuthContext";
import { useAppContext } from "../context/AppContext";

export const AppHeader: FC = () => {
  const { openSideBar, setOpenSideBar } = useAppContext();

  const { isAuth } = useAuth();

  const handleDropdown = () => {
    setOpenSideBar(!openSideBar);
  };

  return (
    <div className="flex sticky top-0 z-50 w-full h-[5rem] bg-white dark:bg-deep-dark border-b border-base-content border-opacity-25 shadow-sm z-[100]">
      <div className="grid w-full grid-cols-2 px-4">
        <div className="flex items-center space-x-1 lg:space-x-0">
          <Link className="flex items-center cursor-pointer p-2" href={"/explore/home"}>
            <a>
              <GiveTreeLogo
                className="w-35 text-brand-black dark:text-white cursor-pointer"
                withText
              />
            </a>
          </Link>

          {/* <MenuBar horizontal /> */}
        </div>

        {/* Wallet */}

        <div className="flex justify-end items-center w-full">
          <div className="header-right flex items-center gap-2">
            <div className="relative cursor-pointer menu-icon" onClick={handleDropdown}>
              <MenuIcon className="w-7 h-7" />
            </div>

            {isAuth ? (
              <DropdownMenu />
            ) : (
              <div className="header-sign flex items-center">
                <Link
                  className="btn w-24 h-8 min-h-0 bg-[#D9D9D9]/10 border border-[#6B6B6B]/10 text-white font-bold rounded-2xl-1 mr-2 p-0"
                  href={PlatformRoute.Register}
                >
                  Sign up
                </Link>
                <Link
                  className="btn w-24 h-8 min-h-0 bg-[#D9D9D9]/10 border border-[#6B6B6B]/10 text-white font-bold rounded-2xl-1 p-0"
                  href={PlatformRoute.Login}
                >
                  Sign in
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
