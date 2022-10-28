import { FC } from "react";

interface Props {
  className?: string;
  color?: string;
}

export const ChevronLeftIcon: FC<Props> = ({ className, color }) => (
  <svg
    width="10"
    height="19"
    viewBox="0 0 10 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M9.2069 0L0.37931 8.82759L0 9.22414L0.37931 9.62069L9.2069 18.4483L10 17.6552L1.56897 9.22414L10 0.793103L9.2069 0Z"
      fill={color || "#F3F3F3"}
    />
  </svg>
);
