import React, { FC } from "react";
import { ItemBox } from "../ItemBox";
import { LiveBadge } from "../LiveBadge";
import { SocialLinkGrid } from "../SocialLinkGrid";
import { BaseTile } from "./BaseTile";

interface CollectionTileProps {
  title: string;
  totalSupplyCount: number;
  mintingPrice: number;
  description: string;
}

export const CollectionTile: FC<CollectionTileProps> = (props) => (
  <BaseTile className="relative w-full bg-white">
    <LiveBadge
      className="absolute top-0 right-0 m-2.5 text-red-600"
      text="Event is live"
    />
    <h3 className="text-4xl sm:text-5xl xl:text-6xl font-semibold">{props.title}</h3>

    <div className="flex flex-col md:flex-row mt-6 space-y-3 md:space-y-0 md:space-x-6">
      <ItemBox title="Total items" value={props.totalSupplyCount} />
      <ItemBox title="Price" value={`${props.mintingPrice} SOL`} />
    </div>

    <SocialLinkGrid websiteUrl="#" twitterUrl="#" discordUrl="#" contractUrl="#" />

    <p className="mt-5 text-base lg:text-lg">{props.description}</p>
  </BaseTile>
);
