import { round } from "lodash";
import React, { FC } from "react";
import { Cause } from "../../typed/enum/cause";
import { BackgroundImage } from "../BackgroundImage";
import { SolanaColorIcon } from "../icons/SolanaColorIcon";
import { OutlineLink } from "../OutlineCta";
import { PrimaryButton } from "../PrimaryCta";
import { BaseTile } from "./BaseTile";

interface CharityTileProps {
  imageAsset: string;
  artistName: string;
  name: string;
  royalty: number;
  description: string;
  causes: Cause[];
  totalSupply: number;
  floorPrice: number;
}

export const CharityTile: FC<CharityTileProps> = ({
  imageAsset,
  name,
  royalty,
  causes,
  totalSupply,
  floorPrice,
}) => (
  <div className="flex flex-col flex-1">
    <div className="flex flex-row items-center">
      <div className="flex-grow">
        <h3 className="text-xl font-semibold">Charity details</h3>
      </div>
      <OutlineLink href="https://givetree.gitbook.io/givetree-content-creator-onboarding-info-pack/">
        Learn more
      </OutlineLink>
    </div>

    <BaseTile className="flex flex-col gap-5 mt-5 sm:flex-row">
      <div className="flex flex-col items-center pr-5 border-gray-200 sm:border-r">
        <div className="relative flex justify-center w-24 h-24 mx-auto">
          <BackgroundImage asset={imageAsset} className="w-full rounded-lg object-fit" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div>
          <p className="text-xs text-gray-500">Every mint</p>
          <div className="flex flex-row items-end">
            <p className="text-4xl font-semibold">{royalty}</p>
            <span className="">%</span>
          </div>

          <div className="mt-1">
            <p className="text-xs text-gray-600">
              Is instantly donated to <span className="text-brand-orange">{name}</span>
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs text-gray-500">Total target donations</p>
          <div className="flex flex-row items-center ">
            <SolanaColorIcon className="w-5 mr-2" />
            <p className="text-4xl font-semibold">
              {round((totalSupply * floorPrice * royalty) / 100)}~
            </p>
          </div>

          <div className="mt-1">
            <p className="text-xs text-gray-600">
              To raise awareness for <span className="font-semibold">{causes[0]}</span>
            </p>
          </div>
        </div>
      </div>
    </BaseTile>
  </div>
);
