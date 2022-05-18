import React, { FC, ReactNode } from "react";
import { ExternalLinkIcon } from "./icons/ExternalLinkIcon";

interface SocialLinkProps {
  href: string;
  children: ReactNode;
}

const SocialLink: FC<SocialLinkProps> = ({ href, children }) => (
  <a
    className="flex flex-1 items-center whitespace-nowrap space-x-2 text-gray-600 hover:text-gray-900 transition-hover"
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    <ExternalLinkIcon className="w-3 h-3 sm:w-4 sm:h-4" />
    <span className="text-base lg:text-lg">{children}</span>
  </a>
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
  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4 w-full max-w-lg mt-5">
    {websiteUrl && <SocialLink href={websiteUrl}>Website</SocialLink>}
    {twitterUrl && <SocialLink href={twitterUrl}>Twitter</SocialLink>}
    {discordUrl && <SocialLink href={discordUrl}>Discord</SocialLink>}
    {contractUrl && <SocialLink href={contractUrl}>Contract</SocialLink>}
  </div>
);
