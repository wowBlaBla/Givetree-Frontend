import React, { FC, LabelHTMLAttributes, ReactNode } from "react";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor?: string;
  children?: ReactNode;
}

export const Label: FC<LabelProps> = ({ children, htmlFor }) => (
  <label className="label" htmlFor={htmlFor}>
    {children}
  </label>
);
