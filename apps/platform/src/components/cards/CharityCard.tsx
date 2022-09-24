import React, { FC } from "react";
// import cx from "classnames";
import { useLocation } from "wouter";
import { Charity } from "../../typed/charity";
// import { DonateModalButton } from "../DonateModalButton";
import { PlatformRoute } from "../../configs/routes";
import { BackgroundImage } from "../BackgroundImage";
import { VerifiedBadge } from "../badges/VerifiedBadge";
import { VerifiedBadgeType } from "../../typed/enum/verifiedBadgeType";
import { OwnerAvatar } from "../OwnerAvatar";
// import { CauseBadge } from "../badges/CauseBadge";

interface CharityCardProps {
  charity: Charity;
}

export const CharityCard: FC<CharityCardProps> = ({ charity }) => {
  // const [showDonationButton, setShowDonationButton] = useState<boolean>(false);
  const [_location, setLocation] = useLocation();

  const handleNextLocation = () =>
    setLocation(`${PlatformRoute.CharityListing}/${charity.slug}`);

  console.log(charity);
  return (
    <div className=" h-full">
      <div
        className="bg-base-100 relative w-full h-full bg-white inline-block cursor-pointer hover:shadow-xl rounded-xl"
        onClick={handleNextLocation}
      >
        <div className="flex flex-col w-full h-full relative ">
          <div className="relative">
            <BackgroundImage
              imageAsset={charity.media.tileUrl}
              className="rounded-t-xl"
            />
          </div>
          <div className="flex flex-col justify-between w-full rounded-b-xl border-base-content border-opacity-25 border-t-0 border h-28 relative">
            <OwnerAvatar
              src={charity.media.previewUrl}
              alt={charity.slug}
            />
            <div className="flex justify-between w-full p-5 py-10 text-xs sm:text-sm">
              <div className="flex w-full flex-col">
                <span className="font-bold text-sm">
                  {charity.name.length < 16 ? charity.name : charity.name.slice(0, 14) + '...'}
                  <VerifiedBadge
                    isVerified={charity.isVerified}
                    type={VerifiedBadgeType.Charity}
                    className="ml-1 inline-block"
                  />
                </span>
                <span className="country text-sm">Australia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
