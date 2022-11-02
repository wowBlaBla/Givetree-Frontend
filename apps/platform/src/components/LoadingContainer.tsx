import React, { FC } from "react";
import { GiveTreeLogo } from "./GiveTreeLogo";

interface LoadingContainerProps {
  message?: string;
}

export const LoadingContainer: FC<LoadingContainerProps> = ({ message }) => (
  <div className="flex flex-1 fixed inset-0 justify-center items-center w-screen h-screen bg-black bg-opacity-50 z-[9999]">
    <div className="flex flex-col justify-center items-center w-full h-full max-h-screen space-y-5">
      <GiveTreeLogo className="w-24 h-24 animate-pulse" />
      <h3 className="text-white font-semibold">{message ?? "Loading..."}</h3>
    </div>
  </div>
);
