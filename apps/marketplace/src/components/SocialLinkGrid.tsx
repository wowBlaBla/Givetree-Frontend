import React, { FC } from "react";
import { ExternalLink } from "./ExternalLink";

interface SocialLinkGridProps {
  websiteUrl?: string;
  twitterUrl?: string;
  discordUrl?: string;
  contractUrl?: string;
}

export const SocialLinkGrid: FC<SocialLinkGridProps> = (props) => (
  <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mt-6">
    {props.websiteUrl && <ExternalLink href={props.websiteUrl}>Website</ExternalLink>}
    {props.twitterUrl && <ExternalLink href={props.twitterUrl}>Twitter</ExternalLink>}
    {props.discordUrl && <ExternalLink href={props.discordUrl}>Discord</ExternalLink>}
    {props.contractUrl && <ExternalLink href={props.contractUrl}>Contract</ExternalLink>}
  </div>
);
