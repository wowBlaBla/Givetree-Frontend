import React, { FC, forwardRef, useCallback, useMemo, useState } from "react";
import cx from "classnames";
import { useWallet as useSolanaWallet } from "@solana/wallet-adapter-react";

interface WalletDropdownProps {
  className?: string;
}

export const WalletDropdown: FC<WalletDropdownProps> = forwardRef(({ className }) => {
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
      aria-label="dropdown-list"
      className={cx("wallet-adapter-dropdown-list", {
        // "opacity-100 visible transform translate-y-2.5": active,
        className,
      })}
      // ref={ref}
      role="menu"
    >
      <li
        onClick={copyAddress}
        className="wallet-adapter-dropdown-list-item"
        role="menuitem"
      >
        {copied ? "Copied" : "Copy address"}
      </li>

      <li className="wallet-adapter-dropdown-list-item" role="menuitem">
        <label htmlFor="wallet-modal" className="cursor-pointer">
          Change wallet
        </label>
      </li>

      <li
        onClick={disconnect}
        className="wallet-adapter-dropdown-list-item"
        role="menuitem"
      >
        Disconnect
      </li>
    </ul>
  );
});

WalletDropdown.displayName = "WalletDropdown";
