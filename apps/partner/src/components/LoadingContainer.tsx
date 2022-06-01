import React, { FC } from "react";
import { GiveTreeLogo } from "./GiveTreeLogo";

interface LoadingContainerProps {
  text?: string;
}

export const LoadingContainer: FC<LoadingContainerProps> = ({ text }) => (
  <div className="flex absolute inset-0 justify-center items-center w-full min-h-screen h-full bg-black bg-opacity-50 z-50">
    <div className="flex flex-1 flex-col justify-center items-center w-full min-h-full space-y-5">
      <GiveTreeLogo className="w-12 h-12 animate-pulse" />
      <h3 className="text-white font-semibold">{text ?? "Loading..."}.</h3>
    </div>
  </div>
);
