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
    className={cx("absolute top-0 z-10", props.className, {
      hidden: !props.status,
      "left-0": props.left,
      "right-0": props.right || !props.left,
    })}
  >
    <div
      className={cx("rounded-md bg-brand-black text-white bg-opacity-70", {
        "py-1 px-2 text-xs sm:text-base": !props.large,
        "py-1 sm:py-2 px-2 sm:px-3 text-base sm:text-lg": props.large,
      })}
    >
      {props.status}
    </div>
  </div>
);
