import React, { FC } from "react";
import cx from "classnames";

interface BlendProps {
  className?: string;
  small?: boolean;
  large?: boolean;
  xlarge?: boolean;
}

export const DarkBlendTop: FC<BlendProps> = (props) => (
  <div className="absolute bottom-0 w-full z-10">
    <div
      className={cx(
        "relative w-full h-16 bg-gradient-to-t from-brand-black to-transparent",
        props.className,
        {
          "h-10": props.small,
          "h-32": props.large,
          "h-56": props.xlarge,
        }
      )}
    />
  </div>
);

export const DarkBlendBottom: FC<BlendProps> = (props) => (
  <div className="absolute bottom-0 w-full z-10">
    <div
      className={cx(
        "relative w-full h-16 bg-gradient-to-b from-transparent to-brand-black",
        props.className,
        {
          "h-10": props.small,
          "h-32": props.large,
          "h-56": props.xlarge,
        }
      )}
    />
  </div>
);
