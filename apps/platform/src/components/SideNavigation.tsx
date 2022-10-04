import HomeIcon from "../assets/images/home.png";
import ExploreIcon from "../assets/images/explore.png";
import CreateIcon from "../assets/images/create.png";
import AboutIcon from "../assets/images/about.png";

import React, { FC, ReactElement, useEffect, useRef, useState } from "react";
import cx from "classnames";
import { AppHeaderNavLink, MenuList, PlatformRoute } from "../configs/routes";
// import matcherType from "wouter/types/matcher";
import { Link, Match, MatcherFn, useLocation } from "wouter";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_USER, IStore } from "../store/reducers/auth.reducer";
import avatar from "../temp/images/campaigns/mulgakongz-collection.png";
import { openModal, openSidebar } from "../store/actions/auth.action";
import makeMatcher from "../utils/matcher";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      ElemBefore: React.ReactNode;
    }
  }
}

export const SideNavigation: FC = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useLocation();

  const [menu, setMenu] = React.useState<AppHeaderNavLink[]>([]);
  const [selectedMenuItem, setSelectedMenuItem] = React.useState<AppHeaderNavLink>();

  const authedUser = useSelector<IStore, AUTH_USER | undefined>(
    (state) => state.auth.authedUser
  );
  const openSideMenu = useSelector<IStore, boolean>(
    (state) => state.auth.openSidebarMenu
  );

  const handleDropdown = () => {
    dispatch(openSidebar(!openSideMenu));
  };

  const handleSelectMenuItem = (menuItem: AppHeaderNavLink | undefined) => () => {
    setSelectedMenuItem(menuItem);
  };

  useEffect(() => {
    setMenu(MenuList);
    setSelectedMenuItem(undefined);
  }, [openSideMenu]);

  useEffect(() => {
    if (selectedMenuItem) {
      if (selectedMenuItem.childrens) {
        setMenu(selectedMenuItem.childrens);
      }
    } else {
      setMenu(MenuList);
    }
  }, [selectedMenuItem]);

  return (
    <div
      className={cx("flex absolute z-50 top-20 bottom-0 xl:static w-full", {
        hidden: !openSideMenu,
      })}
    >
      <div className="scroll-none w-full bg-light-dark">
        <ul className="menu text-white text-t1">
          {selectedMenuItem ? (
            <li
              className="indicator w-full bg-deep-dark side-menu-item"
              onClick={handleSelectMenuItem(undefined)}
            >
              <span
                className={`indicator-item indicator-middle indicator-start p-0 left-[1.2rem]`}
              >
                <svg
                  className="w-3 h-3"
                  viewBox="0 0 100 185"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M76.9193 -3.05176e-05H92.3035C95.2727 -3.05176e-05 97.9803 1.71532 99.2572 4.39987C100.534 7.08441 100.142 10.2613 98.2572 12.5689L33.0127 92.3054L98.2572 172.05C100.142 174.35 100.526 177.526 99.2572 180.219C97.988 182.911 95.2727 184.611 92.3035 184.611H76.9193C74.6116 184.611 72.4271 183.572 70.9656 181.788L1.7365 97.1745C-0.578827 94.3361 -0.578827 90.267 1.7365 87.4286L70.9656 2.81528C72.4271 1.03841 74.6116 -3.05176e-05 76.9193 -3.05176e-05Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="font-bold hover:bg-transparent hover:text-menu uppercase pl-[2.5rem]">
                {selectedMenuItem.title}
              </span>
            </li>
          ) : null}
          {menu.map((menu, mIndex) =>
            menu.childrens ? (
              <li
                key={`top-menu-${mIndex}`}
                className="indicator w-full side-menu-item"
                onClick={handleSelectMenuItem(menu)}
              >
                <span
                  className={`indicator-item indicator-middle indicator-end p-0 right-[1.5rem]`}
                >
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 100 185"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.0807 184.611H7.69649C4.72733 184.611 2.0197 182.896 0.742808 180.211C-0.534084 177.526 -0.141785 174.35 1.74278 172.042L66.9873 92.3054L1.74278 12.5612C-0.141785 10.2613 -0.526392 7.08444 0.742808 4.3922C2.01201 1.69996 4.72733 0 7.69649 0H23.0807C25.3884 0 27.5729 1.03844 29.0344 2.82301L98.2635 87.4363C100.579 90.2747 100.579 94.3438 98.2635 97.1822L29.0344 181.796C27.5729 183.572 25.3884 184.611 23.0807 184.611Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span className="font-bold hover:bg-transparent hover:text-menu uppercase">
                  {menu.title}
                </span>
              </li>
            ) : (
              <li key={`top-menu-${mIndex}`} className="w-full" onClick={handleDropdown}>
                <Link
                  className="font-bold hover:bg-transparent hover:text-menu uppercase"
                  to={menu.href || ""}
                >
                  {menu.title}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};
