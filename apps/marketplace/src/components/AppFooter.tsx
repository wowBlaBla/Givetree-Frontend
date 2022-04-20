import React, { FC, ReactNode } from "react";
import { DiscordIcon } from "./icons/DiscordIcon";
import { TwitterIcon } from "./icons/TwitterIcon";
import { YoutubeIcon } from "./icons/YoutubeIcon";

interface SocialLinkProps {
  link: string;
  socialIcon: ReactNode;
}

const SocialLink: FC<SocialLinkProps> = ({ link, socialIcon }) => (
  <a
    className="mx-2 rounded-full text-white hover:bg-white hover:text-brand-orange cursor-pointer transition-hover"
    href={link}
    target="_blank"
    rel="noreferrer"
  >
    {socialIcon}
  </a>
);

export const AppFooter = () => (
  <div className="bg-brand-black text-white p-2 sm:p-3">
    <div className="flex flex-col-reverse sm:flex-row justify-between items-center">
      <p className="mt-2 sm:mt-0 text-xs sm:text-base">
        All Rights Reserved GiveTree Pty Ltd {new Date().getFullYear()}
      </p>
      <div className="flex">
        <SocialLink
          socialIcon={<DiscordIcon className="fill-current w-6 h-6 sm:w-8 sm:h-8" />}
          link="https://t.co/r2jNYwMmEt"
        />
        <SocialLink
          socialIcon={<TwitterIcon className="fill-current w-6 h-6 sm:w-8 sm:h-8" />}
          link="https://twitter.com/GiveTreeWagmi"
        />
        <SocialLink
          socialIcon={<YoutubeIcon className="fill-current w-6 h-6 sm:w-8 sm:h-8" />}
          link="https://www.youtube.com/channel/UCKX2iQ5HgL2Zg4PsaMtMfZg"
        />
      </div>
    </div>
  </div>
);
