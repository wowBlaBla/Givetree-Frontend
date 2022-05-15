import React, { FC } from "react";
import cx from "classnames";

interface FeaturedBadgeProps {
  className?: string;
  text?: string;
  large?: boolean;
}

export const FeaturedBadge: FC<FeaturedBadgeProps> = ({ className, large, text }) => (
  <div
    className={cx("rounded-lg bg-brand-black text-white bg-opacity-80", className, {
      "py-1 px-2 text-xs sm:text-base xl:text-lg": !large,
      "py-1 px-2 sm:py-2 sm:px-3 text-base sm:text-lg xl:text-xl": large,
    })}
  >
    {text}
  </div>
);
