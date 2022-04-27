import React, { FC } from "react";

interface ItemBoxProps {
  title: string;
  value: string | number;
}

export const ItemBox: FC<ItemBoxProps> = (props) => {
  return (
    <div className="grid grid-cols-2 w-full max-w-xs shadow-md">
      <div className="whitespace-nowrap text-sm sm:text-base text-center rounded-l-md border-2 border-b-2 bg-brand-orange bg-opacity-5 border-brand-orange text-brand-orange p-1">
        {props.title}
      </div>
      <div className="whitespace-nowrap text-sm sm:text-base text-center font-semibold rounded-r-md border-r-2 border-t-2 border-b-2 border-brand-orange text-brand-orange p-1">
        {props.value}
      </div>
    </div>
  );
};
