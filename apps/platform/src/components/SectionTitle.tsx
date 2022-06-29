import React, { FC, ReactNode } from "react";
import cx from "classnames";

export interface SectionTitleProps {
  className?: string;
  children: ReactNode;
}

export const SectionTitle: FC<SectionTitleProps> = ({ className, children }) => (
  <h1 className={cx("text-brand-black text-2xl sm:text-3xl font-bold", className)}>
    {children}
  </h1>
);
