import React, { FC } from "react";
import { BackgroundImage } from "./BackgroundImage";
import { DarkBlend } from "./BoxBlends";
import { FeaturedBadge } from "./FeaturedBadge";
import { CurrencyIcon } from "./icons/CurrencyIcon";
import { SupportedPlatform } from "../typed/enum/supportedPlatform";
import { VerificationBadge } from "./VerificationBadge";

interface CampaignBannerHeaderProps {
  backgroundImage: string;
  campaignTitle: string;
  isFeatured?: boolean;
  floorPrice: number;
  totalSupply: number;
  currency: SupportedPlatform;
  isVerified?: boolean;
}

export const CampaignBannerHeader: FC<CampaignBannerHeaderProps> = ({
  backgroundImage,
  campaignTitle,
  isFeatured,
  floorPrice,
  totalSupply,
  currency,
  isVerified,
}) => {
  return (
    <div className="relative min-w-full h-96 xl:h-128 py-5 sm:py-8 overflow-hidden">
      <BackgroundImage imageAsset={backgroundImage} />

      <div className="absolute bottom-0 w-full z-10">
        <DarkBlend bottom xlarge />
      </div>

      <div className="flex items-end w-full min-h-full mx-auto max-w-screen-3xl">
        <div className="flex flex-col space-y-2 sm:space-y-3 px-3 text-white z-20">
          {isFeatured && (
            <div className="relative flex">
              <FeaturedBadge text="Featured Release" large />
            </div>
          )}

          <h3 className="font-bold text-4xl sm:text-4xl xl:text-5xl">
            This is <span className="text-brand-orange">{campaignTitle}</span>
          </h3>

          <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-5 text-base sm:text-lg xl:text-2xl font-medium">
            <h3>Total items {totalSupply}</h3>

            <h3 className="flex items-center whitespace-nowrap">
              Starting from {floorPrice}{" "}
              {<CurrencyIcon className="w-5 h-5 mx-1 xl:mx-2" currency={currency} />} per
              mint
            </h3>
          </div>

          {isVerified && (
            <div className="flex">
              <VerificationBadge text="Verified Collection" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
