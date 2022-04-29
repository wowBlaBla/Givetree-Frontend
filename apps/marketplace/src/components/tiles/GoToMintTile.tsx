import React, { FC } from "react";
import { StaticImageData } from "next/image";
import { PrimaryButton } from "../PrimaryButton";
import { BackgroundImage } from "../BackgroundImage";

interface GoToMintTileProps {
  name: string;
  imageAsset: StaticImageData | string;
}

export const GoToMintTile: FC<GoToMintTileProps> = (props) => (
  <div className="flex relative flex-col item-center w-full pb-6 sm:pb-12">
    <div className="relative pt-full">
      <BackgroundImage className="rounded-xl shadow-lg" imageAsset={props.imageAsset} />
    </div>

    <div className="relative w-full mt-8 text-center">
      <PrimaryButton large>Go to minting site</PrimaryButton>
    </div>
  </div>
);
