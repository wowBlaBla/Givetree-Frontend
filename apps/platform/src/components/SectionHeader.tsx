import React, { FC } from "react";
import cx from "classnames";
import { SectionTitle } from "./SectionTitle";
import { SectionSubtitle } from "./SectionSubtitle";
import { PlatformRoute } from "../configs/routes";
// import { PrimaryLink } from "./PrimaryCta";
import { Link } from "wouter";

export interface SectionHeaderProps {
  className?: string;
  textCenter?: boolean;
  mainTitle: string;
  subtitle?: string;
  linkText?: string;
  link?: PlatformRoute;
  titleClassName?: string;
}

export const SectionHeader: FC<SectionHeaderProps> = ({
  className,
  mainTitle,
  subtitle,
  textCenter,
  linkText,
  link,
  titleClassName,
}) => (
  <div
    className={cx("items-center flex flex-wrap flex-col md:flex-row dark:text-white", className, {
      "justify-between": link,
      "justify-center items-center text-center": textCenter,
    })}
  >
    <div className="flex flex-col px-1 my-3 space-y-3 text-left w-full md:w-auto">
      <SectionTitle className={titleClassName}>{mainTitle}</SectionTitle>
      {subtitle && (
        <SectionSubtitle className={cx("font-semibold text-gray-600 dark:text-white", titleClassName)}>
          {subtitle}
        </SectionSubtitle>
      )}
    </div>

    {link && (
      <div className="text-right w-full md:w-auto">
        <Link href={link}>{linkText} &gt;</Link>
      </div>
    )}
  </div>
);
