import React, { FC } from "react";
import { Cause } from "../../typed/enum/cause";
import { BackgroundImage } from "../BackgroundImage";
import { DarkBlend } from "../BoxBlends";
import { FeaturedBadge } from "../badges/FeaturedBadge";

interface CharityCardProps {
  imageAsset: string;
  cause: Cause;
  name: string;
}

export const CharityCard: FC<CharityCardProps> = ({ cause, imageAsset, name }) => (
  <div className="relative w-full rounded-xl shadow-lg cursor-pointer overflow-hidden">
    <div className="relative pt-full">
      <FeaturedBadge className="my-2.5 mx-2" text={cause} />
      <BackgroundImage imageAsset={imageAsset} />
    </div>

    <DarkBlend bottom small />

    <p className="absolute bottom-0 w-full rounded-md text-center py-2  text-white text-xs sm:text-lg z-10">
      {name}
    </p>
  </div>
);
