import { FC } from "react";

interface Props {
  className?: string;
}

export const FlowIcon: FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="46"
    height="46"
    viewBox="0 0 46 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_1086_27143)">
      <circle cx="23" cy="22" r="20" fill="#00EF8B" />
      <path d="M30.9961 18.9268H26.0723V23.8506H30.9961V18.9268Z" fill="white" />
      <path
        d="M21.1488 25.7014C21.1488 26.7141 20.3107 27.5522 19.298 27.5522C18.2853 27.5522 17.4472 26.7141 17.4472 25.7014C17.4472 24.6887 18.2853 23.8506 19.298 23.8506H21.1488V18.9268H19.298C15.5615 18.9268 12.5234 21.9649 12.5234 25.7014C12.5234 29.4379 15.5615 32.476 19.298 32.476C23.0346 32.476 26.0726 29.4379 26.0726 25.7014V23.8506H21.1488V25.7014Z"
        fill="white"
      />
      <path d="M26.0722 18.9268H21.1484V23.8506H26.0722V18.9268Z" fill="#00EF8B" />
      <path
        d="M27.923 16.4472H33.4754V11.5234H27.923C24.1865 11.5234 21.1484 14.5615 21.1484 18.298V18.9266H26.0722V18.298C26.0722 17.2853 26.9103 16.4472 27.923 16.4472Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_1086_27143"
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
          result="effect1_dropShadow_1086_27143"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1086_27143"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
