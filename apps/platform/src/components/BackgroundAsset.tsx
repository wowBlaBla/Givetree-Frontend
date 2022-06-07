import React, { FC } from "react";
import cx from "classnames";
import { AssetType, getAssetType } from "../utils/getAssetType";

interface BackgroundAssetProps {
  asset: string;
  className?: string;
  innerClassName?: string;
}

export const BackgroundAsset: FC<BackgroundAssetProps> = ({
  asset,
  className,
  innerClassName,
}) => {
  const assetType = getAssetType(asset);

  return (
    <>
      {assetType === AssetType.Video && (
        <div
          className={cx(
            "absolute inset-0 w-auto min-w-full min-h-full bg-brand-black z-10",
            className
          )}
        >
          <video
            autoPlay
            loop
            muted
            className={cx("w-auto min-w-full min-h-full max-w-none", innerClassName)}
          >
            <source src={asset} type="video/mp4" />
          </video>
        </div>
      )}

      {assetType === AssetType.Image && (
        <div
          className={cx(
            "absolute inset-0 bg-cover bg-center bg-no-repeat w-full min-h-full",
            className
          )}
          style={{ backgroundImage: `url(${asset})` }}
        />
      )}
    </>
  );
};
