import React, { FC } from "react";
import { BaseTile } from "./BaseTile";
import { CountdownTimer } from "../CountdownTimer";
import { EventRoundTile } from "./EventRoundTile";
import { CampaignEventRound } from "../../typed/campaign-event";
import { SupportedPlatform } from "../../typed/enum/supportedPlatform";

interface MintingEventTileProps {
  startDate: Date;
  endDate: Date;
  rounds: CampaignEventRound[];
  currency: SupportedPlatform;
}

export const MintingEventTile: FC<MintingEventTileProps> = ({
  rounds,
  startDate,
  endDate,
  currency,
}) => {
  const hasMintStarted = startDate < new Date();

  return (
    <BaseTile className="w-full bg-brand-black text-white">
      <h3 className="text-2xl lg:text-3xl font-semibold">Minting event</h3>

      {!hasMintStarted && (
        <CountdownTimer
          className="sm:whitespace-nowrap space-x-2 mt-3 text-white text-lg sm:text-xl xl:text-2xl font-semibold"
          startDate={startDate}
          endDate={endDate}
        />
      )}

      <EventRoundTile
        type={rounds[0].type}
        whitelistCondition={rounds[0].whitelistCondition}
        supplyCount={rounds[0].supply}
        maxToken={rounds[0].maxLimit}
        mintPrice={rounds[0].mintPrice}
        startDate={rounds[0].startDate}
        endDate={rounds[0].endDate}
        currency={currency}
        isFirstRound
      />

      <h6 className="my-4 sm:my-6 text-lg sm:text-xl font-medium">Followed by</h6>

      {rounds.map((round, idx) => {
        if (idx !== 0) {
          return (
            <div key={idx}>
              <EventRoundTile
                type={round.type}
                whitelistCondition={round.whitelistCondition}
                supplyCount={round.supply}
                maxToken={round.maxLimit}
                mintPrice={round.mintPrice}
                startDate={round.startDate}
                endDate={round.endDate}
                currency={currency}
              />
            </div>
          );
        }
      })}
    </BaseTile>
  );
};
