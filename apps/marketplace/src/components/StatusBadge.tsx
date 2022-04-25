import React, { FC } from "react";
import cx from "classnames";

interface StatusBadgeProps {
  status?: string;
}

export const StatusBadge: FC<StatusBadgeProps> = ({ status }) => (
  <div
    className={cx("absolute top-0 right-0 my-2.5 mx-2 z-10", {
      hidden: !status,
    })}
  >
    <div className="py-1 px-2 text-xs sm:text-base rounded-md bg-brand-black text-white bg-opacity-70">
      {status}
    </div>
  </div>
);
