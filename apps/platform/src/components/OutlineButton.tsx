import React, { FC, ReactNode } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

const ButtonStyles = `
  border-2
  border-brand-orange
  rounded-lg

  py-1
  px-3
  sm:py-2
  sm:px-4

  text-brand-orange
  text-sm
  sm:text-base
  xl:text-lg

  button-hover
`;

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  children?: ReactNode;
}

export const OutlineButton: FC<ButtonProps> = ({ children, className, type }) => (
  <button className={cx(ButtonStyles, className)} type={type || "button"}>
    {children}
  </button>
);

interface OutlineLinkProps {
  to: string;
  className?: string;
  children?: ReactNode;
}

export const OutlineLink: FC<OutlineLinkProps> = ({ children, className, to }) => (
  <Link className={cx(ButtonStyles, className)} to={to}>
    {children}
  </Link>
);
