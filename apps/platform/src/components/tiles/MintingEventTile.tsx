import React, { FC } from "react";
import { BaseTile } from "./BaseTile";
import { CountdownTimer } from "../CountdownTimer";
import { EventRoundTile } from "./EventRoundTile";
import { CampaignEventRound } from "../../typed/campaign-event";
import { SupportedPlatform } from "../../typed/enum/supportedPlatform";
import { getEventStatus } from "../../utils/getEventStatus";

interface MintingEventTileProps {
  rounds: CampaignEventRound[];
  currency: SupportedPlatform;
}

export const MintingEventTile: FC<MintingEventTileProps> = ({ rounds, currency }) => {
  const event = getEventStatus(rounds);

  return (
    <BaseTile className="bg-brand-black text-white">
      <h3 className="text-2xl lg:text-3xl font-semibold">Minting event</h3>

      {!event.isLive && (
        <CountdownTimer
          className="sm:whitespace-nowrap space-x-2 mt-3 text-white text-lg sm:text-xl xl:text-2xl font-semibold"
          startDate={event.startDate}
          endDate={event.endDate}
        />
      )}

      <EventRoundTile round={rounds[0]} currency={currency} isFirstRound />

      <h6 className="my-4 sm:my-6 text-lg sm:text-xl font-medium">Followed by</h6>

      {rounds.map((round, idx) => {
        if (idx !== 0) {
          return (
            <div key={idx}>
              <EventRoundTile round={round} currency={currency} />
            </div>
          );
        }
      })}
    </BaseTile>
  );
};
