import { FC } from "react";

interface Props {
    campaignName?: string
}

export const CollectionBadge:FC<Props> = ({ campaignName }) => {
    return (
        <a
            href="#"
            className="text-lg-m py-1 px-3 text-center border border-base-content border-opacity-25 rounded-lg-m inline-block"
        >
            {
                campaignName == 'mint' ? "What is minting?" : (
                    campaignName == 'sale' ? "How does the Sale work?"
                    : "How does the Auction work?"
                )
            }
        </a>
    )
}