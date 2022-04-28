import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";

interface CreatorBadgeProps {
  imageAsset: string | StaticImageData;
  creatorName: string;
}

export const CreatorBadge: FC<CreatorBadgeProps> = (props) => (
  <div className="flex justify-end relative flex-col items-center -mt-24 space-y-2 z-30">
    <div className="w-12 h-12 sm:w-20 sm:h-20">
      <Image className="rounded-full" src={props.imageAsset} alt={props.creatorName} />
    </div>

    <p className="text-lg sm:text-xl text-white">
      by{" "}
      <span className="font-semibold text-brand-orange hover:underline hover:transition-hover">
        {props.creatorName}
      </span>
    </p>
  </div>
);
