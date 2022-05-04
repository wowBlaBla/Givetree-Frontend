/* eslint-disable @next/next/no-img-element */

import React, { FC } from "react";

interface CreatorBadgeProps {
  avatarUrl: string;
  name: string;
}

export const CreatorBadge: FC<CreatorBadgeProps> = (props) => (
  <div className="flex justify-end relative flex-col items-center -mt-24 space-y-2 z-30">
    <div className="w-12 h-12 sm:w-20 sm:h-20">
      <img className="rounded-full" src={props.avatarUrl} alt={props.name} />
    </div>

    <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white">
      by <span className="font-semibold text-brand-orange">{props.name}</span>
    </p>
  </div>
);
