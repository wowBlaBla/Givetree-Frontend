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
    className="mx-2 rounded-full cursor-pointer text-brand-orange hover:bg-white hover:text-brand-orange-hover transition-hover"
    href={link}
    target="_blank"
    rel="noreferrer"
  >
    {socialIcon}
  </a>
);

export const AppFooter = () => (
  <div className="p-2 text-gray-800 bg-white border-t border-gray-200 sm:p-3">
    <div className="flex flex-col-reverse items-center justify-between sm:flex-row">
      <p className="mt-2 text-xs sm:mt-0 sm:text-base">
        All Rights Reserved GiveTree Pty Ltd {new Date().getFullYear()}
      </p>
      <div className="flex">
        <SocialLink
          socialIcon={<DiscordIcon className="w-6 h-6 fill-current sm:w-8 sm:h-8" />}
          link="https://t.co/r2jNYwMmEt"
        />
        <SocialLink
          socialIcon={<TwitterIcon className="w-6 h-6 fill-current sm:w-8 sm:h-8" />}
          link="https://twitter.com/GiveTreeWagmi"
        />
        <SocialLink
          socialIcon={<YoutubeIcon className="w-6 h-6 fill-current sm:w-8 sm:h-8" />}
          link="https://www.youtube.com/channel/UCKX2iQ5HgL2Zg4PsaMtMfZg"
        />
      </div>
    </div>
  </div>
);
