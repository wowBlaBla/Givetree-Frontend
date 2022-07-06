import React, { FC, ReactNode, useEffect, useRef } from "react";

interface DonateModalProps {
  className?: string;
  children: ReactNode;
  openModal: boolean;
  modalName: string;
  onModalClose?: () => void;
}

export const Modal: FC<DonateModalProps> = ({
  children,
  className,
  openModal,
  modalName,
  onModalClose,
}) => {
  const modalRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    const handleOutsideModal = (event: MouseEvent | TouchEvent) => {
      const node = modalRef.current;

      if (!node || node.contains(event.target as Node)) {
        return;
      }

      if (onModalClose) {
        onModalClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideModal);
    document.addEventListener("touchstart", handleOutsideModal);

    return () => {
      document.removeEventListener("mousedown", handleOutsideModal);
      document.removeEventListener("touchstart", handleOutsideModal);
    };
  }, [modalRef, onModalClose]);

  return (
    <label ref={modalRef} className={className}>
      <input
        type="checkbox"
        id={modalName}
        className="modal-toggle"
        checked={openModal}
        readOnly
      />
      <label
        htmlFor={modalName}
        className="modal px-3 cursor-pointer bg-black bg-opacity-50"
      >
        <label className="modal-box relative w-full bg-white rounded-xl">
          <label
            htmlFor={modalName}
            className="absolute right-0 top-0 py-4 px-5 text-lg text-gray-400 hover:text-black transition-hover cursor-pointer"
            onClick={onModalClose}
          >
            ✕
          </label>
          <div className="mt-8">{children}</div>
        </label>
      </label>
    </label>
  );
};
