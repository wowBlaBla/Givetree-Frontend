import React, { FC } from "react";
import { useLocation } from "wouter";

import { BackgroundImage } from "../BackgroundImage";
// import { ContentCreatorBadge } from "../badges/ContentCreatorBadge";
// import { LiveBadge } from "../badges/LiveBadge";
// import { FeaturedBadge } from "../badges/FeaturedBadge";
// import { VerifiedBadge } from "../badges/VerifiedBadge";
// import { CurrencyIcon } from "../icons/CurrencyIcon";
import { Campaign } from "../../typed/campaign";
// import { VerifiedBadgeType } from "../../typed/enum/verifiedBadgeType";
// import { getEventStatus } from "../../utils/getEventStatus";

interface CampaignCardProps {
  campaign: Campaign;
}

export const CampaignCard: FC<CampaignCardProps> = ({ campaign }) => {
  const [_location, setLocation] = useLocation();
  // const isLive = getEventStatus(campaign.event.rounds).isLive;

  const handleNextLocation = () => setLocation(`/mints/${campaign.slug}`);

  return (
    <div className="md:text-left text-center">
      <div
        className="relative w-full bg-white border border-t-0 border-black rounded-2xl-1 inline-block cursor-pointer xxs:max-w-229px hover:shadow-xl"
        onClick={handleNextLocation}
      >
        <div className="flex flex-col w-full h-full">
          <div className="relative">
            <BackgroundImage
              imageAsset={campaign.media.campaignTilePreviewUrl}
              className="rounded-t-xl"
            />
          </div>

          <div className="flex flex-col justify-between w-full rounded-lg mt-1">
            <div className="flex justify-between w-full p-5 text-xs sm:text-sm">
              <div className="flex w-full space-x-1 flex-col text-left">
                <span className="font-bold">Freedom</span>
                <span>by Silviya Ivanova</span>
                <span className="hidden sm:block">Total items: {campaign.totalSupply}</span>
                <span>Blockchain: Solana</span>
                <span>Floor price: 2 SOL</span>
                <span>01d 04h 05m</span>
                <b className="text-black"></b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
