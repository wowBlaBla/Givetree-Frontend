import React, { FC, ReactNode } from "react";
import { DiscordSolidIcon } from "./icons/DiscordIcon";
import { TwitterSolidIcon } from "./icons/TwitterIcon";
import { YoutubeIcon } from "./icons/YoutubeIcon";

interface SocialLinkProps {
  link: string;
  socialIcon: ReactNode;
}

const SocialLink: FC<SocialLinkProps> = ({ link, socialIcon }) => (
  <a
    className="cursor-pointer text-brand-orange hover:bg-white hover:text-brand-orange-hover transition-hover w-[62px] h-[54px] rounded-lg-m border-black border px-3 p-2"
    href={link}
    target="_blank"
    rel="noreferrer"
  >
    {socialIcon}
  </a>
);

export const AppFooter = () => (
  <div className="p-2 text-gray-800 bg-white border-t border-black text-black sm:p-3">
    <div className="flex flex-col items-center justify-between gap-2 max-w-screen-xl mx-auto ">
      <div className="social-group grid md:grid-cols-2 xs:grid-cols-1 md:justify-between flex-wrap gap-5 items-center w-full py-10 justify-center">
        <div className="mail-input-group flex flex-col gap-2 w-full">
          <label className="text-xl">Join mailing list</label>
          <input
            type="email"
            className="border border-black w-full max-w-[362px] h-[54px] p-4 rounded-lg-m "
          />
        </div>
        <div className="social-links flex justify-end">
          <div className="flex flex-col gap-2 items-end">
            <label className="text-xl w-full text-left">Join our community</label>
            <div className="flex flex-wrap justify-center gap-3">
              <SocialLink
                socialIcon={<DiscordSolidIcon className="w-8 h-8 sm:w-9 sm:h-9" />}
                link="https://t.co/r2jNYwMmEt"
              />
              <SocialLink
                socialIcon={<TwitterSolidIcon className="w-8 h-8 sm:w-9 sm:h-9" />}
                link="https://twitter.com/GiveTreeWagmi"
              />
              <SocialLink
                socialIcon={<YoutubeIcon className="w-8 h-8 sm:w-9 sm:h-9" />}
                link="https://www.youtube.com/channel/UCKX2iQ5HgL2Zg4PsaMtMfZg"
              />
              <SocialLink
                socialIcon={<YoutubeIcon className="w-8 h-8 sm:w-9 sm:h-9" />}
                link="https://www.youtube.com/channel/UCKX2iQ5HgL2Zg4PsaMtMfZg"
              />
              <SocialLink
                socialIcon={<YoutubeIcon className="w-8 h-8 sm:w-9 sm:h-9" />}
                link="https://www.youtube.com/channel/UCKX2iQ5HgL2Zg4PsaMtMfZg"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full border-black"/>

      <div className="text-xl grid md:grid-cols-3 sm:grid-cols-2 flex-wrap gap-8 justify-between w-full mt-10">
        <div className="copyright flex flex-col gap-5">
          <img
            src="/android-chrome-512x512.png"
            alt="brand-logo"
            className="w-16 ratio-square"
          />
          <div className="flex flex-col gap-2">
            <span>GiveTree where impact is made.</span>
            <span>2022 GiveTree PTY LTD. All rights reserved</span>
          </div>
        </div>
        <div className="marketplace-launches flex flex-col gap-5">
          <label className="font-bold">Marketplace</label>
          <ul className="list-none flex flex-col gap-3">
            <li>Upcoming launches</li>
            <li>Recently launched</li>
          </ul>
        </div>
        <div className="resources flex flex-col gap-5">
          <label className="font-bold">Resources</label>
          <ul className="list-none flex flex-col gap-3">
            <li>Customer portal</li>
            <li>Apply to become a verified creator</li>
            <li>Apply to become a verified charity</li>
            <li>Terms of use</li>
            <li>Privacy policy</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
