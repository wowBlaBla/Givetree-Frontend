import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { TrendingGraphIcon } from "../icons/TrendingGraphIcon";
import { ClockIcon } from "../icons/ClockIcon";
import { StatusBadge } from "../StatusBadge";
import { BackgroundImage } from "../BackgroundImage";

interface AssetCardProps {
  collectionName: string;
  assetName: string;
  assetNumber: number;
  imageAsset: string | StaticImageData;
  bidEndDate: string;
  bidPrice: number;
  status?: string;
}

export const AssetCard: FC<AssetCardProps> = (props) => (
  <div className="relative bg-brand-black rounded-md shadow-lg overflow-hidden cursor-pointer select-none">
    <div className="relative pt-full">
      <BackgroundImage imageAsset={props.imageAsset} />
      <StatusBadge status={props.status} />
    </div>

    <div className="flex flex-col w-full">
      <div className="flex flex-col p-2 text-white">
        <div className="flex justify-between text-xs">
          <p>{props.collectionName}</p>
          <p>Top Bid</p>
        </div>

        <div className="flex justify-between text-sm">
          <p className="space-x-1">
            <span>{props.assetName}</span>
            <span>#{props.assetNumber}</span>
          </p>
          <p>{props.bidPrice} SOL</p>
        </div>

        <div className="flex justify-between mt-3 text-xs text-white ">
          <div className="flex items-center space-x-1 text-brand-orange">
            <TrendingGraphIcon className="w-3 h-3" />
            <p>Trending</p>
          </div>
          <div className="flex items-center space-x-1">
            <ClockIcon className="text-brand-orange w-3 h-3" />
            <p>{props.bidEndDate} left</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
