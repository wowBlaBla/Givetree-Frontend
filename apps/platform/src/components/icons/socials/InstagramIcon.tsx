import React, { FC } from "react";

interface Props {
  className?: string;
}

export const InstagramIcon: FC<Props> = ({ className }) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M8.74756 0C3.92381 0 0 3.92744 0 8.75244V21.2524C0 26.0762 3.92744 30 8.75244 30H21.2524C26.0762 30 30 26.0726 30 21.2476V8.74756C30 3.92381 26.0726 0 21.2476 0H8.74756ZM23.75 5C24.44 5 25 5.56 25 6.25C25 6.94 24.44 7.5 23.75 7.5C23.06 7.5 22.5 6.94 22.5 6.25C22.5 5.56 23.06 5 23.75 5ZM15 7.5C19.1362 7.5 22.5 10.8638 22.5 15C22.5 19.1362 19.1362 22.5 15 22.5C10.8638 22.5 7.5 19.1362 7.5 15C7.5 10.8638 10.8638 7.5 15 7.5ZM15 10C13.6739 10 12.4021 10.5268 11.4645 11.4645C10.5268 12.4021 10 13.6739 10 15C10 16.3261 10.5268 17.5979 11.4645 18.5355C12.4021 19.4732 13.6739 20 15 20C16.3261 20 17.5979 19.4732 18.5355 18.5355C19.4732 17.5979 20 16.3261 20 15C20 13.6739 19.4732 12.4021 18.5355 11.4645C17.5979 10.5268 16.3261 10 15 10Z" />
  </svg>
);