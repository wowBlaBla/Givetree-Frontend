import React, { FC } from "react";
import cx from "classnames";

import { BaseTile } from "./BaseTile";
import { CountdownTimer } from "../CountdownTimer";
import { EventRoundSectionTitle } from "../EventRoundSectionTitle";
import { LiveBadge } from "../badges/LiveBadge";
import { PillBox } from "../PillBox";
import { RoundType } from "../../typed/enum/eventType";
import { SupportedPlatform } from "../../typed/enum/supportedPlatform";
import { isEventRoundLive } from "../../utils/getEventStatus";
import { CampaignEventRound } from "../../typed/campaign-event";

interface EventRoundTileProps {
  round: CampaignEventRound;
  currency: SupportedPlatform;
  isFirstRound?: boolean;
}

export const EventRoundTile: FC<EventRoundTileProps> = ({
  round,
  currency,
  isFirstRound,
}) => {
  const isLive = isEventRoundLive(round.startDate, round.endDate);

  return (
    <BaseTile
      className={cx("mt-5 bg-white text-brand-black", {
        "border-[3px] border-red-600": isLive,
      })}
    >
      {isLive && (
        <div className="absolute top-0 right-0 p-2.5">
          <LiveBadge className="text-red-600" />
        </div>
      )}

      <div className="flex flex-col space-y-2">
        <EventRoundSectionTitle type={round.type} />

        {round.type === RoundType.WhitelistToken && (
          <p className="space-x-1 text-sm sm:text-base">
            <span>{round.whitelistCondition}</span>
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

        {((round.type !== RoundType.WhitelistToken && !isFirstRound) || isLive) && (
          <CountdownTimer
            className="mt-2 text-gray-800"
            startDate={round.startDate}
            endDate={round.endDate}
          />
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 lg:gap-4 mt-5">
        <PillBox title="Supply" value={round.supply} />
        <PillBox title="Max token" value={round.maxToken} />
        <PillBox title="Mint price" value={round.mintPrice} currency={currency} />
      </div>
    </BaseTile>
  );
};
