import React, { FC } from "react";
import { BaseTile } from "./BaseTile";

interface EventTileProps {
  date?: Date;
}

export const EventTile: FC<EventTileProps> = (props) => {
  return (
    <BaseTile className="bg-brand-black">
      <h3 className="text-xl sm:text-3xl">Community Whitelist</h3>

      <BaseTile className="bg-white">
        <div>Whitelist Token Event</div>
      </BaseTile>
    </BaseTile>
  );
};
