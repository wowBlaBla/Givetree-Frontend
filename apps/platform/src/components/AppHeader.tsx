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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleDropdown = () => {
    dispatch(openSidebar(!openSideMenu));

  };

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
          
          <div className="flex gap-2 items-center">
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
