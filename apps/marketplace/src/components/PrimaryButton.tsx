import React, { FC, ReactNode } from "react";
import cx from "classnames";

const ButtonStyles = `
  bg-brand-orange
  rounded-md
  
  py-1
  px-3
  sm:py-2
  sm:px-4

  text-sm
  sm:text-base

  button-hover
`;

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  children?: ReactNode;
}

export const PrimaryButton: FC<ButtonProps> = ({ children, className, type }) => (
  <button className={cx(ButtonStyles, className)} type={type || "button"}>
    {children}
  </button>
);
