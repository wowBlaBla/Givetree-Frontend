import React, { FC } from "react";
import cx from "classnames";

interface BackgroundVideoProps {
  asset: string;
  className?: string;
}

export const BackgroundVideo: FC<BackgroundVideoProps> = ({ asset, className }) => (
  <div
    className={cx(
      "absolute inset-0 w-auto min-w-full min-h-full bg-brand-black z-10",
      className
    )}
  >
    <video autoPlay loop muted className="min-w-full min-h-full object-fill">
      <source src={asset} type="video/mp4" />
    </video>
  </div>
);
