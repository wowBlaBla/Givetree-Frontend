import React, { FC } from "react";
import { BackgroundImage } from "./BackgroundImage";
import { BackgroundVideo } from "./BackgroundVideo";
import { FeaturedBadge } from "./badges/FeaturedBadge";
import { AssetType, getAssetType } from "../utils/getAssetType";
import { BaseTile } from "./tiles/BaseTile";
import { Cause } from "../typed/enum/cause";

interface CampaignBannerHeaderProps {
  backgroundImage: string;
  charityName: string;
  charityImage: string;
  causes: Cause[];
  description: string;
  campaignTitle: string;
  isFeatured?: boolean;
}

export const CampaignBannerHeader: FC<CampaignBannerHeaderProps> = ({
  backgroundImage,
  campaignTitle,
  isFeatured,
  description,
  charityImage,
  charityName,
  causes,
}) => {
  const assetType = getAssetType(backgroundImage);

  return (
    <div className="relative min-w-full overflow-hidden">
      {assetType === AssetType.Video && (
        <BackgroundVideo videoAsset={backgroundImage} className="object-contain" />
      )}

      {assetType === AssetType.Image && (
        <BackgroundImage imageAsset={backgroundImage} className="min-h-full" />
      )}

      <div className="absolute bottom-0 z-10 w-full h-full bg-black opacity-60"></div>

      <div className="relative flex items-end max-w-screen-xl min-h-full px-3 py-5 mx-auto gap-x-5">
        <div className="z-20 flex flex-col flex-1 space-y-2 text-white sm:space-y-3">
          {isFeatured && (
            <div className="relative flex">
              <FeaturedBadge text="Featured release" />
            </div>
          )}

          <h3 className="text-4xl font-semibold sm:text-4xl xl:text-5xl">
            This is <span className="text-brand-orange ">{campaignTitle}</span>
          </h3>
          <p className="text-lg font-light">{description}</p>
        </div>

        <div className="z-20 w-56">
          <BaseTile className="bg-white">
            <div className="flex flex-col items-center">
              <p className="text-sm text-gray-400">Nominated charity</p>

              <div className="relative flex justify-center w-24 h-24 mx-auto mt-2">
                <BackgroundImage
                  asset={charityImage}
                  className="w-full rounded-lg object-fit"
                />
              </div>
              <p className="mt-2 text-sm text-center text-gray-800">{charityName}</p>

              <span className="px-3 py-1 mt-2 text-sm font-medium text-green-800 bg-green-100 rounded">
                {causes[0]}
              </span>
            </div>
          </BaseTile>
        </div>
      </div>
    </div>
  );
};
