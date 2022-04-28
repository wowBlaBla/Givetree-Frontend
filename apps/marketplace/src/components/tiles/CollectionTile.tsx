import { StaticImageData } from "next/image";
import React, { FC } from "react";
import { ItemBox } from "../ItemBox";
import { SocialLinkGrid } from "../SocialLinkGrid";
import { BaseTile } from "./BaseTile";

interface CollectionTileProps {
  title: string;
  totalSupplyCount: number;
  mintingPrice: number;
  description: string;
  imageAsset: StaticImageData | string;
}

export const CollectionTile: FC<CollectionTileProps> = (props) => (
  <BaseTile className="bg-white">
    <h3 className="text-4xl sm:text-5xl xl:text-6xl font-semibold">{props.title}</h3>

    <div className="flex flex-col sm:flex-row mt-6 space-y-3 sm:space-y-0 sm:space-x-6">
      <ItemBox title="Total Items" value={props.totalSupplyCount} />
      <ItemBox title="Price" value={`${props.mintingPrice} SOL`} />
    </div>

    <SocialLinkGrid websiteUrl="#" twitterUrl="#" discordUrl="#" contractUrl="#" />

    <p className="mt-5 text-base sm:text-lg">{props.description}</p>
  </BaseTile>
);
