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
      <div className="relative pb-3 px-2 md:px-0 md:rounded-xl">
        <div className="w-full h-full z-10 flex flex-col items-center justify-center max-w-layout-l">
          <h4 className="text-center text-3xl sm:text-5xl font-bold w-full dark:text-white mb-4">
            Create NFTs which change the world
          </h4>

          <div className="short-description md:text-2xl text-white font-semibold mb-4">
            Donate, mint, buy, sell, & trade NFTs
          </div>

          <div className="flex flex-col sm:justify-start justify-center flex-wrap pt-3 gap-[18px]">
            <OutlineLink
              href={"/explore/nfts"}
              className="w-[240px] h-[65px] !bg-transparent border-4 border-white rounded-none !text-white hover:!bg-brand-orange-hover"
            >
              Explore NFTs
            </OutlineLink>
            {/* <OutlineLink
                href={PlatformRoute.ExploreCharities}
                className="w-[312px] h-[60px]"
              >
                Explore Charities
              </OutlineLink> */}
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

        {/* <div className="md:order-2 md:text-right"> */}
        {/* {assetType === AssetType.Video && (
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
          )} */}

        {/* {assetType === AssetType.Image && (
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
            </div>
          )} */}
        {/* </div> */}
      </div>
    </div>
  );
};
