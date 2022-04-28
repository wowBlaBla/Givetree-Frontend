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
      className={cx("absolute top-0 min-w-full min-h-full z-0", props.className)}
    >
      <source src={props.videoAsset} type="video/mp4" />
    </video>
  </div>
);
