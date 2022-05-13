import React, { FC } from "react";
import { BackgroundImage } from "../BackgroundImage";
import { VerificationBadge } from "../VerificationBadge";

interface ContentCreatorTileProps {
  name: string;
  description: string;
  imageAsset: string;
}

export const ContentCreatorTile: FC<ContentCreatorTileProps> = (props) => (
  <div className="flex flex-col lg:flex-row pb-10 border-b-[3px]">
    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start sm:space-x-3">
      <div className="relative w-24 h-24 sm:w-30 sm:h-30">
        <BackgroundImage
          className="min-w-full min-h-full rounded-full"
          imageAsset={props.imageAsset}
        />
      </div>

      <div className="flex flex-col items-center sm:items-start space-y-3">
        <h4 className="flex items-center text-xl sm:text-2xl space-x-1 font-medium">
          <span className="text-black">by</span>
          <span className="whitespace-nowrap text-brand-orange">{props.name}</span>
        </h4>

        <VerificationBadge />
      </div>
    </div>

    <div className="flex items-center max-w-7xl mt-5 lg:mt-0 sm:px-3 lg:px-12">
      <p className="text-gray-600 text-base sm:text-lg leading-7">{props.description}</p>
    </div>
  </div>
);
