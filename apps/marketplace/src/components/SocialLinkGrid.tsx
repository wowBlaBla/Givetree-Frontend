import React, { FC, ReactNode } from "react";
import { ExternalLinkIcon } from "./icons/ExternalLinkIcon";

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
}

const ExternalLink: FC<ExternalLinkProps> = (props) => (
  <a
    className="flex flex-1 items-center space-x-2 text-gray-600 hover:text-gray-900 transition-hover"
    href={props.href}
    target="_blank"
    rel="noreferrer"
  >
    <ExternalLinkIcon className="w-3 h-3 sm:w-4 sm:h-4" />
    <span className="text-base lg:text-xl">{props.children}</span>
  </a>
);

interface SocialLinkGridProps {
  websiteUrl?: string;
  twitterUrl?: string;
  discordUrl?: string;
  contractUrl?: string;
}

export const SocialLinkGrid: FC<SocialLinkGridProps> = (props) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
    {props.websiteUrl && <ExternalLink href={props.websiteUrl}>Website</ExternalLink>}
    {props.twitterUrl && <ExternalLink href={props.twitterUrl}>Twitter</ExternalLink>}
    {props.discordUrl && <ExternalLink href={props.discordUrl}>Discord</ExternalLink>}
    {props.contractUrl && <ExternalLink href={props.contractUrl}>Contract</ExternalLink>}
  </div>
);
