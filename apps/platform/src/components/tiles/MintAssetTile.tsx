import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";
import { BaseTile } from "./BaseTile";

interface CharityTileProps {
  name: string;
  description: string;
  imageAsset: StaticImageData | string;
}

export const CharityTile: FC<CharityTileProps> = ({ name, description, imageAsset }) => (
  <BaseTile className="bg-gray-100">
    <div className="flex flex-col items-center">
      <div className="flex justify-center w-48 h-48 sm:w-72 sm:h-72 mx-auto">
        <Image className="w-full rounded-full" src={imageAsset} alt={name} />
      </div>

      <p className="mt-4 text-lg sm:text-lg">{description}</p>
      <p className="mt-2 text-brand-orange font-semibold text-base sm:text-xl">{name}</p>
    </div>
  </BaseTile>
);
