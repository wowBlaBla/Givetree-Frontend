import React, { FC, ReactNode } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

const ButtonStyles = "bg-brand-orange text-white rounded-lg button-hover";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  children?: ReactNode;
  large?: boolean;
}

export const PrimaryButton: FC<ButtonProps> = ({ className, large, type, children }) => (
  <button
    className={cx("py-2 px-3 sm:px-4 text-base sm:text-lg", ButtonStyles, className, {
      "text-lg lg:text-xl": large,
    })}
    type={type || "button"}
  >
    {children}
  </button>
);

interface PrimaryLinkProps {
  href: string;
  className?: string;
  children?: ReactNode;
  large?: boolean;
}

export const PrimaryLink: FC<PrimaryLinkProps> = ({
  children,
  className,
  large,
  href,
}) => (
  <Link
    className={cx("py-2 px-3 sm:px-4 text-base sm:text-lg", ButtonStyles, className, {
      "text-lg lg:text-xl": large,
    })}
    to={href}
  >
    {children}
  </Link>
);

export const PrimaryLinkSm: FC<PrimaryLinkProps> = ({
  children,
  className,
  large,
  href,
}) => (
  <Link
    className={cx("py-2 px-3 text-xs sm:text-sm", ButtonStyles, className, {
      "text-lg lg:text-xl": large,
    })}
    to={href}
  >
    {children}
  </Link>
);
