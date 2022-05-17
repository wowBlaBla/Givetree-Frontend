import React, { FC, ReactNode } from "react";
import cx from "classnames";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import { PlatformRoute } from "../configs/routes";

interface AppNavLink {
  to: PlatformRoute;
  children: ReactNode;
}

export const AppNavLink: FC<AppNavLink> = ({ children, to }) => {
  const resolved = useResolvedPath(to);
  const isMatch = useMatch({ path: resolved.pathname, end: true });

  return (
    <NavLink
      to={to}
      className={cx(
        "text-white lg:text-lg hover:text-brand-orange-hover transition-hover",
        {
          "text-brand-orange-active": isMatch,
        }
      )}
    >
      {children}
    </NavLink>
  );
};
