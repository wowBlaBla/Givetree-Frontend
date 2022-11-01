import React, { FC } from "react";
import { useLocation } from "wouter";

import { BackgroundImage } from "../BackgroundImage";
// import { ContentCreatorBadge } from "../badges/ContentCreatorBadge";
// import { LiveBadge } from "../badges/LiveBadge";
// import { FeaturedBadge } from "../badges/FeaturedBadge";
// import { CurrencyIcon } from "../icons/CurrencyIcon";
import { Campaign } from "../../typed/campaign";
// import { VerifiedBadge } from "../badges/VerifiedBadge";
// import { VerifiedBadgeType } from "../../typed/enum/verifiedBadgeType";
// import { SolanaIcon } from "../icons/cryptos/SolanaIcon";
import { SolanaColorIcon } from "../icons/SolanaColorIcon";
// import { getEventStatus } from "../../utils/getEventStatus";

interface CampaignCardProps {
  campaign: Campaign;
}

export const CampaignCard: FC<CampaignCardProps> = ({ campaign }) => {
  const [_location, setLocation] = useLocation();
  // const isLive = getEventStatus(campaign.event.rounds).isLive;

  const handleNextLocation = () => setLocation(`/collection/${campaign.slug}`);
  return (
    <div className="md:text-left text-center">
      <div
        className="relative w-full h-full bg-white inline-block cursor-pointer hover:shadow-xl rounded-xl border border-black"
        onClick={handleNextLocation}
      >
        <div className="flex flex-col w-full h-full">
          <div className="relative">
            <BackgroundImage
              imageAsset={campaign.media.campaignTilePreviewUrl}
              className="rounded-t-xl"
            />
          </div>

          <div className="flex flex-col justify-between w-full rounded-b-xl border-base-content border-opacity-25 border-t-0 border text-black">
            <div className="flex justify-between w-full p-5 text-xs sm:text-sm">
              <div className="flex w-full flex-col text-left">
                <span className="font-bold mb-3">{campaign.title}</span>
                <span>
                  {/* by {campaign.creators[0].name.replace('-', ' ')} */}
                  {/* <VerifiedBadge
                    isVerified={campaign.isVerified || false}
                    type={VerifiedBadgeType.Collection}
                    className="ml-1 inline-block"
                  /> */}
                </span>
                <span>Price</span>
                <div className="flex items-center mb-3">
                  <SolanaColorIcon className="w-6 mr-2" />
                  <span>SOL 2.9</span>
                </div>
                <span>Ends in 5 days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
