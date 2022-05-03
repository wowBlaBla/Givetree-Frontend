import React, { FC } from "react";
import { ItemBox } from "../ItemBox";
import { LiveBadge } from "../LiveBadge";
import { SocialLinkGrid } from "../SocialLinkGrid";
import { BaseTile } from "./BaseTile";

interface CollectionTileProps {
  title: string;
  totalSupply: number;
  mintingPrice: number;
  description: string;
  isLive: boolean;
}

export const CollectionTile: FC<CollectionTileProps> = (props) => (
  <BaseTile className="relative w-full bg-white">
    {props.isLive && (
      <LiveBadge
        className="absolute top-0 right-0 m-2.5 text-red-600"
        text="Event is live"
      />
    )}
    <h3 className="text-3xl font-bold sm:text-5xl xl:text-4xl">{props.title}</h3>

    <div className="flex flex-col mt-6 space-y-3 md:flex-row md:space-y-0 md:space-x-6">
      <ItemBox title="Total items" value={props.totalSupply} />
      <ItemBox title="Price" value={`${props.mintingPrice} SOL`} />
    </div>

    <SocialLinkGrid websiteUrl="#" twitterUrl="#" discordUrl="#" contractUrl="#" />

    <p className="mt-5 text-base lg:text-lg">{props.description}</p>
  </BaseTile>
);
