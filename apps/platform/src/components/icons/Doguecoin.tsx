import { FC } from "react";

interface Props {
  className?: string;
}

export const Doguecoin: FC<Props> = ({ className }) => (
  <svg
    width="46"
    height="46"
    viewBox="0 0 46 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_1086_27147)">
      <circle cx="23" cy="22" r="20" fill="#C2A633" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.3871 32.462H23.2919H23.2921C23.2921 32.462 33.0007 33.2887 33.0007 22.1681C33.0007 11.4787 24.1349 11.5166 22.4214 11.5239C22.3813 11.5241 22.3451 11.5242 22.313 11.5242H16.3869V20.8511H13.9531V23.1357H16.3871V32.462ZM20.2762 15.3943H23.0004C24.0193 15.3943 29.1454 15.811 29.1536 22.2435C29.1617 28.5993 23.9934 28.5928 23.162 28.5917C23.152 28.5917 23.1426 28.5917 23.1339 28.5917H20.2762V23.1355H24.5621V20.8509H20.2762V15.3943Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_1086_27147"
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
          result="effect1_dropShadow_1086_27147"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1086_27147"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
