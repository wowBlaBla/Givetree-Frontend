import React, { FC, MouseEventHandler, ReactNode } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

const ButtonStyles =
  "py-1 px-2 sm:py-2 sm:px-3 rounded-lg bg-brand-orange whitespace-nowrap text-center text-white font-medium tracking-wide cursor-pointer button-hover";

// Primary Button

export interface ButtonProps {
  children?: ReactNode;
  className?: string;
  large?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset" | undefined;
}

export const PrimaryButton: FC<ButtonProps> = ({
  children,
  className,
  large,
  onClick,
  type,
}) => (
  <button
    className={cx("text-base sm:text-lg", ButtonStyles, className, {
      "text-lg sm:text-xl": large,
    })}
    type={type || "button"}
    onClick={onClick}
  >
    {children}
  </button>
);

// Primary Link

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
    className={cx("py-2 px-3 text-base", ButtonStyles, className, {
      "text-lg lg:text-xl": large,
    })}
    to={href}
  >
    {children}
  </Link>
);

// Primary Modal Button

interface PrimaryModalButtonProps {
  children: ReactNode;
  className?: string;
  htmlFor: string;
}

export const PrimaryLabelButton: FC<PrimaryModalButtonProps> = ({
  children,
  className,
  htmlFor,
}) => (
  <label
    className={cx("text-base sm:text-lg", ButtonStyles, className)}
    htmlFor={htmlFor}
  >
    {children}
  </label>
);
