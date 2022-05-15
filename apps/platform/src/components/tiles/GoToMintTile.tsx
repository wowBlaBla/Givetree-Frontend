import React, { FC } from "react";
import { PrimaryLink } from "../PrimaryButton";
import { BackgroundImage } from "../BackgroundImage";

interface GoToMintTileProps {
  linkTo: string;
  imageAsset: string;
}

export const GoToMintTile: FC<GoToMintTileProps> = (props) => (
  <div className="flex relative flex-col item-center w-full pb-6 sm:pb-12">
    <div className="relative pt-full">
      <BackgroundImage className="shadow-lg rounded-xl" imageAsset={props.imageAsset} />
    </div>

    <div className="relative w-full mt-8 sm:mt-12 text-center">
      <PrimaryLink to={`/minting/${props.linkTo}`}>Go to minting site</PrimaryLink>
    </div>
  </div>
);
