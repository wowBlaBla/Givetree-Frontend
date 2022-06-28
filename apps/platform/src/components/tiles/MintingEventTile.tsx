import React, { FC } from "react";
import { BaseTile } from "./BaseTile";
import { CountdownTimer } from "../CountdownTimer";
import { EventRoundTile } from "./EventRoundTile";
import { CampaignEventRound } from "../../typed/campaign-event";
import { SupportedPlatform } from "../../typed/enum/supportedPlatform";
import { getEventStatus } from "../../utils/getEventStatus";
import { OutlineLink } from "../OutlineCta";
import { PrimaryButton, PrimaryLink } from "../PrimaryCta";

interface MintingEventTileProps {
  rounds: CampaignEventRound[];
  currency: SupportedPlatform;
  campaignSlug: string;
}

export const MintingEventTile: FC<MintingEventTileProps> = ({
  rounds,
  currency,
  campaignSlug,
}) => {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-row items-center">
        <div className="flex-grow">
          <h3 className="text-xl font-semibold">Minting event</h3>
        </div>
        <OutlineLink href="https://givetree.gitbook.io/givetree-content-creator-onboarding-info-pack/">
          Mint Guide
        </OutlineLink>
      </div>

      {rounds.map((round, idx) => (
        <div key={idx}>
          <EventRoundTile round={round} currency={currency} />
        </div>
      ))}

      <div className="flex justify-center mt-5">
        <PrimaryLink href={`/minting/${campaignSlug}`}>View mint event</PrimaryLink>
      </div>
    </div>
  );
};
