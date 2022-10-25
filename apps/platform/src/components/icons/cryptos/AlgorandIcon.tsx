import { FC } from "react";

interface Props {
  className?: string;
}

export const AlgorandIcon: FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="46"
    height="46"
    viewBox="0 0 46 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_1086_27145)">
      <circle cx="23" cy="22" r="20" fill="url(#paint0_linear_1086_27145)" />
      <path
        d="M29.6658 29.1398H27.2768L25.7253 23.377L22.3894 29.1405H19.7223L24.8782 20.2192L24.0484 17.1221L17.0961 29.1424H14.4277L23.2384 13.9043H25.5744L26.5972 17.6902H29.0074L27.3618 20.5473L29.6658 29.1398Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_1086_27145"
        x="0"
        y="0"
        width="46"
        height="46"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.129412 0 0 0 0 0.105882 0 0 0 0 0.305882 0 0 0 0.15 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1086_27145"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1086_27145"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_1086_27145"
        x1="23"
        y1="2"
        x2="23"
        y2="42"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A8206C" />
        <stop offset="1" stopColor="#F37E33" />
      </linearGradient>
    </defs>
  </svg>
);
