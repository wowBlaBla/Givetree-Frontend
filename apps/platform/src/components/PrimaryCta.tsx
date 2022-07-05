import React, { FC, MouseEventHandler, ReactNode } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

// Base Prop Types

interface BaseProps {
  children?: ReactNode;
  className?: string;
  primaryColor?: boolean;
}

// Primary Button

export interface ButtonProps extends BaseProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset" | undefined;
}

export const PrimaryButton: FC<ButtonProps> = ({
  children,
  className,
  primaryColor,
  onClick,
  type,
}) => (
  <button
    className={cx("primary-button", className, {
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

interface PrimaryLinkProps extends BaseProps {
  href: string;
}

export const PrimaryLink: FC<PrimaryLinkProps> = ({
  children,
  className,
  href,
  primaryColor,
}) => (
  <Link
    className={cx("primary-button", className, {
      "text-white": !primaryColor,
      "text-brand-orange": primaryColor,
    })}
    to={href}
  >
    {children}
  </Link>
);

// Primary Modal Button

interface PrimaryModalButtonProps extends BaseProps {
  htmlFor: string;
}

export const PrimaryModalButton: FC<PrimaryModalButtonProps> = ({
  children,
  className,
  htmlFor,
  primaryColor,
}) => (
  <label
    className={cx("primary-button", className, {
      "text-white": !primaryColor,
      "text-brand-orange": primaryColor,
    })}
    htmlFor={htmlFor}
  >
    {children}
  </label>
);
