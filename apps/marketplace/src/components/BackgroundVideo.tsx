import React, { FC } from "react";
import cx from "classnames";
import VideoAsset from "../../static/videos/genopets-bg.mp4";

interface BackgrounVideoProps {
  className?: string;
  videoAsset: string;
}

export const BackgroundVideo: FC<BackgrounVideoProps> = (props) => (
  <video
    autoPlay
    loop
    playsInline
    className={cx("absolute top-0 min-w-full min-h-full z-0", props.className)}
    src={VideoAsset}
  />
);
