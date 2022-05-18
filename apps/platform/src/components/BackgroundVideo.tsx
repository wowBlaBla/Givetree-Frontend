import React, { FC } from "react";

interface BackgrounVideoProps {
  className?: string;
  videoAsset: string;
}

export const BackgroundVideo: FC<BackgrounVideoProps> = ({ className, videoAsset }) => (
  <div className={className}>
    <video
      autoPlay
      loop
      muted
      className="absolute inset-0 z-10 w-auto min-w-full min-h-full max-w-none"
    >
      <source src={videoAsset} type="video/mp4" />
    </video>
  </div>
);
