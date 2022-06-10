/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import cx from "classnames";

interface BackgroundImageProps {
  asset: string;
  className?: string;
}

export const BackgroundImage: FC<BackgroundImageProps> = ({ asset, className }) => (
  <div
    className={cx(
      "absolute inset-0 bg-cover bg-center bg-no-repeat w-full min-h-full z-10",
      className
    )}
    style={{ backgroundImage: `url(${asset})` }}
  />
);
