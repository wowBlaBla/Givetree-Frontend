import React, { FC } from "react";
import cx from "classnames";
import { VerificationIcon } from "./icons/VerificationIcon";

interface VerificationBadgeProps {
  className?: string;
  large?: boolean;
  text?: string;
}

export const VerificationBadge: FC<VerificationBadgeProps> = ({
  className,
  large,
  text,
}) => (
  <div
    className={cx(
      "flex items-center py-1 px-2 space-x-1 text-brand-green-active border-hexagon border-brand-green-active text-sm font-semibold",
      className,
      {
        "text-xs sm:text-sm xl:text-base": !large,
        "text-base sm:text-lg xl:text-xl": large,
      }
    )}
  >
    <VerificationIcon className="fill-current" />
    <span>{text ?? "Verified"}</span>
  </div>
);
