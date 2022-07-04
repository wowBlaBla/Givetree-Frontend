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
      "absolute inset-0 bg-cover bg-center bg-no-repeat w-full min-h-full",
      className,
      {
        "border border-gray-200": includeBorder,
      }
    )}
    style={{ backgroundImage: `url(${imageAsset})` }}
  />
);
