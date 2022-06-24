import React, { FC, LabelHTMLAttributes, ReactNode } from "react";
import cx from "classnames";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  htmlFor?: string;
  children?: ReactNode;
}

export const Label: FC<LabelProps> = ({ children, className, htmlFor }) => (
  <label className={cx("label", className)} htmlFor={htmlFor}>
    {children}
  </label>
);
