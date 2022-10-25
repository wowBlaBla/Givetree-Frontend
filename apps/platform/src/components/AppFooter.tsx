import React from "react";
import { GiveTreeLogo } from "./GiveTreeLogo";
import { PrimaryButton } from "./PrimaryCta";
import { MediumIcon } from "./icons/socials/MediumIcon";
import { DiscordSolidIcon } from "./icons/socials/DiscordIcon";
import { InstagramIcon } from "./icons/socials/InstagramIcon";
import { YoutubeIcon } from "./icons/socials/YoutubeIcon";
import { TwitterSolidIcon } from "./icons/socials/TwitterIcon";
import { FacebookIcon } from "./icons/socials/FacebookIcon";

export const AppFooter = () => (
  <div className="text-black bg-deep-dark">
    <div className="flex flex-col items-center mx-auto max-w-[560px] py-8 px-2">
      <GiveTreeLogo className="w-[100px] text-brand-black" />
      <div className="w-full flex flex-col items-center mt-4">
        <div className="w-full flex flex-col">
          <label className="text-xl text-white text-center">
            <b>GiveTree</b> is making direct donations of
            <br /> crypto & NFT fundraisers easy
          </label>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-8">
            <input
              type="text"
              placeholder="Name"
              className="border border-black h-[54px] p-4 rounded-lg-m outline-0"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-black h-[54px] p-4 rounded-lg-m outline-0"
            />
          </div>
          <PrimaryButton className="rounded-md py-4 px-6 w-full mt-3">
            STAY IN THE LOOP
          </PrimaryButton>
        </div>
      </div>
      {/* <div className="copyright py-5 mt-3 w-full">
        <p className="text-start text-md text-base-content">&copy; Givetree 2022</p>
      </div> */}
    </div>
    <div className="relative flex flex-col lg:flex-row items-center justify-between w-full h-[160px] py-8 md:py-4 lg:py-2 lg:h-[100px] bg-black text-white px-2 md:px-4 lg:px-8">
      <div className="flex items-center z-10">
        <GiveTreeLogo className="w-[40px] text-brand-black mr-4 cursor-pointer" />
        <DiscordSolidIcon className="fill-white w-[30px] h-[30px] mr-4 cursor-pointer" />
        <TwitterSolidIcon className="fill-white w-[30px] h-[30px] mr-4 cursor-pointer" />
        <YoutubeIcon className="fill-white w-[30px] h-[30px] mr-4 cursor-pointer" />
        <MediumIcon className="fill-white w-[30px] h-[30px] mr-4 cursor-pointer" />
        <InstagramIcon className="fill-white w-[30px] h-[30px] mr-4 cursor-pointer" />
        <FacebookIcon className="fill-white w-[30px] h-[30px] mr-4 cursor-pointer" />
      </div>
      <div className="relative lg:absolute w-full h-full left-0 top-0 right-0 height-0 flex justify-center items-center z-0">
        <label className="text-[#999999] font-bold">TERMS OF USE & PRIVACY POLICY</label>
      </div>
      <div className="flex items-center z-10">
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 0C2.2412 0 0 2.2412 0 5C0 7.7588 2.2412 10 5 10C7.7588 10 10 7.7588 10 5C10 2.2412 7.7588 0 5 0ZM5 0.434783C7.52381 0.434783 9.56522 2.47619 9.56522 5C9.56522 7.52381 7.52381 9.56522 5 9.56522C2.47619 9.56522 0.434783 7.52381 0.434783 5C0.434783 2.47619 2.47619 0.434783 5 0.434783ZM5 1.95652C3.92206 1.95652 3.04348 2.83511 3.04348 3.91304V6.08696C3.04348 7.16489 3.92206 8.04348 5 8.04348C6.07794 8.04348 6.95652 7.16489 6.95652 6.08696H6.52174C6.52174 6.92989 5.84293 7.6087 5 7.6087C4.15707 7.6087 3.47826 6.92989 3.47826 6.08696V3.91304C3.47826 3.07011 4.15707 2.3913 5 2.3913C5.84293 2.3913 6.52174 3.07011 6.52174 3.91304H6.95652C6.95652 2.83511 6.07794 1.95652 5 1.95652Z"
            fill="#808080"
          />
        </svg>
        <label className="text-[#808080] ml-2">2022 GiveTree</label>
      </div>
    </div>
  </div>
);
