import React, { FC } from "react";
import cx from "classnames";

interface BackgroundVideoProps {
  videoAsset: string;
  className?: string;
}

export const BackgroundVideo: FC<BackgroundVideoProps> = ({ videoAsset, className }) => (
  <div
    className={cx(
      "absolute inset-0 w-auto min-w-full min-h-full bg-brand-black z-10",
      className
    )}
  >
    <video autoPlay loop muted className="min-w-full min-h-full object-fill">
      <source src={videoAsset} type="video/mp4" />
    </video>
  </div>
);
