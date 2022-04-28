import React, { FC } from "react";
import { EventType } from "../../typed/enum/eventType";
import { BaseTile } from "./BaseTile";
import { CountdownTimer } from "../CountdownTimer";
import { EventTile } from "./EventTile";

export const EventsTile: FC = () => {
  const date = new Date();
  const nextEventDate = date.setDate(date.getDate() + 3);
  const eventDate = date.setDate(date.getDate() + 7);

  return (
    <BaseTile className="bg-brand-black text-white">
      <h3 className="text-xl sm:text-3xl font-semibold">Minting event</h3>

      <div className="flex items-center text-xl sm:text-2xl font-semibold">
        <CountdownTimer
          className="mt-3 text-xl sm:text-2xl text-white"
          eventDate={nextEventDate}
          mainTimer
        />
      </div>

      <EventTile
        type={EventType.WhitelistToken}
        description="Donate to 2 SOL to XYZ Charity to receive 1 Mulgakongz whitelist token."
        supplyCount={8888}
        maxToken={2}
        mintPrice={2}
      />

      <h6 className="my-6 text-lg sm:text-xl">Followed by</h6>

      <EventTile
        type={EventType.PublicSale}
        eventDate={eventDate}
        supplyCount={8888}
        maxToken={1}
        mintPrice={3.5}
      />
    </BaseTile>
  );
};
