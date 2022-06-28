import React, { FC } from "react";
import { BackgroundImage } from "./BackgroundImage";
import { BackgroundVideo } from "./BackgroundVideo";
import { DarkBlendBottom } from "./BoxBlends";
import { FeaturedBadge } from "./badges/FeaturedBadge";
import { CurrencyIcon } from "./icons/CurrencyIcon";
import { SupportedPlatform } from "../typed/enum/supportedPlatform";
import { VerificationBadge } from "./badges/VerificationBadge";
import { AssetType, getAssetType } from "../utils/getAssetType";
import { GradientDivider } from "./GradientDivider";
import { SocialGrid } from "./SocialGrid";

interface CampaignBannerHeaderProps {
  backgroundImage: string;
  description: string;
  campaignTitle: string;
  isFeatured?: boolean;
  floorPrice: number;
  totalSupply: number;
  currency: SupportedPlatform;
  isVerified?: boolean;
  websiteUrl?: string;
  twitterUrl?: string;
  discordUrl?: string;
  contractUrl?: string;
}

export const CampaignBannerHeader: FC<CampaignBannerHeaderProps> = ({
  backgroundImage,
  campaignTitle,
  isFeatured,
  description,
  floorPrice,
  totalSupply,
  currency,
  isVerified,
  websiteUrl,
  twitterUrl,
  discordUrl,
  contractUrl,
}) => {
  const assetType = getAssetType(backgroundImage);

  return (
    <div className="relative min-w-full py-5 overflow-hidden h-72 sm:py-8">
      {assetType === AssetType.Video && (
        <BackgroundVideo asset={backgroundImage} className="object-contain" />
      )}

      {assetType === AssetType.Image && (
        <BackgroundImage asset={backgroundImage} className="min-h-full" />
      )}

      <div className="absolute bottom-0 z-10 w-full h-full bg-black opacity-60"></div>

      <div className="flex items-end w-full max-w-screen-xl min-h-full mx-auto">
        <div className="z-20 flex flex-col flex-1 px-3 space-y-2 text-white sm:space-y-3">
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
      </div>
    </div>
  );
};
