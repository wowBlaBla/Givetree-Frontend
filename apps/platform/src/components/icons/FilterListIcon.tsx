import React, { FC } from "react";
import cx from "classnames";
interface Props {
  className?: string;
}

export const FilterListIcon: FC<Props> = ({ className }) => (
    <svg
        className={cx("text-black", className)}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
    >
        <path d="M20 36h8v-4h-8v4zM6 12v4h36v-4H6zm6 14h24v-4H12v4z" />
        <path d="M0 0h48v48H0z" fill="none" />
    </svg>
);
