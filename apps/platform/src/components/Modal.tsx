import React, { FC, ReactNode } from "react";

interface DonateModalProps {
  className?: string;
  children: ReactNode;
  modalName: string;
}

export const Modal: FC<DonateModalProps> = ({ children, className, modalName }) => (
  <div className={className}>
    <input type="checkbox" id={modalName} className="modal-toggle" />
    <label
      htmlFor={modalName}
      className="modal px-3 cursor-pointer bg-black bg-opacity-50"
    >
      <label className="modal-box relative w-full bg-white rounded-xl">
        <label
          htmlFor={modalName}
          className="absolute right-0 top-0 py-4 px-5 text-lg text-gray-400 hover:text-black transition-hover cursor-pointer"
        >
          ✕
        </label>
        <div>{children}</div>
      </label>
    </label>
  </div>
);
