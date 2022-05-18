import React, { FC, ReactNode } from "react";
import cx from "classnames";

export interface SectionTitleProps {
  className?: string;
  children: ReactNode;
}

export const SectionSubtitle: FC<SectionTitleProps> = ({ className, children }) => (
  <h1 className={cx("text-center text-sm sm:text-base", className)}>{children}</h1>
);
