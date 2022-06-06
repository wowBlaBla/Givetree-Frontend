import React, { FC } from "react";
import cx from "classnames";
interface Props {
  className?: string;
}

export const ConnectWalletIcon: FC<Props> = ({ className }) => (
  <svg
    className={cx("w-6 h-6 text-white", className)}
    height="512"
    viewBox="0 0 24 24"
    width="512"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <g id="Wallet">
      <path d="m23 10h-1v-4a1 1 0 0 0 -1-1h-4v-3a1 1 0 0 0 -1-1h-13a3.0033 3.0033 0 0 0 -3 3v16a3.0033 3.0033 0 0 0 3 3h18a1 1 0 0 0 1-1v-4h1a1 1 0 0 0 1-1v-6a1 1 0 0 0 -1-1zm-20-7h12v2h-12a1 1 0 0 1 0-2zm17 18h-17a1.0013 1.0013 0 0 1 -1-1v-13.1714a3.4372 3.4372 0 0 0 1 .1714h17v3h-1a4 4 0 0 0 0 8h1zm2-5h-3a2 2 0 0 1 0-4h3z" />
      <circle cx="19" cy="14" r="1" />
    </g>
  </svg>
);
