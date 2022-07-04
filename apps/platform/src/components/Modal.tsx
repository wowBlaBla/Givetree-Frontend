import React, { FC, ReactNode, useEffect, useRef } from "react";

interface DonateModalProps {
  className?: string;
  children: ReactNode;
  modalName: string;
  onModalClose?: () => void;
}

export const Modal: FC<DonateModalProps> = ({
  children,
  className,
  modalName,
  onModalClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const node = modalRef.current;

      if (!node || node.contains(event.target as Node)) {
        return;
      }

      if (onModalClose) {
        onModalClose();
      }
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [modalRef, onModalClose]);

  return (
    <div ref={modalRef} className={className}>
      <input type="checkbox" id={modalName} className="modal-toggle" />
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
    </div>
  );
};
