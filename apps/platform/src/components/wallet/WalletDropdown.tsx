import React, { forwardRef, useCallback, useMemo, useState } from "react";
import cx from "classnames";
import { useWallet as useSolanaWallet } from "@solana/wallet-adapter-react";

interface WalletDropdownProps {
  active: boolean;
  className?: string;
}

export const WalletDropdown = forwardRef<HTMLUListElement, WalletDropdownProps>(
  ({ active, className }, ref) => {
    const { disconnect, publicKey: solanaPublicKey } = useSolanaWallet();
    const [copied, setCopied] = useState<boolean>(false);

    const solanaWalletAddress = useMemo(() => {
      if (solanaPublicKey) return solanaPublicKey.toBase58();
    }, [solanaPublicKey]);

    const copyAddress = useCallback(async () => {
      if (solanaWalletAddress) {
        await navigator.clipboard.writeText(solanaWalletAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 400);
      }
    }, [solanaWalletAddress]);

    return (
      <ul
        ref={ref}
        className={cx(
          "grid grid-cols-1 gap-4 absolute top-full right-0 z-10 w-56 mt-5 p-1 list-none border border-gray-200 bg-white rounded-lg transition-hover transform origin-top",
          {
            "visible opacity-100": active,
            "invisible opacity-0": !active,
            className,
          }
        )}
      >
        <li
          onClick={copyAddress}
          className="text-center w-full py-3 px-3 text-sm sm:text-base text-gray-500 font-bold cursor-pointer whitespace-nowrap rounded-lg button-hover"
        >
          {copied ? "Copied" : "Copy address"}
        </li>

        <li
          className="text-center w-full py-3 px-3 text-sm sm:text-base text-gray-500 font-bold cursor-pointer whitespace-nowrap rounded-lg button-hover"
          role="menuitem"
        >
          <label htmlFor="wallet-modal" className="cursor-pointer">
            Change wallet
          </label>
        </li>

        <li
          onClick={disconnect}
          className="text-center w-full py-3 px-3 text-sm sm:text-base text-gray-500 font-bold cursor-pointer whitespace-nowrap rounded-lg button-hover"
          role="menuitem"
        >
          Disconnect
        </li>
      </ul>
    );
  }
);

WalletDropdown.displayName = "WalletDropdown";
