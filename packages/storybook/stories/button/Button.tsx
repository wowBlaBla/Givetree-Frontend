import { Component, ReactNode } from "react";
import tw from "twin.macro";

const ButtonStyles = `
  border-0
  rounded-md

  px-3
  py-2
  
  text-base
  text-white
  bg-brand-orange
  hover:bg-brand-orange-hover
  
  transition
  ease-in-out
  duration-150
`;

export interface ButtonProps {
  small?: boolean;
  large?: boolean;
  className?: string;
  children: ReactNode;
  iconLeft?: Component;
  iconRight?: Component;
}

export const Button = tw.button`${ButtonStyles}`;

// export const Button: FC<ButtonProps> = (props) => {
//   return (
//     <button
//       className={
//         (cx(ButtonStyles, {
//           "px-5 py-4 text-lg": props.large,
//           "px-2 py-1 text-sm": props.small,
//         }),
//         props.className)
//       }
//     >
//       {props.children}
//     </button>
//   );
// };
