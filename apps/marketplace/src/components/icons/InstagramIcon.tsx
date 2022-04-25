import React, { FC } from "react";

interface Props {
  className?: string;
}

export const InstagramIcon: FC<Props> = ({ className }) => (
  <svg
    className={className}
    height="512"
    viewBox="0 0 152 152"
    width="512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Layer_2" data-name="Layer 2">
      <g id="_05.instagram" data-name="05.instagram">
        <circle cx="76" cy="76" r="12.01" />
        <path d="m91.36 45.65h-30.72a15 15 0 0 0 -15 15v30.71a15 15 0 0 0 15 15h30.72a15 15 0 0 0 15-15v-30.72a15 15 0 0 0 -15-14.99zm-15.36 50.01a19.66 19.66 0 1 1 19.65-19.66 19.68 19.68 0 0 1 -19.65 19.66zm19.77-34.46a4.86 4.86 0 1 1 4.85-4.85 4.86 4.86 0 0 1 -4.85 4.85z" />
        <path d="m76 0a76 76 0 1 0 76 76 76 76 0 0 0 -76-76zm38 91.36a22.66 22.66 0 0 1 -22.64 22.64h-30.72a22.67 22.67 0 0 1 -22.64-22.64v-30.72a22.67 22.67 0 0 1 22.64-22.64h30.72a22.67 22.67 0 0 1 22.64 22.64z" />
      </g>
    </g>
  </svg>
);
