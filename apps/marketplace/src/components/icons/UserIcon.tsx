import React, { FC } from "react";

interface Props {
  className?: string;
}

export const UserIcon: FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="29"
    height="29"
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="14.8098" cy="10.9248" r="3.61765" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.07155 19.5739C9.07057 19.3195 9.12745 19.0683 9.23787 18.8392C9.58439 18.1462 10.5616 17.7789 11.3724 17.6126C11.9572 17.4878 12.5501 17.4044 13.1466 17.3631C14.251 17.2661 15.3618 17.2661 16.4662 17.3631C17.0627 17.4049 17.6556 17.4882 18.2404 17.6126C19.0513 17.7789 20.0285 18.1116 20.375 18.8392C20.597 19.3062 20.597 19.8484 20.375 20.3154C20.0285 21.0431 19.0513 21.3758 18.2404 21.5352C17.6563 21.6651 17.0632 21.7508 16.4662 21.7916C15.5673 21.8678 14.6642 21.8817 13.7634 21.8332C13.5555 21.8332 13.3545 21.8332 13.1466 21.7916C12.5518 21.7513 11.961 21.6656 11.3794 21.5352C10.5616 21.3758 9.59132 21.0431 9.23787 20.3154C9.12801 20.0837 9.07119 19.8303 9.07155 19.5739Z"
      fill="currentColor"
    />
    <circle cx="14.75" cy="14.5" r="13.25" stroke="currentColor" strokeWidth="2" />
  </svg>
);
