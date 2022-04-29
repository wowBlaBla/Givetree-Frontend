import React, { FC, ReactNode } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import { props } from "cypress/types/bluebird";

const ButtonStyles = `
  bg-brand-orange
  text-white
  rounded-md
  py-2
  px-3
  sm:px-4
  text-base
  sm:text-lg

  button-hover
`;

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  children?: ReactNode;
  large?: boolean;
}

export const PrimaryButton: FC<ButtonProps> = (props) => (
  <button
    className={cx(ButtonStyles, props.className, {
      "text-lg lg:text-xl": props.large,
    })}
    type={props.type || "button"}
  >
    {props.children}
  </button>
);

interface PrimaryLinkProps {
  to: string;
  className?: string;
  children?: ReactNode;
}

export const PrimaryLink: FC<PrimaryLinkProps> = ({ children, className, to }) => (
  <Link className={cx(ButtonStyles, className)} to={to}>
    {children}
  </Link>
);
