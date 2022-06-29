import React, { FC } from "react";
import cx from "classnames";

interface LiveBadgeProps {
  className?: string;
  text?: string;
}

export const LiveBadge: FC<LiveBadgeProps> = ({ className, text }) => (
  <div
    className={cx(
      "flex items-center space-x-1 whitespace-nowrap font-semibold border rounded-lg border-green-600 text-sm py-1 px-2",
      className
    )}
  >
    <span className="p-1 bg-green-600 rounded-full animate-pulse" />
    <span className="text-green-800">{text ?? "Live"}</span>
  </div>
);
