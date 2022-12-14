import { FC } from "react";

interface Props {
  className?: string;
}

export const ChevronRight: FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="10"
    height="18.5"
    viewBox="0 0 100 185"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.0807 184.611H7.69649C4.72733 184.611 2.0197 182.896 0.742808 180.211C-0.534084 177.526 -0.141785 174.35 1.74278 172.042L66.9873 92.3054L1.74278 12.5612C-0.141785 10.2613 -0.526392 7.08444 0.742808 4.3922C2.01201 1.69996 4.72733 0 7.69649 0H23.0807C25.3884 0 27.5729 1.03844 29.0344 2.82301L98.2635 87.4363C100.579 90.2747 100.579 94.3438 98.2635 97.1822L29.0344 181.796C27.5729 183.572 25.3884 184.611 23.0807 184.611Z"
      fill="white"
    />
  </svg>
);
