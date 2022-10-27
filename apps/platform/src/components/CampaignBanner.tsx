/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import { AssetType, getAssetType } from "../utils/getAssetType";
import { OutlineLink } from "./OutlineCta";
import { useLocation } from "wouter";
import { PlatformRoute } from "../configs/routes";

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
  // title,
  // subtitle,
  // ctaLink,
  // ctaLinkText,
  // artistName,
  // artistThumbnail,
  // charityName,
  // charityThumbnail,
  // causes,
}) => {
  const assetType = getAssetType(backgroundAsset);
  const [, setLocation] = useLocation();

  return (
    <div className="relative w-full max-w-layout-l mx-auto px-2 lg:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pb-3 px-2 md:px-0 md:rounded-xl items-center">
        <div className="z-10 flex items-center justify-center max-w-layout-l md:justify-start md:rounded-l-xl md:order-1">
          <div className="flex flex-col py-10 space-y-5 text-black">
            <h4 className="text-3xl sm:text-5xl font-bold max-w-[300px] sm:max-w-[500px] w-full dark:text-white">
              NFT Fundraisers Made Easy
            </h4>

            <div className="short-description md:text-2xl text-base md:text-start md:max-w-[400px] dark:text-[#33004B] font-semibold">
              GiveTree makes it easy to create NFT fundraisers in minutes and support the
              charities and causes you love.
            </div>

            <div className="flex flex-col sm:justify-start justify-center flex-wrap pt-3 gap-[18px]">
              <OutlineLink
                href={PlatformRoute.ExploreNFTFundraisers}
                className="w-[312px] h-[60px]"
              >
                Explore NFT Fundraisers
              </OutlineLink>
              <OutlineLink
                href={PlatformRoute.ExploreCharities}
                className="w-[312px] h-[60px]"
              >
                Explore Charities
              </OutlineLink>
            </div>

            {/* <div>
              <a
                href="https://vimeo.com/676109086/43485d2b64"
                target="_blank"
                rel="noreferrer"
                className="text-brand-orange text-sm font-medium"
              >
                Learn more about GiveTree
              </a>
            </div> */}
          </div>
        </div>

        <div className="md:order-2 md:text-right">
          {assetType === AssetType.Video && (
            <div className="inset-0 z-10 w-auto min-w-full min-h-full bg-brand-black md:rounded-r-xl">
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
            <div
              className="max-w-[450px] max-h-[450px] w-full shadow-md rounded-2xl-1 inline-block md:hover:shadow-fixed transition-all cursor-pointer bg-base-100"
              onClick={() => setLocation("/fundraiser/sale")}
            >
              <div
                className="inset-0 hidden w-[450px] h-[450px] bg-center bg-no-repeat bg-cover border border-base-content border-opacity-50 rounded-2xl-1 md:flex"
                style={{ backgroundImage: `url(${backgroundAsset})` }}
              />
              <img
                alt="banner image"
                className="block object-fill w-auto min-w-full h-[335px] md:hidden rounded-2xl-1"
                src={backgroundAsset}
              />
              {/* <div className="h-20 flex items-center justify-between p-4 border border-t-0 border-base-content border-opacity-25 rounded-b-2xl-1">
                <div className="flex gap-2">
                  <img
                    src="/apple-touch-icon.png"
                    alt="avatar"
                    className="w-10 h-10 round-full"
                  />
                  <div className="text-left">
                    <span className="font-bold text-base block">Rainbow Fish</span>
                    <span className="block text-sm">By Mulga</span>
                  </div>
                </div>
                <PrimaryButton className="w-37 h-[45px]">Mint</PrimaryButton>
              </div> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
