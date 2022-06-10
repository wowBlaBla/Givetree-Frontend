import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import cx from "classnames";
import { useMetaMask } from "metamask-react";

import { Button, ButtonProps } from "./Button";
import { MetaMaskIcon } from "../icons/MetaMaskIcon";
import { WalletConnectButton } from "./WalletConnectButton";
import { MetaMaskStatus } from "../../typed/enum/metaMaskStatus";
import { WalletModal } from "./WalletModal";
import { isMetaMaskConnected, isMetaMaskNotConnected } from "../../utils/isMetaMask";

export const WalletButton: FC<ButtonProps> = ({ children, ...props }) => {
  const ref = useRef<HTMLUListElement>(null);
  const { account, status: metaMaskReadyStatus } = useMetaMask();
  const [copied, setCopied] = useState(false);
  const [active, setActive] = useState(false);

  const walletAddress = useMemo(() => {
    if (account) return account;
  }, [account]);

  const content = useMemo(() => {
    if (children) {
      return children;
    }

    if (!walletAddress) {
      return null;
    }

    return walletAddress.slice(0, 4) + ".." + walletAddress.slice(-4);
  }, [children, walletAddress]);

  const copyAddress = useCallback(async () => {
    if (account) {
      await navigator.clipboard.writeText(account);
      setCopied(true);
      setTimeout(() => setCopied(false), 400);
    }

    if (walletAddress) {
      await navigator.clipboard.writeText(walletAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 400);
    }
  }, [account, walletAddress]);

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
    if (account) {
      return <MetaMaskIcon />;
    }

    return undefined;
  };

  const handleDisconnect = () => {
    return;
  };

  if (!account && isMetaMaskNotConnected(metaMaskReadyStatus as MetaMaskStatus)) {
    return (
      <>
        <label htmlFor="wallet-modal" className="wallet-adapter-button bg-brand-orange">
          Connect wallet
        </label>
        <WalletModal closeDropdown={closeDropdown} />;
      </>
    );
  }

  if (!walletAddress) {
    return (
      <WalletConnectButton className="bg-brand-orange">{children}</WalletConnectButton>
    );
  }

  return (
    <div className="block relative">
      <Button
        aria-expanded={active}
        className={cx("bg-brand-orange-active", {
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
            onClick={handleDisconnect}
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
