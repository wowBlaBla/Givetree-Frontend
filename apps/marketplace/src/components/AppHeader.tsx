import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import cx from "classnames";
import { GiveTreeLogo } from "./GiveTreeLogo";
import { WalletMultiButton } from "./wallet/WalletMultiButton";

export const AppHeader = () => {
  const { connected } = useWallet();

  return (
    <div className="w-full bg-brand-black">
      <div className="flex justify-between items-center mx-auto py-4">
        <div className="mx-1 sm:mx-2">
          <GiveTreeLogo className="h-8 sm:h-10" />
        </div>

        <div className="mx-2 sm:mx-2">
          <WalletMultiButton
            className={cx({
              "wallet-adapter-button uppercase bg-brand-orange": !connected,
              "wallet-adapter-button-active": connected,
            })}
          />
        </div>
      </div>
    </div>
  );
};
