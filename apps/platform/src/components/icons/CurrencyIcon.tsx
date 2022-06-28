import React, { FC } from "react";
import { SupportedPlatform } from "../../typed/enum/supportedPlatform";
import { EthereumColorIcon } from "./EthereumColorIcon";
import { SolanaColorIcon } from "./SolanaColorIcon";

interface Props {
  className?: string;
  currency: SupportedPlatform;
}

export const CurrencyIcon: FC<Props> = ({ className, currency }) => {
  switch (currency) {
    // TODO: Hidden ETH until support has been added.
    // case SupportedPlatform.ETH:
    //   return <EthereumColorIcon className={className} />;
    case SupportedPlatform.SOL:
      return <SolanaColorIcon className={className} />;
    default:
      return <EthereumColorIcon className={className} />;
  }
};
