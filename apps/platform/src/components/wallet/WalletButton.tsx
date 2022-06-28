import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import cx from "classnames";
import { useWallet as useSolanaWallet } from "@solana/wallet-adapter-react";

import { Button, ButtonProps } from "./Button";
import { WalletConnectButton } from "./WalletConnectButton";
import { WalletIcon } from "./WalletIcon";
import { WalletModal } from "./WalletModal";
import { ConnectWalletIcon } from "../icons/ConnectWalletIcon";

export const WalletButton: FC<ButtonProps> = ({ children, ...props }) => {
  const ref = useRef<HTMLUListElement>(null);
  const { disconnect, publicKey: solanaPublicKey, wallet } = useSolanaWallet();
  const [copied, setCopied] = useState(false);
  const [active, setActive] = useState(false);

  const solanaWalletAddress = useMemo(() => {
    if (solanaPublicKey) return solanaPublicKey.toBase58();
  }, [solanaPublicKey]);

  const content = useMemo(() => {
    if (children) {
      return children;
    }

    if (solanaWalletAddress) {
      return solanaWalletAddress.slice(0, 4) + ".." + solanaWalletAddress.slice(-4);
    }
  }, [children, solanaWalletAddress]);

  const copyAddress = useCallback(async () => {
    if (solanaWalletAddress) {
      await navigator.clipboard.writeText(solanaWalletAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 400);
    }
  }, [solanaWalletAddress]);

  const openDropdown = useCallback(() => {
    setActive(true);
  }, []);

  const closeDropdown = useCallback(() => {
    setActive(false);
  }, []);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const node = ref.current;

      if (!node || node.contains(event.target as Node)) {
        return;
      }

      closeDropdown();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, closeDropdown]);

  if (!wallet) {
    return (
      <>
        <label htmlFor="wallet-modal" className="wallet-adapter-button bg-brand-orange">
          <span className="block md:hidden">
            <ConnectWalletIcon />
          </span>
          <span className="hidden md:block">Connect wallet</span>
        </label>

        <WalletModal closeDropdown={closeDropdown} />
      </>
    );
  }

  if (!solanaWalletAddress) {
    return (
      <WalletConnectButton
        startIcon={<WalletIcon wallet={wallet} />}
        className="bg-brand-orange"
      >
        {children}
      </WalletConnectButton>
    );
  }

  return (
    <div className="block relative">
      <Button
        aria-expanded={active}
        className={cx("wallet-adapter-button-active", {
          "pointer-events-auto": active,
        })}
        onClick={openDropdown}
        startIcon={<WalletIcon wallet={wallet} />}
        {...props}
      >
        {content}
      </Button>

      <ul
        aria-label="dropdown-list"
        className={cx("wallet-adapter-dropdown-list", {
          "opacity-100 visible transform translate-y-2.5": active,
        })}
        ref={ref}
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

      <WalletModal closeDropdown={closeDropdown} />
    </div>
  );
};
