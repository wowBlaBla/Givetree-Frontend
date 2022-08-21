import React, { FC, ReactNode } from "react";
import cx from "classnames";

export interface SectionTitleProps {
  className?: string;
  children: ReactNode;
}

export const SectionTitle: FC<SectionTitleProps> = ({ className, children }) => (
  <h1 className={cx("text-gray-900 text-4xl sm:text-5xl font-bold", className)}>
    {children}
  </h1>
);
