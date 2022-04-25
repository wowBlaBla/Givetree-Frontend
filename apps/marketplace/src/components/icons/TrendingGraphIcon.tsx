import React, { FC } from "react";

interface Props {
  className?: string;
}

export const TrendingGraphIcon: FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="18"
    height="16"
    viewBox="0 0 18 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.63245 0.0299072L11.6424 3.32092L10.3593 4.10458L9.59531 2.85364C8.18272 6.78964 4.71776 9.1255 0.411621 9.1255V7.62201C4.12543 7.62201 7.04285 5.6406 8.21691 2.24131L6.78379 2.83326L6.2098 1.44365L9.63245 0.0299072Z"
      fill="#FC4D1F"
    />
    <rect
      x="0.411621"
      y="12.1176"
      width="4.22354"
      height="3.85244"
      rx="0.5"
      fill="#FC4D1F"
    />
    <rect
      x="6.5144"
      y="9.21765"
      width="4.22354"
      height="6.75232"
      rx="0.5"
      fill="#FC4D1F"
    />
    <rect
      x="12.6174"
      y="5.21094"
      width="4.22354"
      height="10.7591"
      rx="0.5"
      fill="#FC4D1F"
    />
  </svg>
);
