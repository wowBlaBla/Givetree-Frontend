import React, { FC, ReactNode } from "react";
import { FacebookIcon } from "./icons/FacebookIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { TwitterIcon } from "./icons/TwitterIcon";
import { YoutubeIcon } from "./icons/YoutubeIcon";

interface SocialLinkProps {
  link: string;
  socialIcon: ReactNode;
}

const SocialLink: FC<SocialLinkProps> = ({ link, socialIcon }) => (
  <a
    className="mx-2 rounded-full text-white hover:bg-white hover:text-brand-orange transition ease-in-out duration-150"
    href={link}
    target="_blank"
    rel="noreferrer"
  >
    {socialIcon}
  </a>
);

export const AppFooter = () => (
  <div className="bg-brand-black text-white p-3">
    <div className="flex flex-col sm:flex-row justify-between items-center">
      <p>All Rights Reserved GiveTree Pty Ltd {new Date().getFullYear()}</p>
      <div className="flex">
        <SocialLink
          socialIcon={<InstagramIcon className="fill-current w-8 h-8" />}
          link="https://www.instagram.com/givetreewagmi/"
        />
        <SocialLink
          socialIcon={<FacebookIcon className="fill-current w-8 h-8" />}
          link="https://www.facebook.com/GiveTree"
        />
        <SocialLink
          socialIcon={<TwitterIcon className="fill-current w-8 h-8" />}
          link="https://twitter.com/GiveTreeWagmi"
        />
        <SocialLink
          socialIcon={<LinkedinIcon className="fill-current w-8 h-8" />}
          link="https://www.linkedin.com/company/givetreewagmi"
        />
        <SocialLink
          socialIcon={<YoutubeIcon className="fill-current w-8 h-8" />}
          link="https://www.youtube.com/channel/UCKX2iQ5HgL2Zg4PsaMtMfZg"
        />
      </div>
    </div>
  </div>
);
