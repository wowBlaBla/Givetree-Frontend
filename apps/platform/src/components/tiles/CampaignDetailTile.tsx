import React, { FC } from "react";

import { VerifiedBadge } from "../badges/VerifiedBadge";
import { SocialGrid } from "../SocialGrid";
import { StatBox } from "../StatBox";
import { VerifiedBadgeType } from "../../typed/enum/verifiedBadgeType";
import { Campaign } from "../../typed/campaign";

interface CampaignDetailTileProps {
  campaign: Campaign;
}

export const CampaignDetailTile: FC<CampaignDetailTileProps> = ({ campaign }) => (
  <div className="grid gap-y-6">
    <div>
      <div className="flex space-x-0.5">
        <h3 className="text-3xl font-medium sm:text-4xl">{campaign.title}</h3>
        <VerifiedBadge
          isVerified={campaign.isVerified || false}
          type={VerifiedBadgeType.Collection}
          large
        />
      </div>
      <div className="flex space-x-0.5">
        <p>
          by{" "}
          <span className="font-medium text-brand-orange">
            {campaign.creators[0].name}
          </span>
        </p>
        <VerifiedBadge
          isVerified={campaign.creators[0].isVerified}
          type={VerifiedBadgeType.ContentCreator}
        />
      </div>
    </div>

    <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-12">
      <StatBox title="Total supply" value={campaign.totalSupply} />
      <StatBox
        title="Floor price"
        value={campaign.floorPrice}
        currency={campaign.currency}
      />
    </div>

    <div>
      <SocialGrid
        websiteUrl={campaign.websiteUrl}
        twitterUrl={campaign.twitterUrl}
        discordUrl={campaign.discordUrl}
        contractUrl={campaign.contractUrl}
      />
    </div>
  </div>
);
