import React, { FC, ReactNode } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

export const ButtonStyles =
  "border-2 border-brand-orange rounded-lg text-brand-orange button-hover";

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}

export const OutlineButton: FC<ButtonProps> = ({
  children,
  className,
  onClick,
  type,
}) => (
  <button
    className={cx(
      "py-1 px-3 sm:py-2 sm:px-4 text-sm sm:text-base",
      ButtonStyles,
      className
    )}
    type={type || "button"}
    onClick={onClick}
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
  <Link className={cx("py-1 px-3 text-sm", ButtonStyles, className)} to={href}>
    {children}
  </Link>
);

export const OutlineLinkSm: FC<OutlineLinkProps> = ({ children, className, href }) => (
  <Link className={cx("p-1 text-xs sm:text-sm", ButtonStyles, className)} to={href}>
    {children}
  </Link>
);
