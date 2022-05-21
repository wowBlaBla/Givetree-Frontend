import React, { FC } from "react";
import cx from "classnames";
import { AssetType, getAssetType } from "../utils/getAssetType";

interface BackgroundAssetProps {
  className?: string;
  asset: string;
}

export const BackgroundAsset: FC<BackgroundAssetProps> = ({ className, asset }) => {
  const assetType = getAssetType(asset);

  return (
    <>
      {assetType === AssetType.Video && (
        <div
          className={cx(
            "absolute inset-0 z-10 w-auto min-w-full min-h-full bg-brand-black",
            className
          )}
        >
          <video autoPlay loop muted className="w-auto min-w-full min-h-full max-w-none">
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
