import React, { FC } from "react";
import cx from "classnames";

interface LiveBadgeProps {
  className?: string;
  text?: string;
}

export const LiveBadge: FC<LiveBadgeProps> = ({ className, text }) => (
  <div
    className={cx(
      "flex items-center space-x-1 whitespace-nowrap font-semibold border-2 bg-opacity-60 rounded-lg border-red-600 text-sm py-1 px-2",
      className
    )}
  >
    <span className="bg-red-600 p-1 rounded-full animate-pulse" />
    <span className="text-white">{text ?? "Live"}</span>
  </div>
);
