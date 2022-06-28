import React, { FC } from "react";
import cx from "classnames";

interface BlendProps {
  className?: string;
}

export const DarkBlendTop: FC<BlendProps> = ({ className }) => (
  <div
    className={cx(
      "absolute w-full from-brand-black to-transparent top-0 bg-gradient-to-b",
      className
    )}
  />
);

export const DarkBlendBottom: FC<BlendProps> = ({ className }) => (
  <div
    className={cx(
      "absolute w-full from-brand-black to-transparent bottom-0 bg-gradient-to-t",
      className
    )}
  />
);
