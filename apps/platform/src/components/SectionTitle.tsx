import React, { FC, ReactNode } from "react";
import cx from "classnames";

export interface SectionTitleProps {
  className?: string;
  children: ReactNode;
}

export const SectionTitle: FC<SectionTitleProps> = ({ className, children }) => (
  <h1 className={cx("text-2xl sm:text-3xl font-bold mt-[25px] mb-[15px]", className)}>
    {children}
  </h1>
);
