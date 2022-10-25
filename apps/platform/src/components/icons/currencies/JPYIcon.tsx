import React, { FC } from "react";

interface Props {
  className?: string;
}

export const JPYIcon: FC<Props> = ({ className }) => (
  <svg
    width="40"
    height="30"
    viewBox="0 0 40 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect
      x="0.5"
      y="1.21429"
      width="39"
      height="27.5714"
      rx="3.5"
      fill="white"
      stroke="#F5F5F5"
    />
    <mask
      id="mask0_2696_2450"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="40"
      height="30"
    >
      <rect
        x="0.5"
        y="1.21429"
        width="39"
        height="27.5714"
        rx="3.5"
        fill="white"
        stroke="white"
      />
    </mask>
    <g mask="url(#mask0_2696_2450)">
      <circle cx="20" cy="15" r="8.57143" fill="url(#paint0_linear_2696_2450)" />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_2696_2450"
        x1="11.4286"
        y1="6.42859"
        x2="11.4286"
        y2="23.5714"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D81441" />
        <stop offset="1" stopColor="#BB0831" />
      </linearGradient>
    </defs>
  </svg>
);
