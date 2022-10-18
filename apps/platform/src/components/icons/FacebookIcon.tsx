import React, { FC } from "react";

interface Props {
  className?: string;
}

export const FacebookIcon: FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="12"
    height="24"
    viewBox="0 0 12 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.2137 13.3278L11.8356 9.23262H7.94521V6.57631C7.94521 5.45568 8.48767 4.36272 10.2301 4.36272H12V0.876308C12 0.876308 10.3945 0.599609 8.86027 0.599609C5.6548 0.599609 3.56164 2.56141 3.56164 6.11145V9.23262H0V13.3278H3.56164V23.2281C4.27671 23.3415 5.00822 23.3996 5.75342 23.3996C6.49863 23.3996 7.23014 23.3415 7.94521 23.2281V13.3278H11.2137Z"
      fill="#1877F2"
    />
  </svg>
);
