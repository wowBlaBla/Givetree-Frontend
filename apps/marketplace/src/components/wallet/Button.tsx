import React, {
  CSSProperties,
  FC,
  MouseEventHandler,
  ReactChild,
  ReactElement,
} from "react";
import cx from "classnames";

export interface ButtonProps {
  children?: ReactChild | null;
  className?: string;
  disabled?: boolean;
  endIcon?: ReactElement;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  startIcon?: ReactElement;
  style?: CSSProperties;
  tabIndex?: number;
}

export const Button: FC<ButtonProps> = (props) => (
  <button
    className={cx("wallet-adapter-button", props.className)}
    disabled={props.disabled}
    onClick={props.onClick}
    tabIndex={props.tabIndex || 0}
    type="button"
  >
    {props.startIcon && (
      <i className="wallet-adapter-button-start-icon">{props.startIcon}</i>
    )}
    {props.children}
    {props.endIcon && <i className="wallet-adapter-button-end-icon">{props.endIcon}</i>}
  </button>
);
