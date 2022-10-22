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
          {/* {menu.childrens ? (
            <>
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
          ) : ( */}
            <Link
              className="font-bold hover:bg-transparent focus:bg-transparent hover:text-menu"
              to={menu.href || ""}
            >
              {menu.title}
            </Link>
          {/* )} */}
        </li>
      ))}
    </ul>
  );
};
