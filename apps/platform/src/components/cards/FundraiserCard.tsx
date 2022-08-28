import React, { FC } from "react";
import { useLocation } from "wouter";

import { BackgroundImage } from "../BackgroundImage";
// import { ContentCreatorBadge } from "../badges/ContentCreatorBadge";
// import { LiveBadge } from "../badges/LiveBadge";
// import { FeaturedBadge } from "../badges/FeaturedBadge";
// import { CurrencyIcon } from "../icons/CurrencyIcon";
import { Campaign } from "../../typed/campaign";
import { VerifiedBadge } from "../badges/VerifiedBadge";
import { VerifiedBadgeType } from "../../typed/enum/verifiedBadgeType";
// import { getEventStatus } from "../../utils/getEventStatus";

interface FundraiserCardProps {
  campaign: Campaign;
}

export const FundraiserCard: FC<FundraiserCardProps> = ({ campaign }) => {
  const [_location, setLocation] = useLocation();
  // const isLive = getEventStatus(campaign.event.rounds).isLive;

  const handleNextLocation = () => setLocation(`/collection/${campaign.slug}`);
  return (
    <div className="md:text-left text-center">
      <div
        className="relative w-full h-full bg-white inline-block cursor-pointer sm:max-w-229px hover:shadow-xl"
        onClick={handleNextLocation}
      >
        <div className="flex flex-col w-full h-full">
          <div className="relative">
            <BackgroundImage
              imageAsset={campaign.media.campaignTilePreviewUrl}
              className="rounded-t-xl"
            />
          </div>

          <div className="flex flex-col justify-between w-full rounded-b-xl border-black border-t-0 border">
            <div className="flex justify-between w-full p-5 text-xs sm:text-sm">
              <div className="flex w-full flex-col text-center">
                <span className="font-bold">{campaign.title}</span>
                <span>
                  {campaign.creators[0].name.replace('-', ' ')}
                  <VerifiedBadge
                    isVerified={campaign.isVerified || false}
                    type={VerifiedBadgeType.Collection}
                    className="ml-1 inline-block"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
