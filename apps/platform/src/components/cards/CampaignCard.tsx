import React, { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import { BackgroundImage } from "../BackgroundImage";
import { ContentCreatorBadge } from "../badges/ContentCreatorBadge";
import { LiveBadge } from "../badges/LiveBadge";
import { FeaturedBadge } from "../badges/FeaturedBadge";
import { CurrencyIcon } from "../icons/CurrencyIcon";
import { Campaign } from "../../typed/campaign";
import { getEventStatus } from "../../utils/getEventStatus";
import { StatBox } from "../StatBox";

interface ItemBoxProps {
  children: ReactNode;
}

const ItemBox: FC<ItemBoxProps> = ({ children }) => (
  <div className="flex items-center justify-center w-full p-1 space-x-1 text-xs text-center rounded-lg xl:text-sm">
    {children}
  </div>
);

interface CampaignCardProps {
  campaign: Campaign;
}

export const CampaignCard: FC<CampaignCardProps> = ({ campaign }) => {
  const navigate = useNavigate();
  const isLive = getEventStatus(campaign.event.rounds).isLive;

  const handleNextLocation = () => navigate(`/campaign/${campaign.slug}`);

  return (
    <div
      className="relative w-full overflow-hidden bg-white border border-gray-200 cursor-pointer select-none rounded-xl"
      onClick={handleNextLocation}
    >
      <div className="absolute top-0 right-0 m-2.5 z-20">
        {isLive ? <LiveBadge /> : <FeaturedBadge text="Featured" />}
      </div>

      <div className="relative pt-full">
        <BackgroundImage asset={campaign.media.campaignTilePreviewUrl} />
      </div>

      <div className="flex flex-col justify-between w-full -mt-6 rounded-lg sm:-mt-8 xl:-mt-12">
        <div>
          <ContentCreatorBadge
            avatarUrl={campaign.creators[0].media.previewUrl}
            name={campaign.creators[0].name}
          />

          <h4 className="text-base text-center text-gray-800 sm:text-lg">
            {campaign.title}
          </h4>
        </div>

        <div className="flex justify-between w-full mt-2 py-2 px-2 sm:px-2.5 text-xs sm:text-sm">
          <div className="flex w-full space-x-1">
            <span className="hidden text-gray-400 sm:block">Total items</span>
            <span className="text-gray-400 sm:hidden">Items:</span>
            <b>{campaign.totalSupply}</b>
          </div>
          <div className="flex items-center space-x-1 whitespace-nowrap">
            <span className="hidden text-gray-400 sm:block">Floor price</span>
            <CurrencyIcon currency={campaign.currency} className="w-3 h-3" />
            <b>{campaign.floorPrice}</b>
          </div>
        </div>
      </div>
    </div>
  );
};
