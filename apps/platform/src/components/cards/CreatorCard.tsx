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
import { OwnerAvatar } from "../OwnerAvatar";
// import { getEventStatus } from "../../utils/getEventStatus";

interface FundraiserCardProps {
  campaign: Campaign;
}

export const CreatorCard: FC<FundraiserCardProps> = ({ campaign }) => {
  const [_location, setLocation] = useLocation();
  // const isLive = getEventStatus(campaign.event.rounds).isLive;

  const handleNextLocation = () => setLocation(`/explore/creators/${campaign.slug}`);
  return (
    <div className="md:text-left text-center">
      <div
        className="bg-[#E9E9E9] relative w-full h-full inline-block cursor-pointer shadow-normal hover:shadow-xl rounded-xl"
        onClick={handleNextLocation}
      >
        <div className="flex flex-col w-full h-full">
          <div className="relative">
            <BackgroundImage
              imageAsset={campaign.media.campaignTilePreviewUrl}
              className="rounded-t-xl"
              includeBorder
            />
          </div>

          <div className="flex flex-col justify-between w-full rounded-b-xl border-base-content border-opacity-25 border-t-0 border h-28 relative">
            <OwnerAvatar
              src={campaign.creators[0].media.previewUrl}
              alt={campaign.creators[0].name}
            />
            <div className="flex justify-between w-full p-5 py-10 text-xs sm:text-sm text-black">
              <div className="flex w-full flex-col text-left">
                <span className="font-bold">
                  {campaign.creators[0].name.replace('-', ' ')}
                  <VerifiedBadge
                    isVerified={campaign.isVerified || false}
                    type={VerifiedBadgeType.Collection}
                    className="ml-1 inline-block"
                  />
                </span>
                <span>Australia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
