import React, { FC } from "react";
import { XIcon } from "@heroicons/react/solid";
import { BackgroundImage } from "./BackgroundImage";

interface CollabBadgeProps {
  artistThumbnail: string;
  artistName: string;
  charityName: string;
  charityThumbnail: string;
}

export const CollabBadge: FC<CollabBadgeProps> = ({
  artistThumbnail,
  artistName,
  charityName,
  charityThumbnail,
}) => (
  <div className="flex flex-row items-center gap-1">
    <div>
      <p className="text-xs text-gray-400">Creator</p>
      <div className="flex flex-row mt-1">
        <div className="flex flex-col items-center">
          <div className="relative flex justify-center mx-auto border-l border-gray-200 rounded-l-lg w-14 h-14 border-y">
            <BackgroundImage
              imageAsset={artistThumbnail}
              className="w-full rounded-l-lg object-fit"
            />
          </div>
        </div>

        <div className="flex items-center px-4 border-l border-r border-gray-200 rounded-r-lg border-y">
          <p className="text-sm font-medium text-gray-800">{artistName}</p>
        </div>
      </div>
    </div>
    <div>
      <span>
        <div className="flex items-center justify-center w-8 h-8 mt-5 bg-white rounded-full">
          <XIcon className="w-5 h-5 text-brand-orange" />
        </div>
      </span>
    </div>
    <div>
      <p className="text-xs text-gray-400">Nominated charity</p>
      <div className="flex flex-row mt-1">
        <div className="flex flex-col items-center">
          <div className="relative flex justify-center mx-auto border-l border-gray-200 rounded-l-lg w-14 h-14 border-y">
            <BackgroundImage
              imageAsset={charityThumbnail}
              className="w-full rounded-l-lg object-fit"
            />
          </div>
        </div>

        <div className="flex items-center px-4 border-l border-r border-gray-200 rounded-r-lg border-y">
          <p className="text-sm font-medium text-gray-800">{charityName}</p>
        </div>
      </div>
    </div>
  </div>
);
