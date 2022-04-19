import React from "react";
import { GiveTreeLogo } from "./icons/GiveTreeIcon";
import { WalletButton } from "./WalletButton";

export const AppHeader = () => {
  return (
    <div className="flex justify-between items-center w-full bg-brand-black py-4">
      <div className="mx-5">
        <GiveTreeLogo className="h-10" />
      </div>

      <WalletButton />
    </div>
  );
};
