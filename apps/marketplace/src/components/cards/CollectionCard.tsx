import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { DarkBlendTop } from "../BoxBlends";

interface CollectionCardProps {
  creator: string;
  imageAsset: string | StaticImageData;
  creatorImageAsset: string | StaticImageData;
  title: string;
  eventDate: string;
  totalItems: number;
  mintPrice: number;
}

export const CollectionCard: FC<CollectionCardProps> = (props) => (
  <div className="relative bg-brand-black rounded-md shadow-lg overflow-hidden">
    <div className="absolute top-0 right-0 text-xs sm:text-base rounded-md bg-brand-black text-white bg-opacity-70 z-20 py-1 px-2 m-2">
      Featured
    </div>

    <div className="flex flex-col justify-end h-full">
      <div className="flex relative flex-1 justify-center w-full">
        <Image
          className="object-cover min-w-full h-full"
          src={props.imageAsset}
          alt={props.title}
        />

        <div className="absolute bottom-0 w-full">
          <DarkBlendTop />
        </div>
      </div>

      <div className="flex justify-end relative flex-col items-center -mt-16 z-50 space-y-2">
        <div className="w-12 h-12 sm:w-16 sm:h-16">
          <Image
            className="rounded-full"
            src={props.creatorImageAsset}
            alt={props.title}
          />
        </div>

        <p className="text-xs sm:text-sm text-white">
          by <span className="text-brand-orange hover:underline">{props.creator}</span>
        </p>
      </div>

      <div className="flex flex-col items-center space-y-1 text-white py-1">
        <p className="text-base sm:text-lg">{props.title}</p>
        <p className="text-xs">{props.eventDate}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 px-2 w-full py-2">
          <div className="w-full text-xs sm:text-sm rounded-md border border-white p-1 text-center">
            Items {props.totalItems}
          </div>
          <div className="w-full text-xs sm:text-sm rounded-md border border-white p-1 text-center">
            Price {props.mintPrice} SOL
          </div>
        </div>
      </div>
    </div>
  </div>
);
