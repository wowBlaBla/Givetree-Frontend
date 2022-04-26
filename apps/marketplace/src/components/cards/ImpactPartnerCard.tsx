import React, { FC } from "react";
import { Causes } from "../../typed/enum/causes";
import { BackgroundImage } from "../BackgroundImage";
import { DarkBlendTop } from "../BoxBlends";
import { StatusBadge } from "../StatusBadge";

interface ImpactPartnerCardProps {
  imageAsset: string;
  category: Causes | string;
  partnerName: string;
}

export const ImpactPartnerCard: FC<ImpactPartnerCardProps> = (props) => (
  <div className="relative rounded-md shadow-lg overflow-hidden select-none pointer-events-none cursor-pointer h-72 lg:min-h-96 pt-full">
    <BackgroundImage imageAsset={props.imageAsset} />
    <StatusBadge className="my-2.5 mx-2" status={props.category} />
    <DarkBlendTop />

    <p className="absolute bottom-0 w-full text-center p-1 text-white text-xs sm:text-lg z-10">
      {props.partnerName}
    </p>
  </div>
);
