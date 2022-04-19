import React, { FC } from "react";

interface Props {
  className?: string;
}

export const FacebookIcon: FC<Props> = ({ className }) => (
  <svg
    className={className}
    height="512"
    viewBox="0 0 152 152"
    width="512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Layer_2" data-name="Layer 2">
      <g id="_01.facebook" data-name="01.facebook">
        <path d="m76 0a76 76 0 1 0 76 76 76 76 0 0 0 -76-76zm19.26 68.8-1.26 10.59a2 2 0 0 1 -2 1.78h-11v31.4a1.42 1.42 0 0 1 -1.4 1.43h-11.2a1.42 1.42 0 0 1 -1.4-1.44l.06-31.39h-8.33a2 2 0 0 1 -2-2v-10.58a2 2 0 0 1 2-2h8.27v-10.26c0-11.87 7.07-18.33 17.4-18.33h8.47a2 2 0 0 1 2 2v8.91a2 2 0 0 1 -2 2h-5.19c-5.62.09-6.68 2.78-6.68 6.8v8.85h12.32a2 2 0 0 1 1.94 2.24z" />
      </g>
    </g>
  </svg>
);
