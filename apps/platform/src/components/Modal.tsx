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
      <label className="modal-box relative w-full bg-brand-black rounded-xl" htmlFor="">
        <label
          htmlFor={modalName}
          className="absolute right-6 top-4 text-lg text-gray-400"
        >
          ✕
        </label>
        <div>{children}</div>
      </label>
    </label>
  </div>
);
