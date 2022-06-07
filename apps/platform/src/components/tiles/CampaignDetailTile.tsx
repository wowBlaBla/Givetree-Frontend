import React, { FC } from "react";
import { BaseTile } from "./BaseTile";
import { SupportedPlatform } from "../../typed/enum/supportedPlatform";
import { PillBox } from "../PillBox";
import { LiveBadge } from "../badges/LiveBadge";
import { SocialGrid } from "../SocialGrid";

interface CampaignDetailTileProps {
  currency: SupportedPlatform;
  description?: string;
  floorPrice: number;
  isLive?: boolean;
  title: string;
  totalSupply: number;
  linkedinUrl?: string;
  websiteUrl?: string;
  twitterUrl?: string;
  discordUrl?: string;
  contractUrl?: string;
}

export const CampaignDetailTile: FC<CampaignDetailTileProps> = ({
  currency,
  title,
  description,
  totalSupply,
  floorPrice,
  isLive,
  websiteUrl,
  twitterUrl,
  discordUrl,
  contractUrl,
}) => (
  <BaseTile className="border bg-white">
    {isLive && (
      <LiveBadge
        className="absolute top-0 right-0 m-2.5 text-red-600"
        text="Event is live"
      />
    )}

    <h3 className="text-3xl sm:text-4xl xl:text-5xl font-bold">{title}</h3>

    <div className="flex flex-col mt-6 space-y-3 md:flex-row md:space-y-0 md:space-x-6">
      <PillBox title="Total items" value={totalSupply} />
      <PillBox title="Price from" value={floorPrice} currency={currency} />
    </div>

    <SocialGrid
      websiteUrl={websiteUrl}
      twitterUrl={twitterUrl}
      discordUrl={discordUrl}
      contractUrl={contractUrl}
    />

    <p className="mt-5 text-base lg:text-lg">{description}</p>
  </BaseTile>
);
