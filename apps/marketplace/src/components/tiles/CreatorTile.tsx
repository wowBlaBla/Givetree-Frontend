import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";
import { VerificationBadge } from "../VerificationBadge";

interface CreatorTileProps {
  name: string;
  description: string;
  imageAsset: StaticImageData | string;
}

export const CreatorTile: FC<CreatorTileProps> = (props) => (
  <div className="flex flex-col lg:flex-row pb-12 border-b-[3px]">
    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start sm:space-x-3">
      <div className="w-24 h-24 sm:w-30 sm:h-30">
        <Image
          className="min-w-full min-h-full rounded-full"
          src={props.imageAsset}
          alt="MulgaTheArtist"
        />
      </div>

      <div className="flex flex-col items-center sm:items-start space-y-3">
        <h4 className="flex flex-nowrap items-center text-xl sm:text-2xl space-x-1 font-medium">
          <span className="text-black">by</span>
          <span className="text-brand-orange">{props.name}</span>
        </h4>

        <VerificationBadge />
      </div>
    </div>

    <div className="flex items-center max-w-7xl mt-5 lg:mt-0 sm:px-12">
      <p className="text-xl text-gray-600 xl:leading-9">{props.description}</p>
    </div>
  </div>
);
