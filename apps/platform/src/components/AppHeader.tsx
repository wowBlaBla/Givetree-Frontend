import React, { FC, useEffect } from "react";
import { Link } from "wouter";
import { GiveTreeLogo } from "./GiveTreeLogo";
import { PlatformRoute } from "../configs/routes";
import { MenuIcon } from "./icons/MenuIcon";
import { SignButton } from "./SignButton";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_USER, IStore } from "../store/reducers/auth.reducer";
import { DropdownMenu } from "./DropdownMenu";
import { openSidebar } from "../store/actions/auth.action";
import { MenuBar } from "./MenuBar";

export const AppHeader: FC = () => {
  const dispatch = useDispatch();
  const authedUser = useSelector<IStore, AUTH_USER | undefined>(
    (state) => state.auth.authedUser
  );
  const openSideMenu = useSelector<IStore, boolean>(
    (state) => state.auth.openSidebarMenu
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        // Set window width/height to state
        if (window.innerWidth > 960) {
          dispatch(openSidebar(false));
        }
      }

      window.addEventListener("resize", handleResize);
      handleResize();
    }

    // if (localStorage.theme == "dark") {
    document.documentElement.classList.add("dark");
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.theme = "dark";
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDropdown = () => {
    dispatch(openSidebar(!openSideMenu));
  };

  const toggleDarkMode = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.remove("dark");
      document.documentElement.removeAttribute("data-theme");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.theme = "dark";
    }
  };

  return (
    <div className="flex sticky top-0 z-50 w-full h-[5rem] bg-white dark:bg-deep-dark border-b border-base-content border-opacity-25 shadow-sm">
      <div className="grid w-full grid-cols-2 px-4">
        <div className="flex items-center space-x-1 lg:space-x-0">
          <Link
            className="flex items-center cursor-pointer p-2"
            href={PlatformRoute.Home}
          >
            <a>
              <GiveTreeLogo
                className="w-35 text-brand-black dark:text-white cursor-pointer"
                withText
              />
            </a>
          </Link>

          <MenuBar horizontal />
        </div>

        {/* Wallet */}

        <div className="flex gap-10 justify-end items-center w-full">
          <div className="header-right flex gap-4 items-center">
            {/* <div className="relative cursor-pointer" onClick={toggleDarkMode}>
              <SunIcon className="w-7 h-7 dark:hidden" />
              <MoonIcon className="w-7 h-7 hidden dark:text-white dark:inline-block" />
            </div> */}

            {authedUser ? <DropdownMenu /> : <SignButton className="w-24 h-8"/>}
          </div>
          <div
            className="relative cursor-pointer mr-2 menu-icon"
            onClick={handleDropdown}
          >
            <MenuIcon className="w-7 h-7" />
            {/* {openSideMenu && <MenuBar className="absolute bg-deep-dark"/>} */}
          </div>
        </div>
      </div>
    </div>
  );
};
