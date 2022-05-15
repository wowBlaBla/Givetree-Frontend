import React, { FC } from "react";
import { BackgroundImage } from "../BackgroundImage";
import { BaseTile } from "./BaseTile";

interface CharityTileProps {
  imageAsset: string;
  name: string;
  description: string;
}

export const CharityTile: FC<CharityTileProps> = (props) => (
  <BaseTile className="bg-gray-100">
    <div className="flex flex-col justify-center items-center">
      <div className="flex relative justify-center w-48 h-48 lg:w-72 lg:h-72 mx-auto">
        <BackgroundImage className="w-full rounded-full" imageAsset={props.imageAsset} />
      </div>

      <p className="mt-4 text-center text-base lg:text-lg">{props.description}</p>
      <p className="mt-2 text-brand-orange font-semibold text-center text-base lg:text-xl">
        {props.name}
      </p>
    </div>
  </BaseTile>
);
