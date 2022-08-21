import React, { FC, useRef, /*useState*/ } from "react";
// import cx from "classnames";
import { useLocation } from "wouter";
import { Charity } from "../../typed/charity";
// import { DonateModalButton } from "../DonateModalButton";
import { PlatformRoute } from "../../configs/routes";
import { BackgroundImage } from "../BackgroundImage";
import { VerifiedBadge } from "../badges/VerifiedBadge";
import { VerifiedBadgeType } from "../../typed/enum/verifiedBadgeType";
// import { CauseBadge } from "../badges/CauseBadge";

interface CharityCardProps {
  charity: Charity;
}

export const CharityCard: FC<CharityCardProps> = ({ charity }) => {
  // const [showDonationButton, setShowDonationButton] = useState<boolean>(false);
  const donationRef = useRef<HTMLDivElement>(null);
  const [_location, setLocation] = useLocation();

  const handleNextLocation = () =>
    setLocation(`${PlatformRoute.CharityListing}/${charity.slug}`);

  return (
    <div className="md:text-left text-center">
      <div
        ref={donationRef}
        // onMouseEnter={() => setShowDonationButton(true)}
        // onMouseLeave={() => setShowDonationButton(false)}
        className="relative w-full h-full bg-white cursor-pointer hover:shadow-xl xxs:max-w-229px inline-block"
      >
        <div className="flex relative flex-col w-full h-full" onClick={handleNextLocation}>

          <div className="relative">
            <BackgroundImage imageAsset={charity.media.tileUrl} className="rounded-t-xl" />
          </div>

          <div className="flex flex-wrap items-center justify-center flex-1 w-full h-full px-1 py-3 md:px-2 border border-t-0 rounded-b-xl border-black">
            <h4 className="flex flex-col w-full gap-1 space-x-0.5 text-base text-left text-black sm:text-lg">
              <span className="font-bold text-sm">
                {charity.name}
                <VerifiedBadge
                  isVerified={charity.isVerified}
                  type={VerifiedBadgeType.Charity}
                  className="ml-1 inline-block"
                />
              </span>
              <span className="country text-sm">Australia</span>
            </h4>
          </div>
        </div>

      </div>
    </div>
  );
};
