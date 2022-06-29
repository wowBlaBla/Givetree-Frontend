/* eslint-disable @next/next/no-img-element */

import React, { FC } from "react";
import cx from "classnames";
import { VerificationBadge } from "./VerificationBadge";

interface ContentCreatorBadgeProps {
  avatarUrl: string;
  isVerified?: boolean;
  large?: boolean;
  name: string;
}

export const ContentCreatorBadge: FC<ContentCreatorBadgeProps> = ({
  avatarUrl,
  isVerified,
  large,
  name,
}) => (
  <div className="relative z-30 flex flex-col items-center justify-end space-y-2">
    <div
      className={cx({
        "w-12 h-12 sm:w-16 sm:h-16 xl:w-20 xl:h-20": !large,
        "w-16 h-16 sm:w-28 sm:h-28": large,
      })}
    >
      <img className="border-2 border-gray-100 rounded-full" src={avatarUrl} alt={name} />
    </div>

    <div className="flex flex-col space-y-1">
      <p
        className={cx("text-center", {
          "text-sm sm:text-base": !large,
          "text-base sm:text-lg lg:text-xl xl:text-2xl": large,
        })}
      >
        by <span className="font-semibold text-brand-orange">{name}</span>
      </p>

      <div className="flex justify-center">
        {isVerified && <VerificationBadge text="Verified Creator" />}
      </div>
    </div>
  </div>
);
