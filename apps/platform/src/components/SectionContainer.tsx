import React, { FC, ReactNode } from "react";
import cx from "classnames";

export interface SectionContainerProps {
  className?: string;
  children: ReactNode;
}

export const SectionContainer: FC<SectionContainerProps> = ({ className, children }) => (
  <div
    className={cx(
      "flex relative flex-col flex-1 w-full mx-auto sm:my-[3rem] px-2 px-4",
      className
    )}
  >
    {children}
  </div>
);
