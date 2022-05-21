import React, { FC } from "react";
import { Cause } from "../../typed/enum/cause";
import { BackgroundAsset } from "../BackgroundAsset";
import { DarkBlend } from "../BoxBlends";
import { FeaturedBadge } from "../badges/FeaturedBadge";

interface CharityCardProps {
  imageAsset: string;
  cause: Cause;
  name: string;
}

export const CharityCard: FC<CharityCardProps> = ({ cause, imageAsset, name }) => (
  <div className="relative w-full rounded-xl shadow-lg cursor-pointer overflow-hidden">
    <div className="relative pt-full sm:min-h-72">
      <FeaturedBadge className="absolute top-0 right-0 my-2.5 mx-2 z-10" text={cause} />
      <BackgroundAsset asset={imageAsset} />
    </div>

    <DarkBlend bottom small />

    <p className="absolute bottom-0 w-full rounded-lg text-center p-1 text-white text-xs sm:text-lg z-10">
      {name}
    </p>
  </div>
);
