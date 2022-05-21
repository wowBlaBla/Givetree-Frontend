import React, { FC, ReactNode } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import { boolean } from "yup";

const ButtonStyles = `
  bg-brand-orange
  text-white
  rounded-lg
  py-2
  px-3
  sm:px-4
  text-base
  sm:text-lg

  button-hover
`;

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  children?: ReactNode;
  large?: boolean;
}

export const PrimaryButton: FC<ButtonProps> = ({ className, large, type, children }) => (
  <button
    className={cx(ButtonStyles, className, {
      "text-lg lg:text-xl": large,
    })}
    type={type || "button"}
  >
    {children}
  </button>
);

interface PrimaryLinkProps {
  to: string;
  className?: string;
  children?: ReactNode;
  large?: boolean;
}

export const PrimaryLink: FC<PrimaryLinkProps> = ({ children, className, large, to }) => (
  <Link
    className={cx(ButtonStyles, className, {
      "text-lg lg:text-xl": large,
    })}
    to={to}
  >
    {children}
  </Link>
);
