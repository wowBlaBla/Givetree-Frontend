import React, { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { kebabCase } from "lodash";

import { BackgroundImage } from "../BackgroundImage";
import { DarkBlend } from "../BoxBlends";
import { ContentCreatorBadge } from "../ContentCreatorBadge";
import { LiveBadge } from "../LiveBadge";
import { FeaturedBadge } from "../FeaturedBadge";
import { CurrencyIcon } from "../icons/CurrencyIcon";
import { Campaign } from "../../typed/campaign";

interface ItemBoxProps {
  children: ReactNode;
}

const ItemBox: FC<ItemBoxProps> = ({ children }) => (
  <div className="flex justify-center items-center space-x-1 w-full text-xs xl:text-sm rounded-md border border-white text-center p-1">
    {children}
  </div>
);

interface CampaignCardProps {
  campaign: Campaign;
}

export const CampaignCard: FC<CampaignCardProps> = ({ campaign }) => {
  const navigate = useNavigate();

  const onClick = () => {
    return navigate(`campaign/${kebabCase(campaign.title)}`);
  };

  return (
    <div
      onClick={onClick}
      className="relative w-full rounded-xl shadow-lg bg-brand-black select-none cursor-pointer overflow-hidden"
    >
      <div className="relative pt-full">
        <BackgroundImage
          className="rounded-t-xl"
          imageAsset={campaign.media.campaignTilePreviewUrl}
        />
        <FeaturedBadge className="my-2.5 mx-2" text="Featured" />
        {campaign.startMintDate < new Date() && (
          <LiveBadge className="absolute top-0 right-0 m-2.5 text-white" />
        )}
        <DarkBlend bottom small />
      </div>

      <div className="flex flex-col w-full rounded-lg justify-end bg-brand-black mt-12">
        <ContentCreatorBadge
          avatarUrl={campaign.creators[0].media.previewUrl}
          name={campaign.creators[0].name}
        />

        <div className="flex flex-col justify-center items-center space-y-1 text-white pt-1 z-10">
          <p className="text-lg sm:text-xl">{campaign.title}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full p-2">
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
    </div>
  );
};
