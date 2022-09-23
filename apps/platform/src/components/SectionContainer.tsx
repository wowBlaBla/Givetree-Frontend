import React, { FC, ReactNode } from "react";
import cx from "classnames";

export interface SectionContainerProps {
  className?: string;
  children: ReactNode;
}

export const SectionContainer: FC<SectionContainerProps> = ({ className, children }) => (
  <div
    className={cx(
      "flex relative flex-col flex-1 w-full mx-auto sm:my-12.5 px-2 lg:px-0",
      className
    )}
  >
    {children}
  </div>
);
