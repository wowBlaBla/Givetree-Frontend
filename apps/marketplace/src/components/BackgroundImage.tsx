import React, { FC } from "react";
import { StaticImageData } from "next/image";

interface BackgroundImageProps {
  imageAsset: string | StaticImageData;
}

export const BackgroundImage: FC<BackgroundImageProps> = (props) => (
  <div
    className="bg-brand-black absolute inset-0 bg-cover bg-center bg-no-repeat w-full min-h-full"
    style={{ backgroundImage: `url(${props.imageAsset})` }}
  />
);
