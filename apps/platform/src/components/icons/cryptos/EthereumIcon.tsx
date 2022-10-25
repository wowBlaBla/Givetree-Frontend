import React, { FC } from "react";

interface Props {
  className?: string;
}

export const EthereumIcon: FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="20" cy="20" r="19.5" fill="#F6F6F6" stroke="black" />
    <path
      d="M19.9972 7.14258L19.8203 7.72858V24.7314L19.9972 24.9036L28.0889 20.2383L19.9972 7.14258Z"
      fill="#343434"
    />
    <path
      d="M19.9962 7.14258L11.9043 20.2383L19.9962 24.9036V16.6508V7.14258Z"
      fill="#8C8C8C"
    />
    <path
      d="M19.9981 26.3982L19.8984 26.5168V32.5734L19.9981 32.8573L28.0948 21.7354L19.9981 26.3982Z"
      fill="#3C3C3B"
    />
    <path d="M19.9962 32.8573V26.3982L11.9043 21.7354L19.9962 32.8573Z" fill="#8C8C8C" />
    <path d="M19.9941 24.9031L28.0858 20.2379L19.9941 16.6504V24.9031Z" fill="#141414" />
    <path d="M11.9043 20.2379L19.9962 24.9031V16.6504L11.9043 20.2379Z" fill="#393939" />
  </svg>
);
