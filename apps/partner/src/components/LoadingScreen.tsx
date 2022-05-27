import React, { FC } from "react";
import { GiveTreeLogo } from "./GiveTreeLogo";

interface LoadingScreenProps {
  text?: string;
}

export const LoadingScreen: FC<LoadingScreenProps> = ({ text }) => (
  <div className="flex flex-1 flex-col w-full min-h-screen mx-auto space-x-3">
    <div className="flex flex-1 flex-col justify-center items-center w-full min-h-full space-y-3">
      <GiveTreeLogo className="w-12 h-12 animate-pulse" />
      <h3 className="text-gray-600 font-semibold">{text ?? "Loading..."}.</h3>
    </div>
  </div>
);
