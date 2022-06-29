import React, { FC, ReactNode } from "react";
import cx from "classnames";

export interface SectionContainerProps {
  className?: string;
  children: ReactNode;
}

export const SectionContainer: FC<SectionContainerProps> = ({ className, children }) => (
  <div
    className={cx(
      "flex relative flex-col flex-1 w-full max-w-screen-xl mx-auto mt-16 p-5",
      className
    )}
  >
    {children}
  </div>
);
