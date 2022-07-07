import React, { FC } from "react";
import { EventRoundTile } from "./EventRoundTile";
import { CampaignEventRound } from "../../typed/campaign-event";
import { SupportedPlatform } from "../../typed/enum/supportedPlatform";
import { ExternalOutlineLink } from "../OutlineCta";

interface MintingEventTileProps {
  rounds: CampaignEventRound[];
  currency: SupportedPlatform;
}

export const MintingEventTile: FC<MintingEventTileProps> = ({ rounds, currency }) => {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-row items-center">
        <div className="flex-grow">
          <h3 className="text-xl font-semibold">Minting event</h3>
        </div>
        <ExternalOutlineLink href="https://givetree.gitbook.io/givetree-content-creator-onboarding-info-pack/">
          Mint Guide
        </ExternalOutlineLink>
      </div>

      {rounds.map((round, idx) => (
        <div key={idx}>
          <EventRoundTile round={round} currency={currency} />
        </div>
      ))}
    </div>
  );
};
