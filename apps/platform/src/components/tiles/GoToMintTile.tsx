import React, { FC } from "react";
import { PrimaryLink } from "../PrimaryButton";
import { BackgroundAsset } from "../BackgroundAsset";

interface GoToMintTileProps {
  linkTo: string;
  imageAsset: string;
}

export const GoToMintTile: FC<GoToMintTileProps> = ({ imageAsset, linkTo }) => (
  <div className="flex relative flex-col item-center w-full">
    <div className="relative pt-full shadow-lg rounded-lg overflow-hidden">
      <BackgroundAsset asset={imageAsset} />
    </div>

    <div className="w-full mt-8 text-center">
      <PrimaryLink to={`/minting/${linkTo}`}>Go to minting site</PrimaryLink>
    </div>
  </div>
);
