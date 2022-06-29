import React, { FC } from "react";
import cx from "classnames";
import { VerificationIcon } from "../icons/VerificationIcon";

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
      "rounded-lg py-1 px-2 text-brand-orange border border-brand-orange flex flex-row items-center gap-1",
      className,
      {
        "text-xs sm:text-sm": !large,
        "text-sm sm:text-base": large,
      }
    )}
  >
    <VerificationIcon className="w-4 fill-current" />
    <span>{text ?? "Verified"}</span>
  </div>
);
