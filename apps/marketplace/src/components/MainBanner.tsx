import React, { FC } from "react";
import MainBannerImg from "./../assets/images/main-banner.png";
import { SmileyIcon } from "./icons/SmileyIcon";
import { PrimaryButton } from "./PrimaryButton";

export const MainBanner: FC = () => (
  <div className="relative min-w-full min-h-full max-h-128 overflow-hidden">
    <div
      className="bg-brand-black absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${MainBannerImg.src})` }}
    />

    <div className="flex justify-center lg:justify-start max-w-screen-3xl mx-auto py-16 px-3">
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
