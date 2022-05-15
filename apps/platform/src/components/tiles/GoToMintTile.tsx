import React, { FC } from "react";
import { PrimaryLink } from "../PrimaryButton";
import { BackgroundImage } from "../BackgroundImage";

interface GoToMintTileProps {
  linkTo: string;
  imageAsset: string;
}

export const GoToMintTile: FC<GoToMintTileProps> = (props) => (
  <div className="relative flex flex-col w-full pb-6 item-center sm:pb-12">
    <div className="relative pt-full">
      <BackgroundImage className="shadow-lg rounded-xl" imageAsset={props.imageAsset} />
    </div>

    <div className="relative w-full mt-8 sm:mt-12 text-center">
      <PrimaryLink to={`/minting/${props.linkTo}`}>Go to minting site</PrimaryLink>
    </div>
  </div>
);
