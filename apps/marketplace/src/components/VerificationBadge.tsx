import React, { FC } from "react";
import cx from "classnames";
import { VerificationIcon } from "./icons/VerificationIcon";

interface VerificationBadgeProps {
  className?: string;
}

export const VerificationBadge: FC<VerificationBadgeProps> = (props) => (
  <div
    className={cx(
      "flex items-center space-x-1 text-brand-green-active font-semibold border-hexagon border-brand-green-active py-1 px-2",
      props.className
    )}
  >
    <VerificationIcon className="fill-current" />
    <span>Verified</span>
  </div>
);
