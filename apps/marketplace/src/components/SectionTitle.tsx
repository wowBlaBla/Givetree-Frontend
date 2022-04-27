import React, { FC, ReactNode } from "react";
import cx from "classnames";

export interface SectionTitleProps {
  className?: string;
  children: ReactNode;
}

export const SectionTitle: FC<SectionTitleProps> = (props) => (
  <h1 className={cx("text-2xl sm:text-3xl text-center font-semibold", props.className)}>
    {props.children}
  </h1>
);
