import React, { FC, ReactNode } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

const ButtonStyles = `
  bg-brand-orange
  text-white
  rounded-md
  py-2
  px-3
  sm:px-4
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

export const PrimaryButton: FC<ButtonProps> = ({ children, className, type }) => (
  <button className={cx(ButtonStyles, className)} type={type || "button"}>
    {children}
  </button>
);

interface PrimaryLinkProps {
  to: string;
  className?: string;
  children?: ReactNode;
}

export const PrimaryLink: FC<PrimaryLinkProps> = ({ children, className, to }) => (
  <Link className={cx(ButtonStyles, className)} to={to}>
    {children}
  </Link>
);
