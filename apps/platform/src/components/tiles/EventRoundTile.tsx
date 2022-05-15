import React, { FC } from "react";
import cx from "classnames";

import { BaseTile } from "./BaseTile";
import { CountdownTimer } from "../CountdownTimer";
import { EventRoundTitle } from "../EventRoundTitle";
import { LiveBadge } from "../badges/LiveBadge";
import { PillBox } from "../PillBox";
import { RoundType } from "../../typed/enum/eventType";
import { SupportedPlatform } from "../../typed/enum/supportedPlatform";
import { isEventLive } from "../../utils/getEventStatus";

interface EventRoundTileProps {
  type: RoundType;
  whitelistCondition?: string;
  startDate: Date | number;
  endDate: Date | number;
  supplyCount: number;
  maxToken: number;
  mintPrice: number;
  currency: SupportedPlatform;
  isFirstRound?: boolean;
}

export const EventRoundTile: FC<EventRoundTileProps> = ({
  type,
  whitelistCondition,
  startDate,
  endDate,
  supplyCount,
  maxToken,
  mintPrice,
  currency,
  isFirstRound,
}) => {
  const isLive = isEventLive(new Date(startDate), new Date(endDate));

  return (
    <BaseTile
      className={cx("relative mt-5 bg-white text-brand-black", {
        "border-[3px] border-red-600": isLive,
      })}
    >
      {isLive && (
        <div className="absolute top-0 right-0 p-2.5">
          <LiveBadge className="text-red-600" />
        </div>
      )}

      <div className="flex flex-col space-y-2">
        <EventRoundTitle type={type} />

        {type === RoundType.WhitelistToken && (
          <p className="space-x-1 text-sm sm:text-base">
            <span>{whitelistCondition}</span>
            <a
              className="text-brand-orange text-sm sm:text-base transition-hover hover:underline"
              href="#"
              rel="noreferrer"
              target="_blank"
            >
              Learn more
            </a>
          </p>
        )}

        {((type !== RoundType.WhitelistToken && !isFirstRound) || isLive) && (
          <CountdownTimer
            className="mt-2 text-gray-800"
            startDate={startDate}
            endDate={endDate}
          />
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 lg:gap-4 mt-5">
        <PillBox title="Supply" value={supplyCount} />
        <PillBox title="Max Token" value={maxToken} />
        <PillBox title="Mint Price" value={mintPrice} currency={currency} />
      </div>
    </BaseTile>
  );
};
