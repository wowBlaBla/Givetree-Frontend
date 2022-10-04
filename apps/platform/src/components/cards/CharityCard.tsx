import React, { FC } from "react";
import { Link, useLocation } from "wouter";
import { Charity } from "../../typed/charity";
import { PlatformRoute } from "../../configs/routes";
import { VerifiedBadge } from "../badges/VerifiedBadge";
import { VerifiedBadgeType } from "../../typed/enum/verifiedBadgeType";

interface CharityCardProps {
  charity: Charity;
}

export const CharityCard: FC<CharityCardProps> = ({ charity }) => {
  // const [showDonationButton, setShowDonationButton] = useState<boolean>(false);
  const [_location, setLocation] = useLocation();

  const handleNextLocation = () =>
    setLocation(`${PlatformRoute.CharityListing}/${charity.slug}`);

  return (
    <div className="charity-card">
      <div
        className="card relative w-full h-full bg-white cursor-pointer hover:shadow-xl rounded-xl"
        onClick={handleNextLocation}
      >
        <div className="flex w-full justify-center mt-[24px] mb-[12px]">
          <div className="avatar-box flex shadow-xl rounded-lg w-[93px] h-[102px] justify-center items-center p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={charity.media.previewUrl}
              alt={charity.slug}
            />
          </div>
        </div>

        <div className="card-body">
          <div className="flex justify-between w-full p-5 flex-1">
            <div className="flex w-full flex-col items-center justify-between">
              <span className="font-bold text-md sm:text-sm text-black text-center">
                {charity.name}
                <VerifiedBadge
                  isVerified={charity.isVerified}
                  type={VerifiedBadgeType.Charity}
                  className="ml-1 inline-block"
                />
              </span>
              <div className="flex flex-col items-center w-full">
                <Link
                  className={
                    "outline-button h-[34px] text-xs !bg-primary w-[80%] mt-[0.5rem] hover:shadow-lg"
                  }
                  to=""
                >
                  Donate Crypto
                </Link>
                <Link
                  className={
                    "outline-button h-[34px] text-xs !bg-primary w-[80%] mt-[0.5rem] hover:shadow-lg"
                  }
                  to=""
                >
                  Create Fundraiser
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
