import React, { FC, ReactNode } from "react";
import cx from "classnames";

interface DrawerProps {
  children: ReactNode;
  className?: string;
  name: string;
}

export const Drawer: FC<DrawerProps> = ({ children, className, name }) => (
  <div
    className={cx("drawer", {
      className,
    })}
  >
    <input id={name} type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
      <label htmlFor={name} className="drawer-button">
        Open
      </label>
    </div>
    <div className="drawer-side">
      <label htmlFor={name} className="drawer-overlay"></label>
      {children}
    </div>
  </div>
);
