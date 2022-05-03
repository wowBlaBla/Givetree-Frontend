import React, { FC } from "react";
import cx from "classnames";

interface BackgrounVideoProps {
  className?: string;
  videoAsset: string;
}

export const BackgroundVideo: FC<BackgrounVideoProps> = (props) => (
  <div className={props.className}>
    <video
      autoPlay
      loop
      muted
      className={cx(
        "absolute inset-0 z-10 w-auto min-w-full min-h-full max-w-none",
        props.className
      )}
    >
      <source src={props.videoAsset} type="video/mp4" />
    </video>
  </div>
);
