import React, { FC } from "react";
import Image from "next/image";
import MainBannerImg from "./../images/main-banner.png";
import { SmileyIcon } from "./icons/SmileyIcon";
import { PrimaryButton } from "./PrimaryButton";
import { LightBlendTop } from "./BoxBlends";

export const MainBanner: FC = () => (
  <div className="relative min-w-full min-h-full max-h-128 overflow-hidden">
    <div className="relative lg:absolute inset-0 h-auto sm:h-full">
      <Image
        className="object-cover w-full min-h-full"
        src={MainBannerImg}
        alt="main banner image"
      />
      <div className="absolute bottom-1 w-full lg:hidden">
        <LightBlendTop />
      </div>
    </div>

    <div className="flex justify-center lg:justify-start max-w-screen-xl mx-auto md:py-12 lg:py-16 px-5">
      <div className="relative w-full max-w-lg p-6 sm:p-10 rounded-md bg-black bg-opacity-70 text-white">
        <h2 className="text-3xl sm:text-4xl font-normal">
          The GiveTree NFT Marketplace & Metaverse Game-For-Good
        </h2>
        <p className="mt-1 sm:mt-3 text-xs sm:text-sm">
          A % of every single NFT transaction is donated to charity
        </p>

        <div className="mt-5 space-x-4">
          <PrimaryButton>Explore</PrimaryButton>
          <PrimaryButton>Start Minting</PrimaryButton>
        </div>

        <p className="flex items-center mt-5 text-sm">
          <SmileyIcon className="w-3 h-3" />
          <span className="ml-1 cursor-pointer hover:underline">
            Learn more about GiveTree
          </span>
        </p>
      </div>
    </div>
  </div>
);
