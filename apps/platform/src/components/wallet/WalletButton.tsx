import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import cx from "classnames";
import { useMetaMask } from "metamask-react";

import { Button, ButtonProps } from "./Button";
import { MetaMaskIcon } from "../icons/MetaMaskIcon";
import { WalletConnectButton } from "./WalletConnectButton";
import { MetaMaskStatus } from "../../typed/enum/metaMaskStatus";
import { WalletModal } from "./WalletModal";
import { isMetaMaskConnected, isMetaMaskNotConnected } from "../../utils/isMetaMask";
import { useWallet as useSolanaWallet } from "@solana/wallet-adapter-react";
import { WalletIcon } from "./WalletIcon";
import { ConnectWalletIcon } from "../icons/ConnectWalletIcon";

export const WalletButton: FC<ButtonProps> = ({ children, ...props }) => {
  const ref = useRef<HTMLUListElement>(null);
  const { disconnect, publicKey, wallet } = useSolanaWallet();
  const { account, status: metaMaskReadyStatus } = useMetaMask();
  const [copied, setCopied] = useState(false);
  const [active, setActive] = useState(false);

  const metaMaskWalletAddress = useMemo(() => {
    if (account) return account;
  }, [account]);

  const solanaWalletAddress = useMemo(() => {
    if (publicKey) return publicKey.toBase58();
  }, [publicKey]);

  const content = useMemo(() => {
    if (children) {
      return children;
    }

    if (metaMaskWalletAddress) {
      return metaMaskWalletAddress.slice(0, 4) + ".." + metaMaskWalletAddress.slice(-4);
    }

    if (solanaWalletAddress) {
      return solanaWalletAddress.slice(0, 4) + ".." + solanaWalletAddress.slice(-4);
    }
  }, [children, metaMaskWalletAddress, solanaWalletAddress]);

  const copyAddress = useCallback(async () => {
    if (metaMaskWalletAddress) {
      await navigator.clipboard.writeText(metaMaskWalletAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 400);
    } else if (solanaWalletAddress) {
      await navigator.clipboard.writeText(solanaWalletAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 400);
    }
  }, [metaMaskWalletAddress, solanaWalletAddress]);

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

  const walletIcon = () => {
    if (account || metaMaskReadyStatus === MetaMaskStatus.Connecting) {
      return <MetaMaskIcon />;
    }

    if (wallet) {
      return <WalletIcon wallet={wallet} />;
    }

    return undefined;
  };

  if (
    !wallet &&
    !metaMaskWalletAddress &&
    isMetaMaskNotConnected(metaMaskReadyStatus as MetaMaskStatus)
  ) {
    return (
      <>
        <label htmlFor="wallet-modal" className="wallet-adapter-button bg-brand-orange">
          <span className="block sm:hidden">
            <ConnectWalletIcon />
          </span>
          <span className="hidden sm:block">Connect wallet</span>
        </label>

        <WalletModal closeDropdown={closeDropdown} />
      </>
    );
  }

  if (!solanaWalletAddress && !metaMaskWalletAddress) {
    return (
      <WalletConnectButton startIcon={walletIcon()} className="bg-brand-orange">
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
        startIcon={walletIcon()}
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
          <label htmlFor="wallet-modal">Change wallet</label>
        </li>

        {!isMetaMaskConnected(metaMaskReadyStatus as MetaMaskStatus) && (
          <li
            onClick={disconnect}
            className="wallet-adapter-dropdown-list-item"
            role="menuitem"
          >
            Disconnect
          </li>
        )}
      </ul>

      <WalletModal closeDropdown={closeDropdown} />
    </div>
  );
};
