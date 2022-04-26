import React, { FC } from "react";
import { StaticImageData } from "next/image";
import { DarkBlendTop } from "../BoxBlends";
import { StatusBadge } from "../StatusBadge";
import { CreatorBadge } from "../CreatorBadge";
import { Link } from "react-router-dom";
import { kebabCase } from "lodash";
import { BackgroundImage } from "../BackgroundImage";

interface CollectionCardProps {
  creator: string;
  imageAsset: string | StaticImageData;
  creatorImageAsset: string | StaticImageData;
  collectionName: string;
  eventDate: string;
  totalItems: number;
  mintPrice: number;
  status?: string;
}

export const CollectionCard: FC<CollectionCardProps> = (props) => (
  <Link
    to={`/collection/${kebabCase(props.collectionName)}`}
    className="relative bg-brand-black rounded-md shadow-lg overflow-hidden select-none cursor-pointer"
  >
    <div className="relative pt-full">
      <BackgroundImage imageAsset={props.imageAsset} />
      <StatusBadge className="my-2.5 mx-2" status={props.status} />
      <DarkBlendTop />
    </div>

    <div className="flex relative flex-col justify-end">
      <CreatorBadge imageAsset={props.creatorImageAsset} creatorName={props.creator} />

      <div className="flex flex-col items-center space-y-1 text-white py-1">
        <p className="text-sm sm:text-lg">{props.collectionName}</p>
        <p className="text-xs">{props.eventDate}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full p-2">
          <div className="w-full text-xs sm:text-sm rounded-md border border-white p-1 text-center">
            Items {props.totalItems}
          </div>

          <div className="w-full text-xs sm:text-sm rounded-md border border-white p-1 text-center">
            Price {props.mintPrice} SOL
          </div>
        </div>
      </div>
    </div>
  </Link>
);
