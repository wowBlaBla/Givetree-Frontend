import React, { FC } from "react";
import cx from "classnames";

interface InputBoxProps extends React.HTMLAttributes<HTMLInputElement> {
  Icon?: React.FC;
}

export const InputBox: FC<InputBoxProps> = ({ Icon, className, ...props }) => {
  return (
    <div className={cx(className, "explore-input-container")}>
      {Icon && (
        <div className="h-full flex items-center">
          <div className="w-[12px] h-[12px]">
            <Icon />
          </div>
        </div>
      )}
      <div className="flex-1 relative flex">
        <input {...props} />
      </div>
    </div>
  );
};
