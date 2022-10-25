import React, { FC } from "react";

interface Props {
  className?: string;
}

export const AUDIcon: FC<Props> = ({ className }) => (
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
      id="mask0_2696_2404"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="30"
      height="22"
    >
      <rect y="0.285706" width="30" height="21.4286" rx="4" fill="white" />
    </mask>
    <g mask="url(#mask0_2696_2404)">
      <rect y="0.285706" width="30" height="21.4286" fill="#0A17A7" />
      <path
        d="M0 -0.380961H-1.80217L-0.433861 0.791877L4.33333 4.87804V5.65691L-0.387492 9.02893L-0.666667 9.22834V9.57142V10.2857V11.4885L0.353333 10.851L5.90548 7.38094H6.92921L11.6938 10.7842C11.8469 10.8936 12.0304 10.9524 12.2186 10.9524C13.0568 10.9524 13.4426 9.90948 12.8062 9.36395L8.52381 5.69337V4.9145L12.9655 1.74189C13.3159 1.49161 13.5238 1.08751 13.5238 0.656913V0.285706V-0.917126L12.5038 -0.279627L6.95166 3.19047H5.92793L1.10178 -0.256783L0.927929 -0.380961H0.714286H0Z"
        fill="#FF2E3B"
        stroke="white"
        strokeWidth="1.33333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 3.85713V6.71428H5V9.66666C5 10.403 5.59695 11 6.33333 11H6.52381C7.26019 11 7.85714 10.403 7.85714 9.66666V6.71428H12.2381C12.9745 6.71428 13.5714 6.11732 13.5714 5.38094V5.19047C13.5714 4.45409 12.9745 3.85713 12.2381 3.85713H7.85714V0.285706H5V3.85713H0Z"
        fill="url(#paint0_linear_2696_2404)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 4.57142H5.71429V3.85713V0.285706H7.14286V3.85713V4.57142H12.8571V5.99999H7.14286V6.71428V10.2857H5.71429V6.71428V5.99999H0V4.57142Z"
        fill="url(#paint1_linear_2696_2404)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.42857 17.7857L5.16903 18.4479L5.40958 17.0454L4.39059 16.0521L5.7988 15.8475L6.42857 14.5714L7.05834 15.8475L8.46655 16.0521L7.44756 17.0454L7.68811 18.4479L6.42857 17.7857Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.4286 18.8571L20.4184 19.153L20.7143 18.1428L20.4184 17.1327L21.4286 17.4286L22.4387 17.1327L22.1429 18.1428L22.4387 19.153L21.4286 18.8571Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.4286 5.28572L20.4184 5.58158L20.7143 4.57143L20.4184 3.56128L21.4286 3.85715L22.4387 3.56128L22.1429 4.57143L22.4387 5.58158L21.4286 5.28572Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.7143 9.57142L24.7041 9.86729L25 8.85714L24.7041 7.84698L25.7143 8.14285L26.7244 7.84698L26.4286 8.85714L26.7244 9.86729L25.7143 9.57142Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.1428 11L16.1327 11.2958L16.4286 10.2857L16.1327 9.27554L17.1428 9.57141L18.153 9.27554L17.8571 10.2857L18.153 11.2958L17.1428 11Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.5714 12.7857L23.0663 12.9336L23.2143 12.4286L23.0663 11.9235L23.5714 12.0714L24.0765 11.9235L23.9286 12.4286L24.0765 12.9336L23.5714 12.7857Z"
        fill="white"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_2696_2404"
        x1="0"
        y1="0.285706"
        x2="0"
        y2="11"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="#F0F0F0" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_2696_2404"
        x1="0"
        y1="0.285706"
        x2="0"
        y2="10.2857"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF2E3B" />
        <stop offset="1" stopColor="#FC0D1B" />
      </linearGradient>
    </defs>
  </svg>
);
