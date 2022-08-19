import React, { FC } from "react";
import cx from "classnames";
import { SectionTitle } from "./SectionTitle";
import { SectionSubtitle } from "./SectionSubtitle";
import { PlatformRoute } from "../configs/routes";
import { PrimaryLink } from "./PrimaryCta";
import { Link } from "wouter";

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
    className={cx("items-center", className, {
      "justify-between": link,
      "justify-center items-center text-center": textCenter,
    })}
  >
    <div className="flex flex-col px-1 my-3 space-y-3">
      <SectionTitle>{mainTitle}</SectionTitle>
      {subtitle && (
        <SectionSubtitle className="font-semibold text-gray-600">
          {subtitle}
        </SectionSubtitle>
      )}
    </div>

    {link && (
      <div className="items-center text-right">
        <Link href={link}>{linkText} &gt;</Link>
      </div>
    )}
  </div>
);
