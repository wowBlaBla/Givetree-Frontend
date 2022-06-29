import React, { FC } from "react";
import { BackgroundImage } from "../BackgroundImage";
import { OutlineLink } from "../OutlineCta";
import { PrimaryButton } from "../PrimaryCta";

interface CharityTileProps {
  imageAsset: string;
  name: string;
  description: string;
}

export const CharityTile: FC<CharityTileProps> = ({ description, imageAsset, name }) => (
  <div className="flex flex-col flex-1">
    <div className="flex flex-row items-center">
      <div className="flex-grow">
        <h3 className="text-xl font-semibold">Charity details</h3>
      </div>
      <OutlineLink href="https://givetree.gitbook.io/givetree-content-creator-onboarding-info-pack/">
        Learn more
      </OutlineLink>
    </div>

    <div className="mt-5">
      <p className="text-base">
        {description} {name}
      </p>
    </div>

    <div className="flex flex-col items-center justify-center mt-5">
      <div className="relative flex justify-center w-40 h-40 mx-auto lg:w-40 lg:h-40">
        <BackgroundImage asset={imageAsset} className="w-full rounded-full object-fit" />
      </div>

      <p className="mt-2 text-base font-semibold text-center lg:text-xl">{name}</p>
      <div className="mt-3">
        <PrimaryButton>Donate</PrimaryButton>
      </div>
    </div>
  </div>
);
