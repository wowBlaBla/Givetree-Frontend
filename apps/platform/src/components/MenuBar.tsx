import React, { FC } from "react";
import { PlatformRoute } from "../configs/routes";
import cx from "classnames";
import { Link } from "wouter";

interface AppHeaderNavLink {
  title: string;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
  childrens?: Array<AppHeaderNavLink>;
}

const list: AppHeaderNavLink[] = [
  {
    title: "HOME",
    href: PlatformRoute.Home,
  },
  {
    title: "BROWSE",
    childrens: [
      { title: "NFT Fundraisers", href: "/fundraisers" },
      { title: "Creators", href: "/creators" },
      { title: "Charities", href: "/charities" },
      { title: "Donors", href: "" },
    ],
  },
  {
    title: "NFT FUNDRAISERS",
    childrens: [
      { title: "All", href: "" },
      { title: "Minting", href: "" },
      { title: "Sales", href: "" },
      { title: "Auctions", href: "" },
      { title: "Stats", href: "" },
      { title: "Archive", href: "" },
    ],
  },
  {
    title: "CREATE",
    childrens: [
      { title: "Create NFT", href: "" },
      { title: "Create NFT Fundraiser", href: "" },
    ],
  },
  {
    title: "DONATE",
    href: "",
  },
  {
    title: "ABOUT",
    childrens: [
      { title: "Welcome", href: "/about/welcome" },
      { title: "For creators", href: "" },
      { title: "For charities", href: "" },
      { title: "For donors", href: "" },
      { title: "Our story", href: "" },
      { title: "Our Blog", href: "" },
      { title: "Our socials", href: "" },
      { title: "Terms of use", href: "" },
      { title: "Privacy policy", href: "" },
    ],
  },
];

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
      {list.map((menu, mIndex) => (
        <li
          key={`top-menu-${mIndex}`}
          className={`indicator ${horizontal ? "" : "w-[200px]"}`}
        >
          {menu.childrens ? (
            <>
              <span
                className={`indicator-item indicator-middle indicator-end p-0 right-[${
                  horizontal ? "0.5rem" : "0.5rem"
                }]`}
              >
                {horizontal ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                )}
              </span>
              <span className="font-bold hover:bg-transparent">{menu.title}</span>
              <ul className="bg-deep-dark top-sub-menu">
                {menu.childrens.map((subMenu, sIndex) => (
                  <li key={`top-sub-menu-${sIndex}`}>
                    <Link
                      to={subMenu.href || ""}
                      className="hover:bg-transparent hover:text-menu"
                    >
                      {subMenu.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <Link
              className="font-bold hover:bg-transparent hover:text-menu"
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
