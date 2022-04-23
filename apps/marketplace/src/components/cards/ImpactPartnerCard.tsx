import React, { FC } from "react";
import { DarkBlendTop } from "../BoxBlends";
import { StatusBadge } from "../StatusBadge";

interface ImpactPartnerCardProps {
  imageAsset: string;
  category: string;
  partnerName: string;
}

export const ImpactPartnerCard: FC<ImpactPartnerCardProps> = (props) => (
  <div className="relative rounded-md shadow-lg overflow-hidden select-none pointer-events-none cursor-pointer h-72 lg:min-h-96 pb-[100%]">
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full min-h-full"
      style={{ backgroundImage: `url(${props.imageAsset})` }}
    />

    <div className="absolute top-0 right-0 my-2.5 mx-2 z-20">
      <StatusBadge status={props.category} />
    </div>

    <div className="flex flex-col justify-end h-full">
      <div className="absolute bottom-0 w-full">
        <DarkBlendTop />
      </div>

      <div className="absolute bottom-0 w-full flex flex-col items-center py-1 text-white z-20">
        <p className="text-xs sm:text-lg px-1">{props.partnerName}</p>
      </div>
    </div>
  </div>
);
