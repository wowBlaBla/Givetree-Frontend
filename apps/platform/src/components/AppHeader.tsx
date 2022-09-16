import React, { FC, useEffect } from "react";
import { Link } from "wouter";
import { GiveTreeLogo } from "./GiveTreeLogo";
import { PlatformRoute } from "../configs/routes";
import { MenuIcon } from "./icons/MenuIcon";
import { SignButton } from "./SignButton";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../store/reducers/auth.reducer";
import { DropdownMenu } from "./DropdownMenu";
import { openSidebar } from "../store/actions/auth.action";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";

export const AppHeader: FC = () => {
  const dispatch = useDispatch();
  const walletAddress = useSelector<IStore, string>((state) => state.auth.walletAddress);
  const openSideMenu = useSelector<IStore, boolean>((state) => state.auth.openSidebarMenu);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        // Set window width/height to state
        if (window.innerWidth > 1023) {
          dispatch(openSidebar(true));
        }
        else dispatch(openSidebar(false));
      }

      window.addEventListener('resize', handleResize);
      handleResize();
    }
    
    if (localStorage.theme == 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.theme = 'dark';
    } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleDropdown = () => {
    dispatch(openSidebar(!openSideMenu));
  };

  const toggleDarkMode = () => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.remove('dark');
      document.documentElement.removeAttribute("data-theme");
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.theme = 'dark';
    }
  }

  return (
    <div className="sticky top-0 z-50 w-full py-2 bg-white dark:bg-deep-dark border-b dark:border-slate-500 shadow-sm">
      <div className="grid w-full grid-cols-2 px-3">
        <div className="flex items-center space-x-1 lg:space-x-0">
          
          <Link className="flex items-center cursor-pointer p-2" href={PlatformRoute.Home}>
            <a><GiveTreeLogo className="w-35 h-14-1/2 text-brand-black dark:text-white cursor-pointer" withText /></a>
          </Link>
        </div>

        {/* Wallet */}

        <div className="flex gap-10 justify-end items-center w-full">
          
          <div className="flex gap-4 items-center">
            <div className="relative cursor-pointer" onClick={toggleDarkMode}>
              <SunIcon className="w-7 h-7 dark:hidden" />
              <MoonIcon className="w-7 h-7 hidden dark:text-white dark:inline-block"/>
            </div>
  
            { walletAddress ? <DropdownMenu/> : <SignButton /> }

            <div className="relative cursor-pointer lg:hidden" onClick={handleDropdown}>
              <MenuIcon className="w-7 h-7" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
