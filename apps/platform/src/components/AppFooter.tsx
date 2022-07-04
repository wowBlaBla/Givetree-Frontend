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
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} GiveTree Pty Ltd - ABN 18 654 544 242
      </p>
      <div className="flex">
        <SocialLink
          socialIcon={<DiscordSolidIcon className="w-6 h-6 fill-current sm:w-8 sm:h-8" />}
          link="https://t.co/r2jNYwMmEt"
        />
        <SocialLink
          socialIcon={<TwitterSolidIcon className="w-6 h-6 fill-current sm:w-8 sm:h-8" />}
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
