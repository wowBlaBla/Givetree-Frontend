import React, { FC } from "react";
import cx from "classnames";
import { SectionTitle } from "./SectionTitle";
import { SectionSubtitle } from "./SectionSubtitle";

export interface SectionHeaderProps {
  className?: string;
  textCenter?: boolean;
  mainTitle: string;
  subtitle?: string;
}

export const SectionHeader: FC<SectionHeaderProps> = ({
  className,
  mainTitle,
  subtitle,
  textCenter,
}) => (
  <div
    className={cx("flex flex-col items-center my-3 space-y-3 px-4", className, {
      "text-center": textCenter,
    })}
  >
    <SectionTitle>{mainTitle}</SectionTitle>
    <SectionSubtitle>{subtitle}</SectionSubtitle>
  </div>
);
