/* eslint-disable @next/next/no-img-element */

import React, { FC } from "react";
import { VerifiedBadgeType } from "../../typed/enum/verifiedBadgeType";
import { VerifiedBadge } from "./VerifiedBadge";

interface ContentCreatorBadgeProps {
  avatarUrl: string;
  isVerified: boolean;
  name: string;
}

export const ContentCreatorBadge: FC<ContentCreatorBadgeProps> = ({
  avatarUrl,
  isVerified,
  name,
}) => (
  <div className="relative z-30 flex flex-col items-center justify-end space-y-2 ">
    <div className="relative w-12 h-12 sm:w-16 sm:h-16">
      <img
        className="border-[3px] border-gray-100 rounded-full"
        src={avatarUrl}
        alt={name}
      />
    </div>

    <div className="flex justify-center">
      <div className="inline-block space-x-0.5 text-center text-sm sm:text-base">
        by <span className="font-semibold text-brand-orange">{name}</span>
        <VerifiedBadge
          className="mb-1"
          isVerified={isVerified}
          type={VerifiedBadgeType.ContentCreator}
        />
      </div>
    </div>
  </div>
);
