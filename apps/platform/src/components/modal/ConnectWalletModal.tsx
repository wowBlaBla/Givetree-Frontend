import React, { FC } from "react";
import { ConnectWallet } from "../ConnectWallet";

interface ConnectWalletModalProps {
  callback?: () => void;
}

export const ConnectWalletModal: FC<ConnectWalletModalProps> = ({ callback }) => {
  return (
    <>
      <input type="checkbox" id="connect-wallet-modal" className="modal-toggle" />
      <label htmlFor="connect-wallet-modal" className="modal cursor-pointer">
        <label className="modal-box relative bg-deep-dark" htmlFor="">
          <ConnectWallet />
        </label>
      </label>
    </>
  );
};
