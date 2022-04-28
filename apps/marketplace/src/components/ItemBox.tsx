import React, { FC } from "react";
import cx from "classnames";
const ItemBoxStyles = `whitespace-nowrap text-sm xl:text-lg text-center bg-brand-orange bg-opacity-5 border-brand-orange text-brand-orange p-1`;

interface ItemBoxProps {
  title: string;
  value: string | number;
}

export const ItemBox: FC<ItemBoxProps> = (props) => {
  return (
    <div className="grid grid-cols-2 w-full max-w-xs shadow-md">
      <div className={cx(ItemBoxStyles, "rounded-l-md border-2 border-b-2")}>
        {props.title}
      </div>
      <div
        className={cx(
          ItemBoxStyles,
          "font-semibold rounded-r-md border-r-2 border-t-2 border-b-2"
        )}
      >
        {props.value}
      </div>
    </div>
  );
};
