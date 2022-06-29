import React, { FC, MouseEventHandler, ReactElement, ReactNode } from "react";
import cx from "classnames";

export interface ButtonProps {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  startIcon?: ReactElement;
  tabIndex?: number;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  disabled,
  startIcon,
  onClick,
  tabIndex,
}) => (
  <button
    className={cx(
      "py-2 px-3 sm:px-4 rounded-lg text-sm sm:text-base text-white font-bold cursor-pointer hover:bg-brand-orange-hover transition-hover",
      className
    )}
    disabled={disabled}
    onClick={onClick}
    tabIndex={tabIndex || 0}
    type="button"
  >
    <div className="flex items-center space-x-2">
      <div>{startIcon}</div>
      <div className="hidden md:block whitespace-nowrap">{children}</div>
    </div>
  </button>
);
