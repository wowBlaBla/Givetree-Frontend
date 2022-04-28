import React, { FC } from "react";
import { StaticImageData } from "next/image";
import { DarkBlendTop } from "../BoxBlends";
import { StatusBadge } from "../StatusBadge";
import { CreatorBadge } from "../CreatorBadge";
import { useNavigate } from "react-router-dom";
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

export const CollectionCard: FC<CollectionCardProps> = (props) => {
  const navigate = useNavigate();

  const nextLocationOnClick = () => {
    navigate(`/${kebabCase(props.collectionName)}`);
  };

  return (
    <div
      className="relative w-full rounded-md shadow-lg bg-brand-black select-none cursor-pointer"
      onClick={nextLocationOnClick}
    >
      <div className="relative pt-full">
        <BackgroundImage className="rounded-md" imageAsset={props.imageAsset} />
        <StatusBadge className="my-2.5 mx-2" status={props.status} />
        <DarkBlendTop />
      </div>

      <div className="flex flex-col w-full rounded-md justify-end bg-brand-black">
        <CreatorBadge imageAsset={props.creatorImageAsset} creatorName={props.creator} />

        <div className="flex flex-col items-center space-y-1 text-white pt-1 z-10">
          <p className="text-xl sm:text-2xl">{props.collectionName}</p>
          <p className="text-base sm:text-xl">Starts in {props.eventDate}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full h-full p-2">
            <div className="w-full text-sm sm:text-base rounded-md border border-white text-center">
              Items {props.totalItems}
            </div>

            <div className="w-full text-sm sm:text-base rounded-md border border-white text-center">
              Price {props.mintPrice} SOL
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
