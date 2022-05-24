import React from "react";
import { GiveTreeLogo } from "./GiveTreeLogo";
import { UserIcon } from "./UserIcon";
// import { AdminRoute } from "../configs/routes";

export const AppHeader = (): JSX.Element => {
  return (
    <div className="grid grid-cols-2 w-full bg-brand-black p-3 z-50">
      <div className="flex items-center space-x-2">
        <GiveTreeLogo className="w-8 h-8" />
        <span className="text-white text-xl font-bold tracking-wider">Partnerships</span>
      </div>

      <div className="flex flex-row-reverse w-full">
        <UserIcon className="w-9 h-9 text-gray-400 hover:text-white cursor-pointer transition ease-in-out duration-150" />
      </div>
    </div>
  );
};
