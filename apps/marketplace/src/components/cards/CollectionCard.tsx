import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { DarkBlendTop } from "../BoxBlends";
import { StatusBadge } from "../StatusBadge";

interface CollectionCardProps {
  creator: string;
  imageAsset: string | StaticImageData;
  creatorImageAsset: string | StaticImageData;
  title: string;
  eventDate: string;
  totalItems: number;
  mintPrice: number;
  status?: string;
}

export const CollectionCard: FC<CollectionCardProps> = (props) => (
  <div className="relative bg-brand-black rounded-md shadow-lg overflow-hidden select-none pointer-events-none cursor-pointer">
    <div className="relative pt-[100%]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full min-h-full"
        style={{ backgroundImage: `url(${props.imageAsset})` }}
      />

      {props.status && (
        <div className="absolute top-0 right-0 my-2.5 mx-2 z-10">
          <StatusBadge status={props.status} />
        </div>
      )}

      <div className="absolute bottom-0 w-full z-10">
        <DarkBlendTop />
      </div>
    </div>

    <div className="flex relative flex-col justify-end">
      <div className="flex justify-end relative flex-col items-center -mt-16 space-y-2 z-30">
        <div className="w-12 h-12 sm:w-16 sm:h-16">
          <Image
            className="rounded-full"
            src={props.creatorImageAsset}
            alt={props.title}
          />
        </div>

        <p className="text-xs sm:text-sm text-white">
          by{" "}
          <a href="#" className="text-brand-orange hover:underline">
            {props.creator}
          </a>
        </p>
      </div>

      <div className="flex flex-col items-center space-y-1 text-white py-1">
        <p className="text-sm sm:text-lg">{props.title}</p>
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
