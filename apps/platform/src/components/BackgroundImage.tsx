/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import cx from "classnames";

interface BackgroundImageProps {
  imageAsset: string;
  className?: string;
  includeBorder?: boolean;
}

export const BackgroundImage: FC<BackgroundImageProps> = ({
  imageAsset,
  className,
  includeBorder,
}) => (
  <div
    className={cx(
      "bg-cover bg-center bg-no-repeat w-full aspect-square border-base-content",
      className,
      {
        "border border-black": includeBorder,
      }
    )}
    style={{ backgroundImage: `url(${imageAsset})` }}
  />
);
