import React, { FC } from "react";

interface Props {
  className?: string;
}

export const YoutubeIcon: FC<Props> = ({ className }) => (
  <svg
    className={className}
    height="512"
    viewBox="0 0 152 152"
    width="512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Layer_2" data-name="Layer 2">
      <g id="_04.youtube" data-name="04.youtube">
        <path d="m66.91 61.44 23.71 14.56-23.71 14.57z" />
        <path d="m76 0a76 76 0 1 0 76 76 76 76 0 0 0 -76-76zm36.22 94.29c-1.52 4.67-6.55 7.51-11.18 8.16a236.82 236.82 0 0 1 -50.08 0c-4.63-.65-9.66-3.49-11.18-8.16a94.94 94.94 0 0 1 0-36.57c1.52-4.72 6.55-7.51 11.22-8.16a236.82 236.82 0 0 1 50.08 0c4.63.65 9.66 3.48 11.18 8.16a94.94 94.94 0 0 1 -.04 36.57z" />
      </g>
    </g>
  </svg>
);
