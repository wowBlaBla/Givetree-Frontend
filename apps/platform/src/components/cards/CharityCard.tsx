import React, { FC } from "react";
import { BackgroundAsset } from "../BackgroundAsset";
import { DarkBlend } from "../BoxBlends";
import { FeaturedBadge } from "../badges/FeaturedBadge";
import { useNavigate } from "react-router-dom";
import { Charity } from "../../typed/charity";
import { PrimaryLinkSm } from "../PrimaryButton";

interface CharityCardProps {
  charity: Charity;
}

export const CharityCard: FC<CharityCardProps> = ({ charity }) => {
  const navigate = useNavigate();

  const handleNextLocation = () => navigate(`/impact-partners/${charity.slug}`);

  return (
    <div className="relative w-full overflow-hidden shadow-lg cursor-pointer select-none rounded-xl bg-brand-black">
      <FeaturedBadge
        className="absolute top-0 right-0 my-2.5 mx-2 z-10"
        text={charity.causes[0]}
      />

      <div className="relative pt-full" onClick={handleNextLocation}>
        <BackgroundAsset asset={charity.media.tileUrl} />
        <DarkBlend bottom small />
      </div>

      <div className="flex flex-col justify-end w-full mt-3 rounded-lg bg-brand-black">
        <p className="text-lg text-center text-white sm:text-xl">{charity.name}</p>

        <div className="z-20 grid w-full grid-cols-1 gap-2 p-2 mt-1 text-white">
          <PrimaryLinkSm className="text-center" href="#">
            Donate
          </PrimaryLinkSm>
        </div>
      </div>
    </div>
  );
};
