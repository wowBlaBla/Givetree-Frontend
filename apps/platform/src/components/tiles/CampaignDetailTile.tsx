import React, { FC } from "react";
import { BaseTile } from "./BaseTile";
import { SupportedPlatform } from "../../typed/enum/supportedPlatform";
import { PillBox } from "../PillBox";
import { LiveBadge } from "../badges/LiveBadge";
import { SocialGrid } from "../SocialGrid";
import { VerificationBadge } from "../badges/VerificationBadge";
import { FeaturedBadge } from "../badges/FeaturedBadge";
import { GradientDivider } from "../GradientDivider";
import { StatBox } from "../StatBox";

interface CampaignDetailTileProps {
  currency: SupportedPlatform;
  description?: string;
  artistName: string;
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
  artistName,
  totalSupply,
  floorPrice,
  isLive,
  websiteUrl,
  twitterUrl,
  discordUrl,
  contractUrl,
}) => (
  <>
    <div className="flex">
      <VerificationBadge text="Verified" />
    </div>

    <div className="grid gap-y-6">
      <div>
        <h3 className="mt-3 text-3xl font-medium sm:text-4xl">{title}</h3>
        <p>
          by <span className="font-medium text-brand-orange">{artistName}</span>
        </p>
      </div>

      <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-12">
        <StatBox title="Total supply" value={totalSupply} />
        <StatBox title="Floor price" value={floorPrice} currency={currency} />
      </div>

      <div>
        <SocialGrid
          websiteUrl={websiteUrl}
          twitterUrl={twitterUrl}
          discordUrl={discordUrl}
          contractUrl={contractUrl}
        />
      </div>
    </div>
  </>
);
