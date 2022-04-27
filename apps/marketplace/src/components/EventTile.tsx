import React, { FC } from "react";
import { EventType } from "../typed/enum/eventType";
import { BaseTile } from "./BaseTile";
import { GlobeIcon } from "./icons/GlobeIcon";
import { LockIcon } from "./icons/LockIcon";
import { ItemBox } from "./ItemBox";

interface EventTypeTitleProps {
  type: EventType | string;
}

const EventTypeTitle: FC<EventTypeTitleProps> = ({ type }) => {
  switch (type) {
    case EventType.PublicSale:
      return (
        <div className="flex items-center space-x-1">
          <GlobeIcon className="w-5 h-5" />
          <h4 className="text-lg sm:text-xl font-semibold">{EventType.PublicSale}</h4>
        </div>
      );
    case EventType.WhitelistToken:
      return (
        <div className="flex items-center space-x-1">
          <LockIcon className="w-5 h-5" />
          <h4 className="text-lg sm:text-xl font-semibold">{EventType.PublicSale}</h4>
        </div>
      );
    default:
      return (
        <div className="flex items-center space-x-1">
          <GlobeIcon className="w-5 h-5" />
          <h4 className="text-lg sm:text-xl font-semibold">{EventType.PublicSale}</h4>
        </div>
      );
  }
};

interface EventTileProps {
  type: EventType | string;
  description?: string;
  date?: string;
  supplyCount: number;
  maxToken: number;
  mintPrice: number;
}

export const EventTile: FC<EventTileProps> = (props) => {
  return (
    <BaseTile className="mt-5 bg-white text-brand-black">
      <div className="flex flex-col space-y-2">
        <EventTypeTitle type={props.type} />
        <p className="text-sm sm:text-base">{props.description}</p>
      </div>
      <div className=""></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
        <ItemBox title="Supply" value={props.supplyCount} />
        <ItemBox title="Max Token" value={props.maxToken} />
        <ItemBox title="Mint Price" value={`${props.mintPrice} SOL`} />
      </div>
    </BaseTile>
  );
};
