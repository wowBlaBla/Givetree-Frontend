import React, { FC, useRef, useState } from "react";
import cx from "classnames";
import { useNavigate } from "react-router-dom";
import { Charity } from "../../typed/charity";
import { DonateModalButton } from "../DonateModalButton";
import { PlatformRoute } from "../../configs/routes";
import { BackgroundImage } from "../BackgroundImage";
import { VerifiedBadge } from "../badges/VerifiedBadge";
import { VerifiedBadgeType } from "../../typed/enum/verifiedBadgeType";

interface CharityCardProps {
  charity: Charity;
}

export const CharityCard: FC<CharityCardProps> = ({ charity }) => {
  const [showDonationButton, setShowDonationButton] = useState<boolean>(false);
  const donationRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleNextLocation = () =>
    navigate(`${PlatformRoute.CharityListing}/${charity.slug}`);

  return (
    <div
      ref={donationRef}
      onMouseEnter={() => setShowDonationButton(true)}
      onMouseLeave={() => setShowDonationButton(false)}
      className="relative border border-gray-200 bg-white cursor-pointer rounded-xl hover:shadow-xl"
    >
      <div className="flex flex-col w-full h-full" onClick={handleNextLocation}>
        <div className="flex absolute top-0 right-0 m-2.5 z-10">
          <p className="rounded-lg py-0.5 px-2 border border-green-600 bg-green-200 text-green-600 text-center text-xs sm:text-sm">
            {charity.causes?.[0]}
          </p>
        </div>

        <div className="relative pt-full border-b border-gray-200">
          <BackgroundImage imageAsset={charity.media.tileUrl} className="rounded-t-xl" />
        </div>

        <div className="flex flex-1 flex-wrap justify-center items-center w-full h-full py-3 px-1 md:px-2">
          <h4 className="block space-x-1 text-center text-base sm:text-lg text-black">
            <span>{charity.name}</span>
            <VerifiedBadge
              className="mb-1"
              isVerified={charity.isVerified}
              type={VerifiedBadgeType.Charity}
            />
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
