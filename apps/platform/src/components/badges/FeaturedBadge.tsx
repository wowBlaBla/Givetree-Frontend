import React, { FC } from "react";
import cx from "classnames";

interface FeaturedBadgeProps {
  className?: string;
  text?: string;
  large?: boolean;
}

export const FeaturedBadge: FC<FeaturedBadgeProps> = ({ className, large, text }) => (
  <div
    className={cx(
      "rounded-lg py-1 px-2 bg-brand-black text-white bg-opacity-60",
      className,
      {
        "text-xs sm:text-base": !large,
        "text-base sm:text-lg": large,
      }
    )}
  >
    {text}
  </div>
);
