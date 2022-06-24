/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import cx from "classnames";
import { DarkBlendBottom } from "../BoxBlends";
import { FeaturedBadge } from "../badges/FeaturedBadge";
import { useNavigate } from "react-router-dom";
import { Charity } from "../../typed/charity";
import { DonateModal } from "../DonateModal";
import { PlatformRoute } from "../../configs/routes";

interface CharityCardProps {
  charity: Charity;
}

export const CharityCard: FC<CharityCardProps> = ({ charity }) => {
  const navigate = useNavigate();

  const handleNextLocation = () =>
    navigate(`${PlatformRoute.CharityListing}/${charity.slug}`);

  return (
    <div className="relative w-full overflow-hidden shadow-lg cursor-pointer select-none rounded-xl bg-brand-black">
      <FeaturedBadge
        className="absolute top-0 right-0 my-2.5 mx-2 z-10"
        text={charity.causes[0]}
      />

      <div className="relative pt-full" onClick={handleNextLocation}>
        <img
          className={cx("absolute top-0 w-full h-full object-contain", {
            "bg-white": !charity.custom?.styles?.tileBgColor,
          })}
          style={{ backgroundColor: charity.custom?.styles?.tileBgColor }}
          src={charity.media.tileUrl}
        />

        <DarkBlendBottom className="h-16" />
      </div>

      <div className="flex flex-col justify-end w-full mt-1 space-y-3 p-2">
        <p className="text-center text-white text-lg sm:text-xl truncate">
          {charity.name}
        </p>

        <DonateModal charity={charity} />
      </div>
    </div>
  );
};
