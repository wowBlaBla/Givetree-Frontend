import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { kebabCase } from "lodash";

import { BackgroundImage } from "../BackgroundImage";
import { DarkBlendTop } from "../BoxBlends";
import { CreatorBadge } from "../CreatorBadge";
import { LiveBadge } from "../LiveBadge";
import { FeaturedBadge } from "../FeaturedBadge";
import { CurrencyIcon } from "../icons/CurrencyIcon";
import { Campaign } from "../../typed/campaign";

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
      className="relative w-full rounded-md shadow-lg bg-brand-black select-none cursor-pointer"
    >
      <div className="relative pt-full">
        <BackgroundImage
          className="rounded-md"
          imageAsset={campaign.media.campaignTilePreviewUrl}
        />
        <FeaturedBadge className="my-2.5 mx-2" text="Featured" />
        {campaign.startMintDate < new Date() && (
          <LiveBadge className="absolute top-0 right-0 m-2.5 text-white" />
        )}
        <DarkBlendTop />
      </div>

      <div className="flex flex-col w-full rounded-md justify-end bg-brand-black">
        <CreatorBadge
          avatarUrl={campaign.creators[0].media.previewUrl}
          name={campaign.creators[0].name}
        />

        <div className="flex flex-col items-center space-y-1 text-white pt-1 z-10">
          <p className="text-xl sm:text-2xl">{campaign.title}</p>
          <p className="text-base sm:text-xl"></p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full p-2">
            <div className="w-full text-xs xl:text-sm  rounded border border-white text-center p-1">
              Total items <b>{campaign.totalSupply}</b>
            </div>

            <div className="flex justify-center items-center space-x-1 whitespace-nowrap w-full text-xs xl:text-sm rounded border border-white text-center p-1">
              <span>
                Price from <b>{campaign.floorPrice}</b>
              </span>
              <CurrencyIcon currency={campaign.currency} className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
