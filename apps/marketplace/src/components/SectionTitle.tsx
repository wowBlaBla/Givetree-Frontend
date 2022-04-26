import React, { FC, ReactNode } from "react";
import cx from "classnames";

export interface SectionTitleProps {
  className?: string;
  children: ReactNode;
  large?: boolean;
  xlarge?: boolean;
  center?: boolean;
}

export const SectionTitle: FC<SectionTitleProps> = (props) => (
  <h1
    className={cx("font-semibold", props.className, {
      "text-center": props.center,
      "text-2xl sm:text-3xl": !props.large || !props.xlarge,
      "text-4xl sm:text-5xl": props.large,
      "text-4xl sm:text-6xl": props.xlarge,
    })}
  >
    {props.children}
  </h1>
);
