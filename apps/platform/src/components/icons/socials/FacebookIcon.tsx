import React, { FC } from "react";

interface Props {
  className?: string;
}

export const FacebookIcon: FC<Props> = ({ className }) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M15 0C6.71625 0 0 6.71625 0 15C0 22.52 5.54 28.73 12.7575 29.815V18.975H9.04625V15.0325H12.7575V12.4088C12.7575 8.065 14.8738 6.15875 18.4838 6.15875C20.2125 6.15875 21.1275 6.2875 21.56 6.345V9.78625H19.0975C17.565 9.78625 17.03 11.24 17.03 12.8775V15.0325H21.5212L20.9125 18.975H17.03V29.8463C24.3512 28.8538 30 22.5938 30 15C30 6.71625 23.2838 0 15 0Z" />
  </svg>
);
