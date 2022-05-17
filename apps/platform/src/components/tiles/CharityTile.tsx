import React, { FC } from "react";
import { BackgroundImage } from "../BackgroundImage";
import { BaseTile } from "./BaseTile";

interface CharityTileProps {
  imageAsset: string;
  name: string;
  description: string;
}

export const CharityTile: FC<CharityTileProps> = ({ description, imageAsset, name }) => (
  <BaseTile className="border bg-gray-100">
    <div className="flex flex-col justify-center items-center">
      <div className="flex relative justify-center w-48 h-48 lg:w-72 lg:h-72 mx-auto">
        <BackgroundImage
          className="object-fit w-full rounded-full"
          imageAsset={imageAsset}
        />
      </div>

      <p className="mt-4 text-center text-base lg:text-lg">{description}</p>
      <p className="mt-2 text-brand-orange font-semibold text-center text-base lg:text-xl">
        {name}
      </p>
    </div>
  </BaseTile>
);
