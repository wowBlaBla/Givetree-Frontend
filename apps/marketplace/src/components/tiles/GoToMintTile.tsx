import React, { FC } from "react";
import { StaticImageData } from "next/image";
import { PrimaryButton, PrimaryLink } from "../PrimaryButton";
import { BackgroundImage } from "../BackgroundImage";

interface GoToMintTileProps {
  name: string;
  imageAsset: StaticImageData | string;
}

export const GoToMintTile: FC<GoToMintTileProps> = (props) => (
  <div className="relative flex flex-col w-full pb-6 item-center sm:pb-12">
    <div className="relative pt-full">
      <BackgroundImage className="shadow-lg rounded-xl" imageAsset={props.imageAsset} />
    </div>

    <div className="relative w-full mt-8 text-center">
      <PrimaryLink to="/minting/genopets">Go to minting site</PrimaryLink>
    </div>
  </div>
);
