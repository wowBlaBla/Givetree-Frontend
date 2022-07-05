import React, { FC, MouseEventHandler, ReactNode } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

const ButtonStyles =
  "py-2 px-3 rounded-lg bg-brand-orange whitespace-nowrap text-center font-medium tracking-wide cursor-pointer button-hover";

// Primary Button

export interface ButtonProps {
  children?: ReactNode;
  className?: string;
  large?: boolean;
  primaryColor?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset" | undefined;
}

export const PrimaryButton: FC<ButtonProps> = ({
  children,
  className,
  large,
  primaryColor,
  onClick,
  type,
}) => (
  <button
    className={cx("text-base", ButtonStyles, className, {
      "text-lg sm:text-xl": large,
      "text-white": !primaryColor,
      "text-brand-orange": primaryColor,
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
  primaryColor?: boolean;
}

export const PrimaryLink: FC<PrimaryLinkProps> = ({
  children,
  className,
  large,
  primaryColor,
  href,
}) => (
  <Link
    className={cx("text-base sm:text-lg", ButtonStyles, className, {
      "text-lg lg:text-xl": large,
      "text-white": !primaryColor,
      "text-brand-orange": primaryColor,
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
  primaryColor?: string;
}

export const PrimaryModalButton: FC<PrimaryModalButtonProps> = ({
  children,
  className,
  htmlFor,
  primaryColor,
}) => (
  <label
    className={cx("text-base", ButtonStyles, className, {
      "text-white": !primaryColor,
      "text-brand-orange": primaryColor,
    })}
    htmlFor={htmlFor}
  >
    {children}
  </label>
);
