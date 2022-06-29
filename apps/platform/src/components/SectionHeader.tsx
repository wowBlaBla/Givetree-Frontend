import React, { FC } from "react";
import cx from "classnames";
import { SectionTitle } from "./SectionTitle";
import { SectionSubtitle } from "./SectionSubtitle";
import { PlatformRoute } from "../configs/routes";
import { PrimaryLink } from "./PrimaryCta";

export interface SectionHeaderProps {
  className?: string;
  textCenter?: boolean;
  mainTitle: string;
  subtitle?: string;
  linkText?: string;
  link?: PlatformRoute;
}

export const SectionHeader: FC<SectionHeaderProps> = ({
  className,
  mainTitle,
  subtitle,
  textCenter,
  linkText,
  link,
}) => (
  <div
    className={cx("flex", className, {
      "justify-between": link,
      "justify-center items-center text-center": textCenter,
    })}
  >
    <div className="flex flex-col my-3 space-y-3 px-1">
      <SectionTitle className="">{mainTitle}</SectionTitle>
      {subtitle && (
        <SectionSubtitle className="text-gray-600 font-semibold">
          {subtitle}
        </SectionSubtitle>
      )}
    </div>

    {link && (
      <div className="flex items-center">
        <PrimaryLink href={link}>{linkText}</PrimaryLink>
      </div>
    )}
  </div>
);
