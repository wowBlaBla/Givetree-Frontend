import React, { FC, ReactNode } from "react";
import cx from "classnames";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import { PlatformRoute } from "../configs/routes";

interface AppNavLink {
  href: PlatformRoute;
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export const AppNavLink: FC<AppNavLink> = ({ children, disabled, href, onClick }) => {
  const resolved = useResolvedPath(href);
  const isMatch = useMatch({ path: resolved.pathname, end: true });

  console.log(isMatch);

  return (
    <>
      {!disabled ? (
        <NavLink
          to={href}
          className={cx(
            {
              "text-brand-orange": isMatch,
              "text-gray-800": !isMatch,
            },
            "whitespace-nowrap text-base font-medium hover:text-brand-orange transition-hover"
          )}
          onClick={onClick}
        >
          {children}
        </NavLink>
      ) : (
        <div
          className="text-base font-medium text-gray-400 cursor-pointer tooltip tooltip-bottom whitespace-nowrap"
          data-tip="Coming soon"
        >
          {children}
        </div>
      )}
    </>
  );
};
