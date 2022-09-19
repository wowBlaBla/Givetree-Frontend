import { FC } from "react";

interface Props {
    className?: string;
}

export const LoadingIcon:FC<Props> = ({ className }) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={{
      background: "none",
      display: "block",
      shapeRendering: "auto"
    }}
    className={className}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <circle
      cx={50}
      cy={50}
      r={32}
      strokeWidth={10}
      stroke="#fff"
      strokeDasharray="50.26548245743669 50.26548245743669"
      fill="none"
      strokeLinecap="round"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1.5873015873015872s"
        keyTimes="0;1"
        values="0 50 50;360 50 50"
      />
    </circle>
  </svg>
)