import React, { FC, ReactNode } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

const ButtonStyles = `
  bg-brand-orange
  text-white
  rounded-lg
  py-2
  px-3
  sm:px-4
  text-base
  sm:text-lg

  button-hover
`;

interface BaseCtaProps {
  children: ReactNode;
  className?: string;
  large?: boolean;
}

///////////////////////////////// Button

interface ButtonProps extends BaseCtaProps {
  type?: "button" | "submit" | "reset" | undefined;
}

export const PrimaryCta: FC<ButtonProps> = ({ className, large, type, children }) => (
  <button
    className={cx(ButtonStyles, className, {
      "text-lg lg:text-xl": large,
    })}
    type={type || "button"}
  >
    {children}
  </button>
);

///////////////////////////////// Link

interface PrimaryLinkProps extends BaseCtaProps {
  to: string;
}

export const PrimaryLinkCta: FC<PrimaryLinkProps> = ({
  children,
  className,
  large,
  to,
}) => (
  <Link
    className={cx(ButtonStyles, className, {
      "text-lg lg:text-xl": large,
    })}
    to={to}
  >
    {children}
  </Link>
);
