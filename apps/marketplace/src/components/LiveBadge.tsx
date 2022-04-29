import React, { FC } from "react";
import cx from "classnames";

interface LiveBadgeProps {
  className?: string;
  text?: string;
}

export const LiveBadge: FC<LiveBadgeProps> = (props) => (
  <div
    className={cx(
      "flex items-center space-x-1 whitespace-nowrap font-semibold border-2 rounded-md border-red-600 text-sm py-1 px-2",
      props.className
    )}
  >
    <span className="bg-red-600 p-1 rounded-full animate-pulse" />
    <span>{props.text ?? "Live"}</span>
  </div>
);
