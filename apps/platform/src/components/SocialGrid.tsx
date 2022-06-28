import React, { FC, ReactNode } from "react";
import { ExternalLinkIcon } from "./icons/ExternalLinkIcon";

interface SocialLinkProps {
  href: string;
  children: ReactNode;
}

const SocialLink: FC<SocialLinkProps> = ({ href, children }) => (
  <div className="px-2 py-1 border border-gray-100 rounded-md shrink">
    <a
      className="flex items-center flex-1 space-x-2 text-gray-600 whitespace-nowrap hover:text-brand-orange transition-hover"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <ExternalLinkIcon className="w-3 h-3" />
      <span className="text-sm">{children}</span>
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
    {websiteUrl && <SocialLink href={websiteUrl}>Website</SocialLink>}
    {twitterUrl && <SocialLink href={twitterUrl}>Twitter</SocialLink>}
    {discordUrl && <SocialLink href={discordUrl}>Discord</SocialLink>}
    {contractUrl && <SocialLink href={contractUrl}>Contract</SocialLink>}
  </div>
);
