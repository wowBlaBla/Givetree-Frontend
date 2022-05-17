import React, { FC, ReactNode } from "react";
import cx from "classnames";

interface BaseTileProps {
  children: ReactNode;
  className?: string;
}

export const BaseTile: FC<BaseTileProps> = ({ className, children }) => (
  <div className={cx("relative w-full rounded-xl shadow-lg p-5 sm:p-6", className)}>
    {children}
  </div>
);
