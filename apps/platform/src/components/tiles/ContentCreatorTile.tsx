import React, { FC } from "react";
import { BackgroundAsset } from "../BackgroundAsset";
import { VerificationBadge } from "../badges/VerificationBadge";

interface ContentCreatorTileProps {
  name: string;
  description: string;
  imageAsset: string;
}

export const ContentCreatorTile: FC<ContentCreatorTileProps> = ({
  name,
  description,
  imageAsset,
}) => (
  <div className="flex flex-col lg:flex-row lg:items-start pb-10 border-b-[3px]">
    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start sm:space-x-3">
      <div className="relative w-24 h-24">
        <BackgroundAsset
          asset={imageAsset}
          className="min-w-full min-h-full rounded-full"
        />
      </div>

      <div className="flex flex-col items-center sm:items-start space-y-3">
        <h4 className="flex items-center text-lg sm:text-xl space-x-1 font-medium">
          <span className="text-black">by</span>
          <span className="whitespace-nowrap text-brand-orange">{name}</span>
        </h4>

        <VerificationBadge text="Verified Creator" />
      </div>
    </div>

    <div className="flex items-center max-w-7xl mt-5 lg:mt-0 sm:px-3 lg:px-12">
      <p className="text-gray-600 text-base sm:text-lg leading-7">{description}</p>
    </div>
  </div>
);
