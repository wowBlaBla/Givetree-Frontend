import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import cx from "classnames";
import { useMetaMask } from "metamask-react";
import { useWallet } from "@solana/wallet-adapter-react";

import { Button, ButtonProps } from "./Button";
import { useWalletModal } from "../../hooks/useWalletModal";
import { MetaMaskIcon } from "../icons/MetaMaskIcon";
import { WalletModalButton } from "./WalletModalButton";
import { WalletConnectButton } from "./WalletConnectButton";
import { WalletIcon } from "./WalletIcon";
import { MetaMaskStatus } from "../../typed/enum/metaMaskStatus";

export const WalletButton: FC<ButtonProps> = ({ children, ...props }) => {
  const ref = useRef<HTMLUListElement>(null);
  const { publicKey, wallet, disconnect } = useWallet();
  const { account, status } = useMetaMask();

  const { setVisible } = useWalletModal();
  const [copied, setCopied] = useState(false);
  const [active, setActive] = useState(false);

  const base58 = useMemo(() => {
    if (publicKey) return publicKey.toBase58();
    if (account) return account;
  }, [account, publicKey]);

  const content = useMemo(() => {
    if (children) {
      return children;
    }

    if (!base58) {
      return null;
    }

    return base58.slice(0, 4) + ".." + base58.slice(-4);
  }, [children, base58]);

  const copyAddress = useCallback(async () => {
    if (account) {
      await navigator.clipboard.writeText(account);
      setCopied(true);
      setTimeout(() => setCopied(false), 400);
    }

    if (base58) {
      await navigator.clipboard.writeText(base58);
      setCopied(true);
      setTimeout(() => setCopied(false), 400);
    }
  }, [account, base58]);

  const openDropdown = useCallback(() => {
    setActive(true);
  }, []);

  const closeDropdown = useCallback(() => {
    setActive(false);
  }, []);

  const openModal = useCallback(() => {
    setVisible(true);
    closeDropdown();
  }, [closeDropdown, setVisible]);

  const modalOnClick = () => {
    setActive(false);
  };

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const node = ref.current;

      // Do nothing if clicking dropdown or its descendants
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
    if (wallet) {
      return <WalletIcon wallet={wallet} />;
    }

    if (account) {
      return <MetaMaskIcon />;
    }

    return undefined;
  };

  if (
    !wallet &&
    !account &&
    status !== (MetaMaskStatus.Connecting || MetaMaskStatus.Connected)
  ) {
    return (
      <WalletModalButton onClick={modalOnClick} {...props}>
        {children}
      </WalletModalButton>
    );
  }

  if (!base58) {
    return (
      <WalletConnectButton className="bg-brand-orange">{children}</WalletConnectButton>
    );
  }

  const handleDisconnect = async () => {
    disconnect();
  };

  return (
    <div className="wallet-adapter-dropdown">
      <Button
        aria-expanded={active}
        className="wallet-adapter-button-trigger"
        style={{ pointerEvents: active ? "none" : "auto", ...props.style }}
        onClick={openDropdown}
        startIcon={walletIcon()}
        {...props}
      >
        <span className="hidden sm:inline-block ml-2">{content}</span>
      </Button>

      <ul
        aria-label="dropdown-list"
        className={cx("wallet-adapter-dropdown-list", {
          "wallet-adapter-dropdown-list-active": active,
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
        <li
          onClick={openModal}
          className="wallet-adapter-dropdown-list-item"
          role="menuitem"
        >
          Change wallet
        </li>
        <li
          onClick={handleDisconnect}
          className="wallet-adapter-dropdown-list-item"
          role="menuitem"
        >
          Disconnect
        </li>
      </ul>
    </div>
  );
};
