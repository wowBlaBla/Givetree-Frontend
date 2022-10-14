import React, { FC } from "react";
import { MenuList } from "../configs/routes";
import cx from "classnames";
import { Link } from "wouter";

interface MenuBarProps extends React.HTMLAttributes<HTMLElement> {
  horizontal?: boolean;
}

export const MenuBar: FC<MenuBarProps> = ({ className, horizontal }) => {
  return (
    <ul
      className={cx(
        className,
        `menu ${horizontal ? "menu-horizontal" : ""} text-white text-t1`
      )}
    >
      {MenuList.map((menu, mIndex) => (
        <li
          key={`top-menu-${mIndex}`}
          className={`indicator ${horizontal ? "" : "w-[200px]"}`}
        >
          {menu.childrens ? (
            <>
              <span className={`indicator-item indicator-middle indicator-end p-0`}>
                {horizontal ? (
                  <svg
                    className="w-3 h-3 ml-1"
                    viewBox="0 0 185 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-3.05176e-05 23.0807V7.69649C-3.05176e-05 4.72733 1.71532 2.0197 4.39987 0.742808C7.08441 -0.534084 10.2613 -0.141785 12.5689 1.74278L92.3054 66.9873L172.05 1.74278C174.35 -0.141785 177.526 -0.526392 180.219 0.742808C182.911 2.01201 184.611 4.72733 184.611 7.69649V23.0807C184.611 25.3884 183.572 27.5729 181.788 29.0344L97.1745 98.2635C94.3361 100.579 90.267 100.579 87.4286 98.2635L2.81528 29.0344C1.03841 27.5729 -3.05176e-05 25.3884 -3.05176e-05 23.0807Z"
                      fill="white"
                    />
                  </svg>
                ) : (
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
                )}
              </span>
              {menu.href ? (
                <Link
                  className="font-bold hover:bg-transparent focus:bg-transparent hover:text-menu"
                  to={menu.href || ""}
                >
                  {menu.title}
                </Link>
              ) : (
                <span className="font-bold hover:bg-transparent focus:bg-transparent">{menu.title}</span>
              )}
              <ul className="bg-deep-dark top-sub-menu">
                {menu.childrens.map((subMenu, sIndex) => (
                  <li key={`top-sub-menu-${sIndex}`}>
                    <Link
                      to={subMenu.href || ""}
                      className="hover:bg-transparent focus:bg-transparent hover:text-menu"
                    >
                      {subMenu.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <Link
              className="font-bold hover:bg-transparent focus:bg-transparent hover:text-menu"
              to={menu.href || ""}
            >
              {menu.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};
