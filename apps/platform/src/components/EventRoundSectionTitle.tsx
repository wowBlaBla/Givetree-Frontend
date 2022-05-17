import React, { FC } from "react";

import { GlobeIcon } from "./icons/GlobeIcon";
import { LockIcon } from "./icons/LockIcon";
import { RoundType } from "../typed/enum/eventType";

interface EventRoundSectionTitleProps {
  type: RoundType | string;
}

export const EventRoundSectionTitle: FC<EventRoundSectionTitleProps> = ({ type }) => {
  const roundType = RoundType[type as keyof typeof RoundType];

  switch (roundType) {
    case RoundType.PublicSale:
      return (
        <div className="flex items-center space-x-1">
          <GlobeIcon className="w-5 h-5" />
          <h4 className="text-lg sm:text-xl font-semibold">{RoundType.PublicSale}</h4>
        </div>
      );
    case RoundType.WhitelistToken:
      return (
        <div className="flex items-center space-x-1">
          <LockIcon className="w-5 h-5" />
          <h4 className="text-lg sm:text-xl font-semibold">{RoundType.WhitelistToken}</h4>
        </div>
      );
    default:
      return (
        <div className="flex items-center space-x-1">
          <h4 className="text-lg sm:text-xl font-semibold">{type}</h4>
        </div>
      );
  }
};
