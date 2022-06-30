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
  const donationRef = useRef<HTMLDivElement>(null);
  const [showDonateBtn, setShowDonateBtn] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleNextLocation = () =>
    navigate(`${PlatformRoute.CharityListing}/${charity.slug}`);

  return (
    <div
      ref={donationRef}
      onMouseEnter={() => setShowDonateBtn(true)}
      onMouseLeave={() => setShowDonateBtn(false)}
      className="relative w-full bg-white border border-gray-200 cursor-pointer select-none rounded-xl hover:shadow-xl overflow-hidden"
    >
      <div className="relative pt-full" onClick={handleNextLocation}>
        <BackgroundImage asset={charity.media.tileUrl} className="rounded-t-xl" />
      </div>

      <div className="flex relative flex-col justify-between w-full h-auto mt-1">
        <div className="flex justify-center space-x-0.5 py-1 px-3">
          <h4 className="text-base text-center text-gray-800 sm:text-lg truncate">
            {charity.name}
          </h4>
          <VerifiedBadge type={VerifiedBadgeType.Charity} xsmall />
        </div>

        <p className="flex justify-center items-center flex-wrap space-x-1 text-gray-800 text-xs sm:text-sm py-2 px-3">
          <p className="text-gray-400">Supports</p>
          <p className="rounded-full py-0.5 px-2 bg-green-200 text-green-600">
            {charity.causes?.[0]}
          </p>
        </p>

        <div
          className={cx(
            "absolute bottom-0 w-full transform transition ease-in-out duration-500",
            {
              "visible h-0": showDonateBtn,
              "invisible h-12": !showDonateBtn,
            }
          )}
        >
          <DonateModalButton charity={charity} />
        </div>
      </div>
    </div>
  );
};
