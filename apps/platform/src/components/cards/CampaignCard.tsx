import React, { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import { BackgroundImage } from "../BackgroundImage";
import { ContentCreatorBadge } from "../badges/ContentCreatorBadge";
import { LiveBadge } from "../badges/LiveBadge";
import { FeaturedBadge } from "../badges/FeaturedBadge";
import { CurrencyIcon } from "../icons/CurrencyIcon";
import { Campaign } from "../../typed/campaign";
import { getEventStatus } from "../../utils/getEventStatus";

interface ItemBoxProps {
  children: ReactNode;
}

const ItemBox: FC<ItemBoxProps> = ({ children }) => (
  <div className="flex justify-center items-center space-x-1 w-full text-xs xl:text-sm rounded-lg text-center p-1">
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
      className="relative w-full rounded-xl border border-gray-200 bg-white select-none cursor-pointer overflow-hidden"
      onClick={handleNextLocation}
    >
      <div className="absolute top-0 right-0 m-2.5 z-20">
        {isLive ? <LiveBadge /> : <FeaturedBadge text="Featured" />}
      </div>

      <div className="relative pt-full">
        <BackgroundImage asset={campaign.media.campaignTilePreviewUrl} />
      </div>

      <div className="flex flex-col w-full rounded-lg justify-end -mt-6 sm:-mt-8 xl:-mt-10">
        <ContentCreatorBadge
          avatarUrl={campaign.creators[0].media.previewUrl}
          name={campaign.creators[0].name}
        />

        <p className="text-center text-lg sm:text-xl">{campaign.title}</p>

        <div className="grid grid-cols-2 gap-2 w-full mt-1 pt-auto p-2">
          <ItemBox>
            <span className="hidden sm:block">Total items</span>
            <span className="sm:hidden">Items:</span>
            <b>{campaign.totalSupply}</b>
          </ItemBox>
          <ItemBox>
            <div className="flex space-x-1 items-center">
              <span className="hidden sm:block">Price from</span>
              <CurrencyIcon currency={campaign.currency} className="w-3 h-3" />
              <b>{campaign.floorPrice}</b>
            </div>
          </ItemBox>
        </div>
      </div>
    </div>
  );
};
