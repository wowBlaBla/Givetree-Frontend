import React, { FC, ReactNode } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

const ButtonStyles =
  "py-1 px-2 sm:py-2 sm:px-3 rounded-lg bg-brand-orange whitespace-nowrap text-center text-white font-semibold button-hover";

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  large?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

export const PrimaryButton: FC<ButtonProps> = ({ className, large, type, children }) => (
  <button
    className={cx("text-base sm:text-lg", ButtonStyles, className, {
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
    className={cx("text-base sm:text-lg", ButtonStyles, className, {
      "text-lg lg:text-xl": large,
    })}
    to={href}
  >
    {children}
  </Link>
);
