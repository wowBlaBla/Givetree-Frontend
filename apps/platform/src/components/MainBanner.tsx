import React, { FC } from "react";
import { SmileyIcon } from "./icons/SmileyIcon";
import { PrimaryLink } from "./PrimaryButton";
import cx from "classnames";
import { BackgroundImage } from "./BackgroundImage";

interface MainBannerProps {
  height?: string;
  imageAsset: string;
  title: string;
  subtitle: string;
  teaser?: string;
  teaserLink?: string;
  ctaLink1?: string;
  ctaLink1Text?: string;
  ctaLink2?: string;
  ctaLink2Text?: string;
}

export const MainBanner: FC<MainBannerProps> = ({
  height,
  imageAsset,
  title,
  subtitle,
  teaser,
  teaserLink,
  ctaLink1,
  ctaLink1Text,
  ctaLink2,
  ctaLink2Text,
}) => (
  <div className={cx("relative min-w-full min-h-full overflow-hidden", height)}>
    <BackgroundImage imageAsset={imageAsset} />

    <div className="flex justify-center items-center lg:justify-start max-w-screen-3xl h-full mx-auto py-16 px-4">
      <div className="relative w-full max-w-lg xl:max-w-2xl p-6 sm:p-10 rounded-xl bg-black bg-opacity-70 text-white">
        <h2 className="text-3xl sm:text-4xl xl:text-5xl font-normal">{title}</h2>
        <p className="mt-1 sm:mt-3 text-xs sm:text-sm xl:text-base">{subtitle}</p>

        <div className="mt-6 space-x-4">
          {ctaLink1 && <PrimaryLink to={ctaLink1}>{ctaLink1Text}</PrimaryLink>}
          {ctaLink2 && <PrimaryLink to={ctaLink2}>{ctaLink2Text}</PrimaryLink>}
        </div>

        {teaser && (
          <p className="flex items-center mt-6 text-sm xl:text-base">
            <SmileyIcon className="w-4 h-4 xl:w-5 xl:h-5" />
            <a href={teaserLink} className="ml-1 cursor-pointer hover:underline">
              {teaser}
            </a>
          </p>
        )}
      </div>
    </div>
  </div>
);
