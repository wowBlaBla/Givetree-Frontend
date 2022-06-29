import React, { FC } from "react";
import cx from "classnames";

import { BaseTile } from "./BaseTile";
import { CountdownTimer } from "../CountdownTimer";
import { EventRoundSectionTitle } from "../EventRoundSectionTitle";
import { LiveBadge } from "../badges/LiveBadge";
import { PillBox } from "../PillBox";
import { EventRoundType } from "../../typed/enum/eventType";
import { SupportedPlatform } from "../../typed/enum/supportedPlatform";
import { isEventRoundLive } from "../../utils/getEventStatus";
import { CampaignEventRound } from "../../typed/campaign-event";
import { OutlineLink } from "../OutlineCta";
import { StatBox } from "../StatBox";
import { GradientDivider } from "../GradientDivider";
import { SocialLink } from "../SocialGrid";

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
        "border-[3px] border-brand-orange": isLive,
      })}
    >
      {isLive && (
        <div className="absolute top-0 right-0 p-2.5">
          <LiveBadge className="text-red-600" />
        </div>
      )}

      <div className="flex flex-col space-y-2">
        <EventRoundSectionTitle type={round.type} />

        <CountdownTimer
          className="mt-2 text-gray-800"
          startDate={round.startDate}
          endDate={round.endDate}
        />

        {round.type === EventRoundType.WhitelistToken && (
          <div>
            <p className="space-x-3 text-base font-light text-gray-500">
              {round.whitelistCondition}
            </p>
            <div className="flex flex-row-reverse mt-3">
              <SocialLink href="#">Learn more</SocialLink>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-2 pt-3 mt-5 border-t border-gray-200 sm:grid-cols-3 lg:gap-4">
        <StatBox title="Supply" value={round.supply} />
        <StatBox title="Max token" value={round.maxToken} />
        <StatBox title="Mint price" value={round.mintPrice} currency={currency} />
      </div>
    </BaseTile>
  );
};
