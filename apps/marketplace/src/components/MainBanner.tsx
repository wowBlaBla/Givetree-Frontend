import React, { FC } from "react";
import { SmileyIcon } from "./icons/SmileyIcon";
import { PrimaryLink } from "./PrimaryButton";

interface MainBannerProps {
  imageAsset?: string;
  title: string;
  subtitle: string;
  teaser?: string;
  teaserLink?: string;
  ctaLink1?: string;
  ctaLink1Text?: string;
  ctaLink2?: string;
  ctaLink2Text?: string;
}

export const MainBanner: FC<MainBannerProps> = (props) => (
  <div className="relative min-w-full h-96 xl:h-128 overflow-hidden">
    <div
      className="bg-brand-black absolute inset-0 bg-cover bg-center bg-no-repeat w-full min-h-full"
      style={{ backgroundImage: `url(${props.imageAsset})` }}
    />

    <div className="flex justify-center items-center lg:justify-start max-w-screen-3xl h-full mx-auto py-16 px-4">
      <div className="relative w-full max-w-lg xl:max-w-2xl p-6 sm:p-10 rounded-md bg-black bg-opacity-70 text-white">
        <h2 className="text-3xl sm:text-4xl xl:text-5xl font-normal">{props.title}</h2>
        <p className="mt-1 sm:mt-3 text-xs sm:text-sm xl:text-base">{props.subtitle}</p>

        <div className="mt-6 space-x-4">
          {props.ctaLink1 && (
            <PrimaryLink to={props.ctaLink1}>{props.ctaLink1Text}</PrimaryLink>
          )}
          {props.ctaLink2 && (
            <PrimaryLink to={props.ctaLink2}>{props.ctaLink2Text}</PrimaryLink>
          )}
        </div>

        {props.teaser && (
          <p className="flex items-center mt-6 text-sm xl:text-base">
            <SmileyIcon className="w-3 h-3" />
            <a href={props.teaserLink} className="ml-1 cursor-pointer hover:underline">
              {props.teaser}
            </a>
          </p>
        )}
      </div>
    </div>
  </div>
);
