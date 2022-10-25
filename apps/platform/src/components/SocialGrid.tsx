import React, { FC, ReactNode } from "react";
import { ContractIcon } from "./icons/ContractIcon";
import { DiscordOutlineIcon } from "./icons/socials/DiscordIcon";
import { GlobeIcon } from "./icons/GlobeIcon";
import { TwitterOutlineIcon } from "./icons/TwitterIcon";

interface SocialLinkProps {
  href: string;
  children: ReactNode;
}

export const SocialLink: FC<SocialLinkProps> = ({ href, children }) => (
  <div className="px-2 py-1 border border-gray-100 rounded-md shrink">
    <a
      className="flex items-center flex-1 space-x-2 text-gray-600 whitespace-nowrap hover:text-brand-orange transition-hover"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  </div>
);

interface SocialGridProps {
  websiteUrl?: string;
  twitterUrl?: string;
  discordUrl?: string;
  contractUrl?: string;
}

export const SocialGrid: FC<SocialGridProps> = ({
  websiteUrl,
  twitterUrl,
  discordUrl,
  contractUrl,
}) => (
  <div className="flex flex-row items-center w-full max-w-lg space-x-4">
    {websiteUrl && (
      <SocialLink href={websiteUrl}>
        <GlobeIcon className="w-4 h-4" />
        <span className="hidden sm:block">Website</span>
      </SocialLink>
    )}
    {twitterUrl && (
      <SocialLink href={twitterUrl}>
        <TwitterOutlineIcon className="w-4 h-4" />
        <span className="hidden sm:block">Twitter</span>
      </SocialLink>
    )}
    {discordUrl && (
      <SocialLink href={discordUrl}>
        <DiscordOutlineIcon className="w-4 h-4" />
        <span className="hidden sm:block">Discord</span>
      </SocialLink>
    )}
    {contractUrl && (
      <SocialLink href={contractUrl}>
        <ContractIcon className="w-4 h-4" />
        <span className="hidden sm:block">Contract</span>
      </SocialLink>
    )}
  </div>
);
