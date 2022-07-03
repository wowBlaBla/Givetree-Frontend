/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import { PrimaryLink } from "./PrimaryCta";
import { AssetType, getAssetType } from "../utils/getAssetType";

interface MainBannerProps {
  backgroundAsset: string;
  title: string;
  subtitle: string;
  ctaLink?: string;
  ctaLinkText?: string;
}

export const MainBanner: FC<MainBannerProps> = ({
  backgroundAsset,
  title,
  subtitle,
  ctaLink,
  ctaLinkText,
}) => {
  const assetType = getAssetType(backgroundAsset);

  return (
    <div className="relative w-full max-w-screen-xl min-h-full overflow-hidden mx-auto md:px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 border-b md:border md:rounded-xl">
        <div className="flex relative justify-center sm:justify-start items-center max-w-screen-xl min-h-full mx-auto md:py-16 px-3 bg-white md:rounded-l-xl z-10 order-2 md:order-1">
          <div className="flex flex-col space-y-2 py-10 px-5 w-full text-black">
            <h2 className="flex flex-col space-y-2 font-semibold text-2xl sm:text-5xl">
              <span>{title}</span>
            </h2>

            <h4 className="text-sm sm:text-lg">{subtitle}</h4>

            <div className="pt-3">
              {ctaLink && <PrimaryLink href={ctaLink}>{ctaLinkText}</PrimaryLink>}
            </div>
          </div>
        </div>

        <div className="relative order-1 md:order-2">
          {assetType === AssetType.Video && (
            <div className="md:absolute inset-0 w-auto min-w-full min-h-full bg-brand-black z-10 md:rounded-r-xl">
              <video
                autoPlay
                loop
                muted
                className="object-fill w-auto min-w-full min-h-full md:rounded-r-xl"
              >
                <source src={backgroundAsset} type="video/mp4" />
              </video>
            </div>
          )}

          {assetType === AssetType.Image && (
            <>
              <div
                className="hidden md:flex absolute inset-0 bg-cover bg-center bg-no-repeat w-full min-h-full border-gray-200 border rounded-r-xl"
                style={{ backgroundImage: `url(${backgroundAsset})` }}
              />
              <img
                alt="banner image"
                className="block md:hidden object-fill w-auto min-w-full min-h-full"
                src={backgroundAsset}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
