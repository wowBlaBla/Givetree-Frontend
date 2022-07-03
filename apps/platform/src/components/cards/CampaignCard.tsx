import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

import { BackgroundImage } from "../BackgroundImage";
import { ContentCreatorBadge } from "../badges/ContentCreatorBadge";
import { LiveBadge } from "../badges/LiveBadge";
import { FeaturedBadge } from "../badges/FeaturedBadge";
import { VerifiedBadge } from "../badges/VerifiedBadge";
import { CurrencyIcon } from "../icons/CurrencyIcon";
import { Campaign } from "../../typed/campaign";
import { VerifiedBadgeType } from "../../typed/enum/verifiedBadgeType";
import { getEventStatus } from "../../utils/getEventStatus";

interface CampaignCardProps {
  campaign: Campaign;
}

export const CampaignCard: FC<CampaignCardProps> = ({ campaign }) => {
  const navigate = useNavigate();
  const isLive = getEventStatus(campaign.event.rounds).isLive;

  const handleNextLocation = () => navigate(`/campaign/${campaign.slug}`);

  return (
    <div
      className="relative w-full bg-white border border-gray-200 cursor-pointer rounded-xl hover:shadow-xl"
      onClick={handleNextLocation}
    >
      <div className="flex flex-col w-full h-full">
        <div className="absolute top-0 right-0 m-2.5 z-20">
          {isLive ? <LiveBadge /> : <FeaturedBadge text="Featured" />}
        </div>

        <div className="relative pt-full">
          <BackgroundImage
            imageAsset={campaign.media.campaignTilePreviewUrl}
            className="rounded-t-xl"
          />
        </div>

        <div className="flex flex-col justify-between w-full -mt-8 sm:-mt-10 rounded-lg">
          <ContentCreatorBadge
            avatarUrl={campaign.creators[0].media.previewUrl}
            name={campaign.creators[0].name}
            isVerified={campaign.isVerified}
          />

          <div className="flex justify-center">
            <h4 className="inline-block space-x-0.5 text-center text-gray-800 text-base sm:text-lg">
              <span>{campaign.title}</span>

              {campaign.isVerified && (
                <VerifiedBadge type={VerifiedBadgeType.Collection} />
              )}
            </h4>
          </div>

          <div className="flex justify-between w-full mt-2 py-2 px-2 sm:px-2.5 text-xs sm:text-sm">
            <div className="flex w-full space-x-1 text-gray-400">
              <span className="hidden sm:block">Total items</span>
              <span className="sm:hidden">Items</span>
              <b className="text-black">{campaign.totalSupply}</b>
            </div>

            <div className="flex items-center space-x-1 whitespace-nowrap">
              <span className="hidden text-gray-400 sm:block">Floor price</span>
              <CurrencyIcon currency={campaign.currency} className="w-3 h-3" />
              <b className="text-black">{campaign.floorPrice}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
