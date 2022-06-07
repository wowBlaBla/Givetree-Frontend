import React, { FC, ReactNode } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

const ButtonStyles =
  "border-2 border-brand-orange rounded-lg text-brand-orange button-hover";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  children?: ReactNode;
}

export const OutlineButton: FC<ButtonProps> = ({ children, className, type }) => (
  <button
    className={cx(
      "py-1 px-3 sm:py-2 sm:px-4 text-sm sm:text-base",
      ButtonStyles,
      className
    )}
    type={type || "button"}
  >
    {children}
  </button>
);

interface OutlineLinkProps {
  href: string;
  className?: string;
  children?: ReactNode;
}

export const OutlineLink: FC<OutlineLinkProps> = ({ children, className, href }) => (
  <Link
    className={cx(
      "py-1 px-3 sm:py-2 sm:px-4 text-sm sm:text-base",
      ButtonStyles,
      className
    )}
    to={href}
  >
    {children}
  </Link>
);

export const OutlineLinkSm: FC<OutlineLinkProps> = ({ children, className, href }) => (
  <Link className={cx("p-1 text-xs sm:text-sm", ButtonStyles, className)} to={href}>
    {children}
  </Link>
);
