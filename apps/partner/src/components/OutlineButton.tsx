import React, { FC, ReactNode } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

const ButtonStyles = `
  border-2
  border-brand-orange
  rounded-lg
  py-2
  px-3
  text-brand-orange
  text-base
  hover:border-brand-orange-hover
  hover:bg-brand-orange-hover
  hover:text-white
  transition
  duration-150
  ease-in-out
`;

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export const OutlineButton: FC<ButtonProps> = ({
  children,
  className,
  onClick,
  type,
}) => (
  <button
    className={cx(ButtonStyles, className)}
    type={type || "button"}
    onClick={onClick}
  >
    {children}
  </button>
);

interface OutlineLinkProps {
  to: string;
  className?: string;
  children?: ReactNode;
}

export const OutlineLink: FC<OutlineLinkProps> = ({ children, className, to }) => (
  <Link className={cx(ButtonStyles, className)} to={to}>
    {children}
  </Link>
);
