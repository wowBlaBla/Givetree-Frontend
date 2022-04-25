import React, { FC } from "react";
import cx from "classnames";
import { SectionTitle } from "./SectionTitle";
import { SectionSubtitle } from "./SectionSubtitle";

export interface SectionHeaderProps {
  className?: string;
  mainTitle: string;
  subtitle?: string;
}

export const SectionHeader: FC<SectionHeaderProps> = (props) => (
  <div
    className={cx(
      "flex flex-col items-center my-6 sm:my-12 space-y-3 px-4",
      props.className
    )}
  >
    <SectionTitle>{props.mainTitle}</SectionTitle>
    <SectionSubtitle>{props.subtitle}</SectionSubtitle>
  </div>
);
