import React, {
  CSSProperties,
  FC,
  MouseEventHandler,
  ReactElement,
  ReactNode,
} from "react";
import cx from "classnames";

export interface ButtonProps {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  endIcon?: ReactElement;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  startIcon?: ReactElement;
  style?: CSSProperties;
  tabIndex?: number;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  disabled,
  endIcon,
  startIcon,
  onClick,
  style,
  tabIndex,
}) => (
  <button
    className={cx("wallet-adapter-button", className)}
    disabled={disabled}
    onClick={onClick}
    tabIndex={tabIndex || 0}
    type="button"
    style={style}
  >
    {startIcon && <i className="wallet-adapter-button-start-icon">{startIcon}</i>}
    {children}
    {endIcon && <i className="wallet-adapter-button-end-icon">{endIcon}</i>}
  </button>
);
