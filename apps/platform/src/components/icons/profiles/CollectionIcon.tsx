import { FC } from "react";

interface Props {
  className?: string;
}

export const CollectionIcon: FC<Props> = ({ className }) => (
  <svg
    width="20"
    height="19"
    viewBox="0 0 20 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M10 18.3333C9.825 18.3333 9.65 18.2783 9.5025 18.1683C9.115 17.88 0 11.0358 0 5.83333C0 2.6175 2.6175 0 5.83333 0C7.79833 0 9.21833 1.06 10 1.84333C10.7817 1.06 12.2017 0 14.1667 0C17.3825 0 20 2.61667 20 5.83333C20 11.0358 10.885 17.88 10.4975 18.1692C10.35 18.2783 10.175 18.3333 10 18.3333Z"
      fill="#BCBBBB"
    />
  </svg>
);
