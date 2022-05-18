import React, { FC } from "react";
import { PrimaryLink } from "../PrimaryButton";
import { BackgroundImage } from "../BackgroundImage";

interface GoToMintTileProps {
  linkTo: string;
  imageAsset: string;
}

export const GoToMintTile: FC<GoToMintTileProps> = ({ imageAsset, linkTo }) => (
  <div className="flex relative flex-col item-center w-full pb-6 sm:pb-12">
    <div className="relative pt-full">
      <BackgroundImage className="shadow-lg rounded-lg" imageAsset={imageAsset} />
    </div>

    <div className="w-full mt-8 text-center">
      <PrimaryLink to={`/minting/${linkTo}`}>Go to minting site</PrimaryLink>
    </div>
  </div>
);
