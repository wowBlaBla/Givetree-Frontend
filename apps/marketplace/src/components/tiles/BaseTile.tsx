import React, { FC, ReactNode } from "react";
import cx from "classnames";

interface BaseTileProps {
  children: ReactNode;
  className?: string;
}

export const BaseTile: FC<BaseTileProps> = (props) => (
  <div className={cx("border rounded-xl shadow-lg p-5 md:p-6", props.className)}>
    {props.children}
  </div>
);
