import React, { FC } from "react";

interface Props {
  className?: string;
}

export const YoutubeIcon: FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="18"
    viewBox="0 0 24 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.5057 3.22892C23.2289 2.20092 22.4184 1.39038 21.3904 1.11361C19.5123 0.599609 11.9999 0.599609 11.9999 0.599609C11.9999 0.599609 4.48762 0.599609 2.60954 1.09384C1.60131 1.37061 0.771002 2.20092 0.494232 3.22892C0 5.107 0 9.00155 0 9.00155C0 9.00155 0 12.9159 0.494232 14.7742C0.771002 15.8022 1.58154 16.6127 2.60954 16.8895C4.50739 17.4035 11.9999 17.4035 11.9999 17.4035C11.9999 17.4035 19.5123 17.4035 21.3904 16.9093C22.4184 16.6325 23.2289 15.8219 23.5057 14.7939C23.9999 12.9159 23.9999 9.02132 23.9999 9.02132C23.9999 9.02132 24.0197 5.107 23.5057 3.22892Z"
      fill="#FF0000"
    />
    <path d="M9.60742 12.5993L15.8545 9.00133L9.60742 5.40332V12.5993Z" fill="white" />
  </svg>
);
