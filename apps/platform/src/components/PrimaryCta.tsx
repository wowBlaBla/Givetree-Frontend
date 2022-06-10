import React, { FC, ReactNode } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

const ButtonStyles = "rounded-lg bg-brand-orange text-center text-white button-hover";

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  large?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

export const PrimaryButton: FC<ButtonProps> = ({ className, large, type, children }) => (
  <button
    className={cx("py-2 px-3 text-base", ButtonStyles, className, {
      "text-lg sm:text-xl": large,
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
    className={cx("py-2 px-3 text-base sm:text-lg", ButtonStyles, className, {
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
    className={cx("py-1 px-3 text-sm sm:text-base xl:text-lg", ButtonStyles, className, {
      "text-lg lg:text-xl": large,
    })}
    to={href}
  >
    {children}
  </Link>
);
