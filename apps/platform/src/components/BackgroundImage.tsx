import React, { FC } from "react";
import { StaticImageData } from "next/image";
import cx from "classnames";

interface BackgroundImageProps {
  className?: string;
  imageAsset: string | StaticImageData;
}

export const BackgroundImage: FC<BackgroundImageProps> = (props) => (
  <div
    className={cx(
      "bg-brand-black absolute inset-0 bg-cover bg-center bg-no-repeat w-full min-h-full",
      props.className
    )}
    style={{ backgroundImage: `url(${props.imageAsset})` }}
  />
);
