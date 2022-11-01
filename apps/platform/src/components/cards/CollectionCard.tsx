import React, { FC } from "react";
import { useLocation } from "wouter";

import { BackgroundImage } from "../BackgroundImage";
// import { ContentCreatorBadge } from "../badges/ContentCreatorBadge";
// import { LiveBadge } from "../badges/LiveBadge";
// import { FeaturedBadge } from "../badges/FeaturedBadge";
// import { CurrencyIcon } from "../icons/CurrencyIcon";
import { VerifiedBadge } from "../badges/VerifiedBadge";
import { VerifiedBadgeType } from "../../typed/enum/verifiedBadgeType";
import { OwnerAvatar } from "../OwnerAvatar";
import { Collection } from "../../typed/collection";
import DefaultCollection from "../../temp/images/campaigns/default-collection.png";
// import { getEventStatus } from "../../utils/getEventStatus";

interface CollectionCardProps {
  campaign: Collection//Campaign;
}

export const CollectionCard: FC<CollectionCardProps> = ({ campaign }) => {
  const [_location, setLocation] = useLocation();
  // const isLive = getEventStatus(campaign.event.rounds).isLive;
  const handleNextLocation = () => setLocation(`/collection/${campaign.pattern}`);
  return (
    <div className="fundraiser-card text-center h-full">
      <div
        className="bg-white relative w-full h-full inline-block cursor-pointer shadow-normal hover:shadow-xl rounded-xl border border-[#3C3C3C]"
        onClick={handleNextLocation}
      >
        <div className="flex flex-col w-full h-full relative text-center">
          <div className="card-image relative">
            <BackgroundImage
              imageAsset={campaign.featured ? campaign.featured : DefaultCollection.src}
              className="rounded-t-xl"
            />
          </div>
          <div className="card-body flex-col !justify-center w-full rounded-b-xl border-base-content border-opacity-25 border-t-0 border h-28 relative">
            <OwnerAvatar
              src={campaign.logo}
              // alt={campaign.}
              alt=""
            />
            <div className="flex justify-between w-full text-xs sm:text-sm">
              <div className="flex w-full flex-col text-black items-start">
                <span className="font-bold">
                  {campaign.name}
                  <VerifiedBadge
                    isVerified
                    type={VerifiedBadgeType.Collection}
                    className="ml-1 inline-block"
                  />
                </span>
                {/* <span>
                  {campaign.creators[0].name.replace('-', ' ')}
                  <VerifiedBadge
                    isVerified={true}
                    type={VerifiedBadgeType.Collection}
                    className="ml-1 inline-block"
                  />
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
