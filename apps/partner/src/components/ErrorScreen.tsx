import React, { FC } from "react";

interface ErrorScreenProps {
  text?: string;
}

export const ErrorScreen: FC<ErrorScreenProps> = ({ text }) => (
  <div className="flex flex-1 flex-col w-full min-h-screen mx-auto space-x-3">
    <div className="flex flex-1 flex-col justify-center items-center w-full min-h-full space-y-5">
      <h2 className="text-4xl font-semibold">Oops...something went wrong</h2>
      <h3 className="text-gray-600 font-semibold">{text ?? "Loading..."}.</h3>
    </div>
  </div>
);
