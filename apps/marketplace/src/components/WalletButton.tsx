import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import cx from "classnames";

export const WalletButton = () => {
  const { connected } = useWallet();

  return (
    <WalletMultiButton
      className={cx(
        "mx-5 h-10 text-white bg-brand-orange hover:bg-white uppercase transition ease-in-out duration-150",
        {
          "wallet-button text-brand-orange border border-brand-orange bg-brand-orange-active hover:bg-brand-orange-active":
            connected,
        }
      )}
    />
  );
};
