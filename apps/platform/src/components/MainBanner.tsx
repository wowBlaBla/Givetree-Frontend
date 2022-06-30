import React, { FC } from "react";
import { PrimaryLink } from "./PrimaryCta";
import { AssetType, getAssetType } from "../utils/getAssetType";
import { BackgroundVideo } from "./BackgroundVideo";
import { BackgroundImage } from "./BackgroundImage";

interface MainBannerProps {
  backgroundAsset: string;
  title: string;
  subtitle: string;
  ctaLink1?: string;
  ctaLink1Text?: string;
  ctaLink2?: string;
  ctaLink2Text?: string;
}

export const MainBanner: FC<MainBannerProps> = ({
  backgroundAsset,
  title,
  subtitle,
  ctaLink1,
  ctaLink1Text,
  ctaLink2,
  ctaLink2Text,
}) => {
  const assetType = getAssetType(backgroundAsset);

  return (
    <div className="relative min-w-full min-h-full overflow-hidden sm:h-128">
      {assetType === AssetType.Video && (
        <BackgroundVideo asset={backgroundAsset} className="object-contain" />
      )}

      {assetType === AssetType.Image && (
        <BackgroundImage asset={backgroundAsset} className="min-h-full" />
      )}

      <div className="flex relative justify-center sm:justify-start items-center max-w-screen-xl min-h-full mx-auto py-16 px-3 z-10">
        <div className="w-full max-w-lg rounded-xl bg-brand-black bg-opacity-70 text-white">
          <div className="flex flex-col space-y-2 py-10 px-5">
            <h2 className="text-2xl sm:text-3xl">{title}</h2>
            <h4 className="text-sm sm:text-base">{subtitle}</h4>

            <div className="pt-8">
              {ctaLink1 && <PrimaryLink href={ctaLink1}>{ctaLink1Text}</PrimaryLink>}
              {ctaLink2 && <PrimaryLink href={ctaLink2}>{ctaLink2Text}</PrimaryLink>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
