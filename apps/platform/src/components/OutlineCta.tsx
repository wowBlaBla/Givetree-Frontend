import React, { FC, ReactNode } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

export const ButtonStyles =
  "py-2 px-3 border-2 border-brand-orange rounded-lg text-brand-orange button-hover";

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
    className={cx("text-sm sm:text-base", ButtonStyles, className)}
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
  <Link className={cx("text-sm", ButtonStyles, className)} to={href}>
    {children}
  </Link>
);

export const ExternalOutlineLink: FC<OutlineLinkProps> = ({
  children,
  className,
  href,
}) => (
  <a
    className={cx("text-sm", ButtonStyles, className)}
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
);
