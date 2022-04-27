import React, { FC } from "react";
import cx from "classnames";
import { VerifiedIcon } from "./icons/VerifiedIcon";

interface VerificationBadgeProps {
  className?: string;
}

export const VerificationBadge: FC<VerificationBadgeProps> = (props) => (
  <div className={cx("font-semibold", props.className)}>
    <div className="flex items-center space-x-1 text-base sm:text-lg text-brand-green-active">
      <VerifiedIcon className="w-full h-full" />
      <span>Verified</span>
    </div>
  </div>
);
