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
  <div className="relative rounded-md shadow-lg cursor-pointer">
    <div className="relative pt-full">
      <BackgroundImage className="rounded-md" imageAsset={props.imageAsset} />
      <StatusBadge className="my-2.5 mx-2" status={props.category} />
      <DarkBlendTop className="rounded-b-md" />
    </div>

    <p className="absolute bottom-0 w-full rounded-md text-center py-2 text-white text-xs sm:text-lg z-10">
      {props.partnerName}
    </p>
  </div>
);
