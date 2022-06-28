import React, { FC } from "react";
import cx from "classnames";

interface FeaturedBadgeProps {
  className?: string;
  text?: string;
  large?: boolean;
}

export const FeaturedBadge: FC<FeaturedBadgeProps> = ({
  className,
  large = false,
  text,
}) => (
  <div
    className={cx(
      "rounded-lg py-1 px-2 bg-brand-black text-brand-orange bg-opacity-60 border border-brand-orange",
      {
        "text-xs sm:text-sm": !large,
        "text-sm sm:text-base": large,
      }
    )}
  >
    {text}
  </div>
);
