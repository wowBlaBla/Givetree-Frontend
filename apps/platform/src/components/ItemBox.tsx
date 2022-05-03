import React, { FC } from "react";
import cx from "classnames";

const ItemBoxStyles = `whitespace-nowrap text-sm xl:text-md text-center border-gray-800 p-1`;

interface ItemBoxProps {
  title: string;
  value: string | number;
}

export const ItemBox: FC<ItemBoxProps> = (props) => {
  return (
    <div className="grid w-full max-w-xs grid-cols-2 shadow-md">
      <div
        className={cx(
          ItemBoxStyles,
          "rounded-l-md border-2 border-b-2 bg-gray-800 text-white"
        )}
      >
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
