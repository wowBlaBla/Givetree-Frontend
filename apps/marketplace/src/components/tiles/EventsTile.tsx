import React, { FC } from "react";
import { EventType } from "../../typed/enum/eventType";
import { BaseTile } from "./BaseTile";
import { CountdownTimer } from "../CountdownTimer";
import { EventTile } from "./EventTile";

interface EventsTileProps {
  hasStarted?: boolean;
  collection: string;
  whitelistStartDate: Date | number;
  whitelistEndDate: Date | number;
  publicStartDate: Date | number;
  publicEndDate: Date | number;
}

export const EventsTile: FC<EventsTileProps> = (props) => {
  console.log(props.hasStarted);
  return (
    <BaseTile className="w-full bg-brand-black text-white">
      <h3 className="text-2xl lg:text-3xl font-semibold">Minting event</h3>

      <CountdownTimer
        hasStarted={props.hasStarted}
        className="font-semibold mt-3 text-xl lg:text-2xl xl:text-3xl text-white"
        startDate={props.whitelistStartDate}
        endDate={props.whitelistEndDate}
        mainTimer
        eventType={EventType.WhitelistToken}
      />

      <EventTile
        type={EventType.WhitelistToken}
        description="Donate to 2 SOL to XYZ Charity to receive 1 Mulgakongz whitelist token."
        supplyCount={8888}
        maxToken={2}
        mintPrice={2}
        startDate={props.whitelistStartDate}
        endDate={props.whitelistEndDate}
        hasStarted={props.hasStarted}
      />

      <h6 className="my-6 text-lg sm:text-xl">Followed by</h6>

      <EventTile
        type={EventType.PublicSale}
        startDate={props.publicStartDate}
        endDate={props.publicEndDate}
        supplyCount={8888}
        maxToken={1}
        mintPrice={3.5}
      />
    </BaseTile>
  );
};
