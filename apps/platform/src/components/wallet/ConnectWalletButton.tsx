import React, {
  createRef,
  FC,
  MouseEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import cx from "classnames";
import { useWallet as useSolanaWallet } from "@solana/wallet-adapter-react";

import { WalletIcon } from "./WalletIcon";
import { WalletModal } from "./WalletModal";
import { ConnectWalletIcon } from "../icons/ConnectWalletIcon";
import { ButtonProps, PrimaryButton, PrimaryModalButton } from "../PrimaryCta";
import { WalletDropdown } from "./WalletDropdown";

export const ConnectWalletButton: FC<ButtonProps> = ({ children }) => {
  const walletDropdownRef = createRef<HTMLUListElement>();
  const {
    connect,
    connecting,
    connected,
    disconnect,
    publicKey: solanaPublicKey,
    wallet,
  } = useSolanaWallet();
  const [active, setActive] = useState<boolean>(false);

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

  const openDropdown = useCallback(() => {
    setActive(!active);
  }, [active]);

  const closeDropdown = useCallback(() => {
    setActive(false);
  }, []);

  const walletReadyState = useMemo(() => {
    if (children) return children;
    if (connecting) return "Connecting...";
    if (connected) return "Connected";
    if (wallet) return "Connect";
    return "Connect Wallet";
  }, [children, connecting, connected, wallet]);

  const handlewalletConnect: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      if (!event.defaultPrevented)
        connect().catch(() => {
          disconnect();
        });
    },
    [connect, disconnect]
  );

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const node = walletDropdownRef.current;

      if (!node || node.contains(event.target as Node)) {
        return;
      }
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [active, walletDropdownRef, closeDropdown]);

  if (!wallet) {
    return (
      <>
        <PrimaryModalButton htmlFor="wallet-modal">
          <div className="flex items-center space-x-2">
            <ConnectWalletIcon className="w-6 h-6" />
            <div className="hidden md:block whitespace-nowrap">Connect wallet</div>
          </div>
        </PrimaryModalButton>

        <WalletModal closeDropdown={closeDropdown} />
      </>
    );
  }

  if (!solanaWalletAddress) {
    return (
      <PrimaryButton onClick={handlewalletConnect}>
        <div className="flex items-center space-x-2">
          <WalletIcon wallet={wallet} />
          <div className="hidden md:block whitespace-nowrap">{walletReadyState}</div>
        </div>
      </PrimaryButton>
    );
  }

  return (
    <div className="block relative">
      <PrimaryButton
        aria-expanded={active}
        className={cx(
          "py-1 px-3 border border-brand-orange bg-brand-orange-active bg-opacity-20"
        )}
        onClick={openDropdown}
      >
        <div className="flex items-center space-x-1">
          <WalletIcon wallet={wallet} />
          <div className="hidden md:block whitespace-nowrap">{content}</div>
        </div>
      </PrimaryButton>

      <WalletDropdown active={active} ref={walletDropdownRef} />
      <WalletModal closeDropdown={closeDropdown} />
    </div>
  );
};
