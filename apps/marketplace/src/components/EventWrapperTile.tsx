import React, { FC } from "react";
import { EventType } from "../typed/enum/eventType";
import { BaseTile } from "./BaseTile";
import { EventTile } from "./EventTile";

export const EventWrapperTile: FC = () => {
  return (
    <BaseTile className="bg-brand-black text-white">
      <h3 className="text-xl sm:text-3xl ">Community Whitelist</h3>

      <EventTile
        type={EventType.WhitelistToken}
        description="Donate to 2 SOL to XYZ Charity to receive 1 Mulgakongz whitelist token. Learn more."
        supplyCount={8888}
        maxToken={2}
        mintPrice={2}
      />

      <h6 className="my-6 text-lg sm:text-xl">Followed by</h6>

      <EventTile
        type={EventType.PublicSale}
        supplyCount={8888}
        maxToken={1}
        mintPrice={3.5}
      />
    </BaseTile>
  );
};
