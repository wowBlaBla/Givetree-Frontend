import React, { FC } from "react";
import cx from "classnames";
import { SectionTitle } from "./SectionTitle";
import { SectionSubtitle } from "./SectionSubtitle";
import { PlatformRoute } from "../configs/routes";
// import { PrimaryLink } from "./PrimaryCta";
import { Link } from "wouter";
import { ArrowCircleRightIcon } from "@heroicons/react/solid";

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
    className={cx("items-center flex flex-wrap flex-col md:flex-row light-black", className, {
      "justify-between": link,
      "justify-center items-baseline text-center": textCenter,
    })}
  >
    <div className="flex flex-col px-1 text-left w-full md:w-auto">
      <SectionTitle className={titleClassName}>{mainTitle}</SectionTitle>
      {subtitle && (
        <SectionSubtitle className={cx("font-semibold text-gray-600 light-black mb-12.5", titleClassName)}>
          {subtitle}
        </SectionSubtitle>
      )}
    </div>

    {link && (
      <div className="text-black w-full md:w-auto">
        <Link href={link} className="flex gap-1 items-center">
          <span className="mt-1.5">{linkText}</span>
          <ArrowCircleRightIcon className="w-5 h-5 mt-1.5"/>
        </Link>
      </div>
    )}
  </div>
);
