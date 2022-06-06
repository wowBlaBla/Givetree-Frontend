import React, { FC } from "react";
import { GiveTreeLogo } from "./GiveTreeLogo";

interface LoadingContainerProps {
  message?: string;
}

export const LoadingContainer: FC<LoadingContainerProps> = ({ message }) => (
  <div className="flex flex-1 absolute inset-0 justify-center items-center w-full min-h-screen h-full bg-black bg-opacity-50 z-50">
    <div className="flex flex-col justify-center items-center w-full h-full max-h-screen space-y-5 pt-72">
      <GiveTreeLogo className="w-12 h-12 animate-pulse" />
      <h3 className="text-white font-semibold">{message ?? "Loading..."}.</h3>
    </div>
  </div>
);
