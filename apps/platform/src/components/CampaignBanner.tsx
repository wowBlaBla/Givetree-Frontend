/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import { PrimaryLink } from "./PrimaryCta";
import { AssetType, getAssetType } from "../utils/getAssetType";
import { CollabBadge } from "./badges/CollabBadge";
import { CauseBadge } from "./badges/CauseBadge";

interface CampaignBannerProps {
  backgroundAsset: string;
  title: string;
  subtitle: string;
  ctaLink?: string;
  ctaLinkText?: string;
  artistName: string;
  artistThumbnail: string;
  charityName: string;
  charityThumbnail: string;
  causes: string[];
}

export const CampaignBanner: FC<CampaignBannerProps> = ({
  backgroundAsset,
  title,
  subtitle,
  ctaLink,
  ctaLinkText,
  artistName,
  artistThumbnail,
  charityName,
  charityThumbnail,
  causes,
}) => {
  const assetType = getAssetType(backgroundAsset);

  return (
    <div className="relative w-full max-w-screen-xl min-h-full mx-auto overflow-hidden md:px-5">
      <div className="grid grid-cols-1 border-b md:grid-cols-2 md:border md:rounded-xl">
        <div className="relative z-10 flex items-center justify-center order-2 max-w-screen-xl min-h-full px-3 bg-white sm:justify-start md:py-16 md:rounded-l-xl md:order-1">
          <div className="flex flex-col w-full px-5 py-10 space-y-5 text-black">
            <h2 className="flex flex-col space-y-2 text-2xl font-semibold sm:text-5xl">
              <span>{title}</span>
            </h2>

            <h4 className="text-sm text-gray-500 sm:text-lg">{subtitle}</h4>

            <div className="flex gap-3">
              {causes.map((cause, idx) => (
                <CauseBadge key={idx} cause={cause} />
              ))}
            </div>

            <CollabBadge
              artistName={artistName}
              artistThumbnail={artistThumbnail}
              charityName={charityName}
              charityThumbnail={charityThumbnail}
            />

            <div className="pt-3">
              {ctaLink && (
                <PrimaryLink href={ctaLink} large>
                  {ctaLinkText}
                </PrimaryLink>
              )}
            </div>
          </div>
        </div>

        <div className="relative order-1 md:order-2">
          {assetType === AssetType.Video && (
            <div className="inset-0 z-10 w-auto min-w-full min-h-full md:absolute bg-brand-black md:rounded-r-xl">
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
                className="absolute inset-0 hidden w-full min-h-full bg-center bg-no-repeat bg-cover border border-gray-200 md:flex rounded-r-xl"
                style={{ backgroundImage: `url(${backgroundAsset})` }}
              />
              <img
                alt="banner image"
                className="block object-fill w-auto min-w-full min-h-full md:hidden"
                src={backgroundAsset}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
