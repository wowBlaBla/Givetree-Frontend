import React, { FC, ReactNode } from "react";
import cx from "classnames";
import { Link } from "wouter";

// Base Prop Types

interface BaseProps {
  children?: ReactNode;
  className?: string;
}

// Outline Button

interface OutlineButtonProps extends BaseProps {
  onClick: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}

export const OutlineButton: FC<OutlineButtonProps> = ({
  children,
  className,
  onClick,
  type,
}) => (
  <button
    className={cx(className, "outline-button")}
    type={type || "button"}
    onClick={onClick}
  >
    {children}
  </button>
);

// Outline Links

interface OutlineLinkProps extends BaseProps {
  href: string;
}

export const OutlineLink: FC<OutlineLinkProps> = ({ children, className, href }) => (
  <Link className={cx(className, "outline-button h-[45px]")} to={href}>
    {children}
  </Link>
);

export const ExternalOutlineLink: FC<OutlineLinkProps> = ({
  children,
  className,
  href,
}) => (
  <a
    className={cx("outline-button", className)}
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
);
