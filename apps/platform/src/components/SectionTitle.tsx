import React, { FC, ReactNode } from "react";
import cx from "classnames";

export interface SectionTitleProps {
  className?: string;
  children: ReactNode;
}

export const SectionTitle: FC<SectionTitleProps> = ({ className, children }) => (
  <h1 className={cx("text-gray-900 text-2xl sm:text-3xl font-bold text-light-black mt-[25px] mb-[15px]", className)}>
    {children}
  </h1>
);
