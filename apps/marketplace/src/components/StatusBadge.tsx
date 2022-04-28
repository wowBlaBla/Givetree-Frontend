import React, { FC } from "react";
import cx from "classnames";

interface StatusBadgeProps {
  className?: string;
  status?: string;
  left?: boolean;
  right?: boolean;
  large?: boolean;
}

export const StatusBadge: FC<StatusBadgeProps> = (props) => (
  <div
    className={cx("rounded-md bg-brand-black text-white bg-opacity-80", {
      "py-1 px-2 text-xs sm:text-base": !props.large,
      "py-1 sm:py-2 px-2 sm:px-3 text-base sm:text-xl": props.large,
    })}
  >
    {props.status}
  </div>
);
