import React, { FC } from "react";
import { Link, useLocation } from "wouter";
import { Charity } from "../../typed/charity";
import { VerifiedBadge } from "../badges/VerifiedBadge";
import { VerifiedBadgeType } from "../../typed/enum/verifiedBadgeType";
import DefaultCharityIcon from "../../assets/images/default-charity-icon.jpg";

interface CharityCardProps {
  charity: Charity;
}

export const CharityCard: FC<CharityCardProps> = ({ charity }) => {
  // const [showDonationButton, setShowDonationButton] = useState<boolean>(false);
  const [_location, setLocation] = useLocation();

  const handleNextLocation = () =>
    setLocation(`charity/${charity.userName}`);

  return (
    <div className="charity-card hover:shadow-xl">
      <div
        className="card relative w-full h-full bg-white cursor-pointer"
        onClick={handleNextLocation}
      >
        <div className="flex w-full justify-center mt-[24px] mb-[12px]">
          <div className="avatar-box flex shadow-xl rounded-lg w-[93px] h-[102px] justify-center items-center p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={charity.profileImage || charity.media.tileUrl || DefaultCharityIcon.src}
              alt={charity.title}
            />
          </div>
        </div>

        <div className="card-body">
          <div className="flex justify-between w-full p-5 flex-1">
            <div className="flex w-full flex-col items-center justify-between">
              <span className="font-bold text-md sm:text-sm text-black text-center">
                {charity.title ? charity.title : charity.name ? charity.name : "Untitled"}
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
                {/* <Link
                  className={
                    "outline-button h-[34px] text-xs !bg-primary w-[80%] mt-[0.5rem] hover:shadow-lg"
                  }
                  to=""
                >
                  Create Fundraiser
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
