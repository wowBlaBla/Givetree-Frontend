import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";

interface CreatorBadgeProps {
  imageAsset: string | StaticImageData;
  creatorName: string;
}

export const CreatorBadge: FC<CreatorBadgeProps> = (props) => (
  <div className="flex justify-end relative flex-col items-center -mt-16 space-y-2 z-30">
    <div className="w-12 h-12 sm:w-16 sm:h-16">
      <Image className="rounded-full" src={props.imageAsset} alt={props.creatorName} />
    </div>

    <p className="text-xs sm:text-sm text-white">
      by <span className="text-brand-orange">{props.creatorName}</span>
    </p>
  </div>
);
