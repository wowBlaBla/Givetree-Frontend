import React, { FC, useRef, useState } from "react";
import cx from "classnames";
import { useLocation } from "wouter";
import { Charity } from "../../typed/charity";
import { DonateModalButton } from "../DonateModalButton";
import { PlatformRoute } from "../../configs/routes";
import { BackgroundImage } from "../BackgroundImage";
import { VerifiedBadge } from "../badges/VerifiedBadge";
import { VerifiedBadgeType } from "../../typed/enum/verifiedBadgeType";
import { CauseBadge } from "../badges/CauseBadge";

interface CharityCardProps {
  charity: Charity;
}

export const CharityCard: FC<CharityCardProps> = ({ charity }) => {
  const [showDonationButton, setShowDonationButton] = useState<boolean>(false);
  const donationRef = useRef<HTMLDivElement>(null);
  const [_location, setLocation] = useLocation();

  const handleNextLocation = () =>
    setLocation(`${PlatformRoute.CharityListing}/${charity.slug}`);

  return (
    <div
      ref={donationRef}
      onMouseEnter={() => setShowDonationButton(true)}
      onMouseLeave={() => setShowDonationButton(false)}
      className="relative bg-white border border-gray-200 cursor-pointer rounded-xl hover:shadow-xl"
    >
      <div className="flex flex-col w-full h-full" onClick={handleNextLocation}>
        <div className="flex absolute top-0 right-0 m-2.5 z-10">
          <CauseBadge cause={charity.causes?.[0]} />
        </div>

        <div className="relative border-b border-gray-200 pt-full">
          <BackgroundImage imageAsset={charity.media.tileUrl} className="rounded-t-xl" />
        </div>

        <div className="flex flex-wrap items-center justify-center flex-1 w-full h-full px-1 py-3 md:px-2">
          <h4 className="block space-x-1 text-base text-center text-black sm:text-lg">
            {charity.name}
            <VerifiedBadge className="ml-1" type={VerifiedBadgeType.Charity} />
          </h4>
        </div>
      </div>
      <DonateModalButton
        className={cx(
          "absolute bottom-0 w-full duration-300 overflow-hidden z-40 rounded-b-xl",
          {
            "invisible h-0": !showDonationButton,
            "visible h-10": showDonationButton,
          }
        )}
        charity={charity}
      />
    </div>
  );
};
