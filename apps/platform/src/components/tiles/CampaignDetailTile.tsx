import React, { FC } from "react";
import { SupportedPlatform } from "../../typed/enum/supportedPlatform";
import { SocialGrid } from "../SocialGrid";
<<<<<<< HEAD
import { VerifiedBadge } from "../badges/VerifiedBadge";
import { StatBox } from "../StatBox";
import { VerifiedBadgeType } from "../../typed/enum/verifiedBadgeType";
=======
import { StatBox } from "../StatBox";
import { CollabBadge } from "../CollabBadge";
>>>>>>> feat: added collab tile

interface CampaignDetailTileProps {
  currency: SupportedPlatform;
  description?: string;
  artistName: string;
  artistThumbnail: string;
  charityName: string;
  charityThumbnail: string;
  floorPrice: number;
  isLive?: boolean;
  isVerified?: boolean;
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
  isVerified,
  totalSupply,
  floorPrice,
  websiteUrl,
  twitterUrl,
  discordUrl,
  contractUrl,
  artistThumbnail,
  charityName,
  charityThumbnail,
}) => (
  <>
    <div className="grid gap-y-6">
      <div>
        <div className="flex space-x-0.5">
          <h3 className="text-3xl font-medium sm:text-4xl">{title}</h3>
          {isVerified && <VerifiedBadge type={VerifiedBadgeType.Collection} large />}
        </div>

        <div className="mt-3">
          <CollabBadge
            artistName={artistName}
            artistThumbnail={artistThumbnail}
            charityName={charityName}
            charityThumbnail={charityThumbnail}
          />
        </div>
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
