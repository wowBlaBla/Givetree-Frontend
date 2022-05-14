/* eslint-disable @next/next/no-img-element */

import React, { FC } from "react";
import cx from "classnames";
import { VerificationBadge } from "./VerificationBadge";

interface ContentCreatorBadgeProps {
  avatarUrl: string;
  name: string;
  large?: boolean;
  isVerified?: boolean;
}

export const ContentCreatorBadge: FC<ContentCreatorBadgeProps> = ({
  avatarUrl,
  name,
  isVerified,
  large,
}) => (
  <div className="flex relative flex-col justify-end items-center -mt-24 space-y-2 z-30">
    <div
      className={cx({
        "w-12 h-12 sm:w-20 sm:h-20": !large,
        "w-16 h-16 sm:w-28 sm:h-28": large,
      })}
    >
      <img className="rounded-full" src={avatarUrl} alt={name} />
    </div>

    <div className="flex flex-col space-y-3">
      <p
        className={cx("text-white text-center", {
          "text-sm sm:text-base lg:text-lg xl:text-xl": !large,
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
