import React, { FC } from "react";

interface Props {
  className?: string;
}

export const GBPIcon: FC<Props> = ({ className }) => (
  <svg
    width="30"
    height="22"
    viewBox="0 0 30 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect y="0.285706" width="30" height="21.4286" rx="4" fill="white" />
    <mask
      id="mask0_2696_2423"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="30"
      height="22"
    >
      <rect y="0.285706" width="30" height="21.4286" rx="4" fill="white" />
    </mask>
    <g mask="url(#mask0_2696_2423)">
      <rect y="0.285706" width="30" height="21.4286" fill="#0A17A7" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-1.37408 -1.76764L11.4286 6.86786V-1.14288H18.5714V6.86785L31.3741 -1.76764L32.9718 0.601041L22.8496 7.42855H30V14.5714H22.8496L32.9718 21.3989L31.3741 23.7676L18.5714 15.1321V23.1428H11.4286V15.1321L-1.37408 23.7676L-2.97177 21.3989L7.15043 14.5714H-3.09944e-06V7.42855H7.15043L-2.97177 0.60104L-1.37408 -1.76764Z"
        fill="white"
      />
      <path
        d="M20.0014 7.0702L33.5714 -1.85715"
        stroke="#DB1F35"
        strokeWidth="1.33333"
        strokeLinecap="round"
      />
      <path
        d="M21.4423 14.9616L33.6071 23.1611"
        stroke="#DB1F35"
        strokeWidth="1.33333"
        strokeLinecap="round"
      />
      <path
        d="M8.57734 7.04691L-4.1116 -1.50464"
        stroke="#DB1F35"
        strokeWidth="1.33333"
        strokeLinecap="round"
      />
      <path
        d="M9.9536 14.8624L-4.1116 24.1898"
        stroke="#DB1F35"
        strokeWidth="1.33333"
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 13.1428H12.8571V21.7143H17.1429V13.1428H30V8.85713H17.1429V0.285706H12.8571V8.85713H0V13.1428Z"
        fill="#E6273E"
      />
    </g>
  </svg>
);
