import React, { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import { BackgroundAsset } from "../BackgroundAsset";
import { DarkBlend } from "../BoxBlends";
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
  <div className="flex justify-center items-center space-x-1 w-full text-xs xl:text-sm rounded-lg border border-white text-center p-1">
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
      className="relative w-full rounded-xl shadow-lg bg-brand-black select-none cursor-pointer overflow-hidden"
      onClick={handleNextLocation}
    >
      {isLive ? (
        <LiveBadge className="absolute top-0 right-0 m-2.5 text-white z-10" />
      ) : (
        <FeaturedBadge className="absolute top-0 right-0 m-2.5 z-10" text="Featured" />
      )}

      <div className="relative pt-full">
        <BackgroundAsset asset={campaign.media.campaignTilePreviewUrl} />
        <DarkBlend bottom small />
      </div>

      <div className="flex flex-col w-full rounded-lg justify-end bg-brand-black -mt-16">
        <ContentCreatorBadge
          avatarUrl={campaign.creators[0].media.previewUrl}
          name={campaign.creators[0].name}
        />

        <p className="text-center text-white text-lg sm:text-xl">{campaign.title}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full p-2 text-white mt-1">
          <ItemBox>
            <span>Total items</span>
            <span className="font-semibold">{campaign.totalSupply}</span>
          </ItemBox>
          <ItemBox>
            <span>
              Price from <b>{campaign.floorPrice}</b>
            </span>
            <CurrencyIcon currency={campaign.currency} className="w-3 h-3" />
          </ItemBox>
        </div>
      </div>
    </div>
  );
};
