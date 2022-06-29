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

  return (
    <>
      {!disabled ? (
        <NavLink
          to={href}
          className={cx(
            "whitespace-nowrap text-base font-bold hover:text-brand-black transition-hover",
            {
              "text-brand-black": isMatch,
            }
          )}
          onClick={onClick}
        >
          {children}
        </NavLink>
      ) : (
        <div
          className="tooltip tooltip-bottom cursor-pointer whitespace-nowrap text-base font-bold text-gray-400"
          data-tip="Coming soon"
        >
          {children}
        </div>
      )}
    </>
  );
};
