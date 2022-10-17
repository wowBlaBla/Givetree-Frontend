import { FC } from "react";

interface Props {
  className?: string;
}

export const BitCoinIcon: FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="46"
    height="46"
    viewBox="0 0 46 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_1086_27135)">
      <path
        d="M42.4014 26.8382C39.7298 37.5525 28.8768 44.0731 18.16 41.4012C7.44764 38.73 0.926317 27.8776 3.5991 17.164C6.26938 6.44845 17.1224 -0.0727317 27.8361 2.59849C38.5522 5.26971 45.0729 16.1234 42.4014 26.8382V26.8382Z"
        fill="#F7931A"
      />
      <path
        d="M31.8182 19.1505C32.2164 16.4893 30.1899 15.0587 27.419 14.1043L28.3178 10.4994L26.1232 9.95249L25.2481 13.4625C24.6712 13.3187 24.0786 13.1831 23.4898 13.0487L24.3712 9.51562L22.1778 8.96875L21.2783 12.5725C20.8008 12.4637 20.332 12.3562 19.8769 12.2431L19.8794 12.2318L16.8529 11.4762L16.2691 13.8199C16.2691 13.8199 17.8973 14.1931 17.863 14.2162C18.7518 14.4381 18.9124 15.0262 18.8856 15.4924L17.8617 19.5993C17.923 19.6149 18.0024 19.6374 18.0899 19.6724C18.0167 19.6543 17.9386 19.6343 17.858 19.6149L16.4228 25.368C16.314 25.638 16.0384 26.043 15.4171 25.8892C15.439 25.9211 13.8219 25.4911 13.8219 25.4911L12.7324 28.0029L15.5883 28.7148C16.1197 28.8479 16.6403 28.9873 17.1529 29.1185L16.2447 32.7648L18.4368 33.3116L19.3362 29.7042C19.9351 29.8667 20.5164 30.0167 21.0852 30.1579L20.1888 33.7485L22.3834 34.2954L23.2917 30.656C27.0339 31.3642 29.848 31.0785 31.0325 27.6942C31.987 24.9692 30.985 23.3974 29.016 22.3724C30.4499 22.0418 31.53 21.0986 31.8182 19.1505V19.1505ZM26.8039 26.1811C26.1257 28.9061 21.5371 27.4329 20.0494 27.0636L21.2546 22.233C22.7422 22.6042 27.5127 23.3392 26.8039 26.1811ZM27.4827 19.1111C26.8639 21.5899 23.0448 20.3305 21.8059 20.0218L22.8985 15.6406C24.1374 15.9493 28.1272 16.5255 27.4827 19.1111Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_1086_27135"
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
          result="effect1_dropShadow_1086_27135"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1086_27135"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
