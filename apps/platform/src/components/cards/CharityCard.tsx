import React, { FC } from "react";
import { Cause } from "../../typed/enum/cause";
import { BackgroundImage } from "../BackgroundImage";
import { DarkBlend } from "../BoxBlends";
import { FeaturedBadge } from "../FeaturedBadge";

interface CharityCardProps {
  imageAsset: string;
  category: Cause | string;
  partnerName: string;
}

export const CharityCard: FC<CharityCardProps> = (props) => {
  return (
    <div className="relative rounded-lg shadow-lg cursor-pointer overflow-hidden">
      <div className="relative pt-full">
        <BackgroundImage imageAsset={props.imageAsset} />
        <FeaturedBadge className="my-2.5 mx-2" text={props.category} />
        <DarkBlend bottom small />
      </div>

      <p className="absolute bottom-0 w-full rounded-md text-center py-2 text-white text-xs sm:text-lg z-10">
        {props.partnerName}
      </p>
    </div>
  );
};
