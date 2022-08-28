/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import { /*PrimaryButton,*/PrimaryLink } from "./PrimaryCta";
import { AssetType, getAssetType } from "../utils/getAssetType";
// import { CollabBadge } from "./badges/CollabBadge";
// import { CauseBadge } from "./badges/CauseBadge";
import { OutlineLink } from "./OutlineCta";
import { Link } from "wouter";

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

  return (
    <div className="relative w-full max-w-screen-xl min-h-full mx-auto overflow-hidden md:px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pb-3 px-2 md:px-0 md:rounded-xl items-center">
        <div className="z-10 flex items-center justify-center max-w-screen-xl bg-white md:justify-start md:rounded-l-xl md:order-1">
          <div className="flex flex-col px-5 py-10 space-y-5 text-black">

            <h4 className="text-2xl sm:text-5xl font-bold max-w-[400px] w-full sm:text-left text-center">
              NFT Fundraisers for the causes you love
            </h4>

            <div className="short-description text-sm max-w-[320px]">
              GiveTree is an NFT marketplace which empowers you to easily support the charities and causes you love
            </div>

            <div className="flex sm:justify-start justify-center flex-wrap pt-3 gap-[18px]">
              <PrimaryLink href={"/"} className="w-37">Explore</PrimaryLink>
              <OutlineLink href={"/"} className="w-37" >Create</OutlineLink>
            </div>

            <div>
              <Link href="" className="text-brand-orange text-sm font-medium">Learn more about GiveTree</Link>
            </div>
          </div>
        </div>

        <div className=" md:order-2 md:text-right text-center">
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
            <div className="max-w-[487px] w-full shadow-md rounded-2xl-1 inline-block">
              <div
                className="inset-0 hidden w-full h-[335px] bg-center bg-no-repeat bg-cover border border-gray-200 rounded-t-2xl-1 md:flex"
                style={{ backgroundImage: `url(${backgroundAsset})` }}
              />
              <img
                alt="banner image"
                className="block object-fill w-auto min-w-full h-[335px] md:hidden rounded-t-2xl-1"
                src={backgroundAsset}
              />
              <div className="h-20 flex items-center justify-between p-4">
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
                {/* <PrimaryButton className="w-37 h-[45px]">Mint</PrimaryButton> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
