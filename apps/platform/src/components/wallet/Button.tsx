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
  onClick?: MouseEventHandler<HTMLButtonElement>;
  startIcon?: ReactElement;
  style?: CSSProperties;
  tabIndex?: number;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  disabled,
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
    <div className="flex items-center space-x-2">
      <div>{startIcon}</div>
      <div className="hidden sm:block">{children}</div>
    </div>
  </button>
);
