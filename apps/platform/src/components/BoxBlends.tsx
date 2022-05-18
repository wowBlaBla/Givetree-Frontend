import React, { FC } from "react";
import cx from "classnames";

interface BlendProps {
  className?: string;
  small?: boolean;
  large?: boolean;
  xlarge?: boolean;
  top?: boolean;
  bottom?: boolean;
}

export const DarkBlend: FC<BlendProps> = ({
  className,
  small,
  large,
  xlarge,
  top,
  bottom,
}) => (
  <div
    className={cx("absolute w-full from-brand-black to-transparent", className, {
      "top-0 bg-gradient-to-b": top,
      "bottom-0 bg-gradient-to-t": bottom,
      "h-16": small,
      "h-12 sm:h-32": large,
      "h-12 sm:h-72": xlarge,
    })}
  />
);
