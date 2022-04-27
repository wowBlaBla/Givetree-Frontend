import React, { FC, ReactNode } from "react";
import { ExternalLinkIcon } from "./icons/ExternalLinkIcon";

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
}

export const ExternalLink: FC<ExternalLinkProps> = (props) => (
  <a
    className="flex items-center space-x-2 text-gray-600 text-opacity-80 hover:text-opacity-100 transition-hover"
    href={props.href}
    target="_blank"
    rel="noreferrer"
  >
    <ExternalLinkIcon className="w-3 h-3 sm:w-4 sm:h-4" />
    <span className="text-base sm:text-xl">{props.children}</span>
  </a>
);
