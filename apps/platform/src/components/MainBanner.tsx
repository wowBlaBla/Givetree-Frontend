import React, { FC } from "react";
import { PrimaryLink } from "./PrimaryButton";
import { BackgroundAsset } from "./BackgroundAsset";

interface MainBannerProps {
  height?: string;
  backgroundAsset: string;
  title: string;
  subtitle: string;
  ctaLink1?: string;
  ctaLink1Text?: string;
  ctaLink2?: string;
  ctaLink2Text?: string;
}

export const MainBanner: FC<MainBannerProps> = ({
  backgroundAsset,
  title,
  subtitle,
  ctaLink1,
  ctaLink1Text,
  ctaLink2,
  ctaLink2Text,
}) => (
  <div className="relative min-w-full min-h-full overflow-hidden sm:h-128">
    <BackgroundAsset asset={backgroundAsset} />

    <div className="flex relative justify-center items-center lg:justify-start max-w-screen-3xl h-full mx-auto py-16 px-4 z-10">
      <div className="relative w-full max-w-lg xl:max-w-2xl rounded-xl p-6 pb-10 sm:pb-12 sm:p-10 bg-brand-black bg-opacity-70 text-white">
        <h2 className="text-3xl sm:text-4xl xl:text-5xl font-normal">{title}</h2>
        <h4 className="mt-1 sm:mt-3 text-xs sm:text-sm xl:text-base">{subtitle}</h4>

        <div className="mt-6">
          {ctaLink1 && <PrimaryLink href={ctaLink1}>{ctaLink1Text}</PrimaryLink>}
          {ctaLink2 && <PrimaryLink href={ctaLink2}>{ctaLink2Text}</PrimaryLink>}
        </div>
      </div>
    </div>
  </div>
);
