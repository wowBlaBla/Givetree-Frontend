import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";
import { BaseTile } from "./BaseTile";

interface ImpactPartnerTileProps {
  name: string;
  description: string;
  imageAsset: StaticImageData | string;
}

export const ImpactPartnerTile: FC<ImpactPartnerTileProps> = (props) => (
  <BaseTile className="relative w-full bg-gray-100">
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center w-48 h-48 lg:w-72 lg:h-72 mx-auto">
        <Image
          className="w-full rounded-full"
          src={props.imageAsset}
          alt="mulgakongz asset"
        />
      </div>

      <p className="mt-4 text-center text-base lg:text-lg">{props.description}</p>
      <p className="mt-2 text-brand-orange font-semibold text-center text-base lg:text-xl">
        {props.name}
      </p>
    </div>
  </BaseTile>
);
