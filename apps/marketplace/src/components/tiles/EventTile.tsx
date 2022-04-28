import React, { FC } from "react";
import cx from "classnames";
import { EventType } from "../../typed/enum/eventType";
import { BaseTile } from "./BaseTile";
import { CountdownTimer } from "../CountdownTimer";
import { GlobeIcon } from "../icons/GlobeIcon";
import { LockIcon } from "../icons/LockIcon";
import { ItemBox } from "../ItemBox";

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
          <h4 className="text-lg sm:text-xl font-semibold">{EventType.WhitelistToken}</h4>
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
  hasStarted?: boolean;
  type: EventType | string;
  description?: string;
  startDate: Date | number;
  endDate: Date | number;
  supplyCount: number;
  maxToken: number;
  mintPrice: number;
}

export const EventTile: FC<EventTileProps> = (props) => (
  <BaseTile
    className={cx("mt-5 bg-white text-brand-black", {
      "border-[3px] border-red-600": props.hasStarted,
    })}
  >
    <div className="flex flex-col space-y-2">
      <EventTypeTitle type={props.type} />
      {props.type === EventType.WhitelistToken && (
        <div className="">
          <p className="space-x-1 text-sm sm:text-base">
            <span>{props.description}</span>
            <a
              className="text-brand-orange text-sm sm:text-base transition-hover hover:underline"
              href="#"
              rel="noreferrer"
              target="_blank"
            >
              Learn more
            </a>
          </p>
        </div>
      )}
    </div>

    {props.type !== EventType.WhitelistToken && (
      <CountdownTimer
        hasStarted={props.hasStarted}
        className="mt-2 text-gray-800"
        startDate={props.startDate}
        endDate={props.endDate}
        eventType={props.type}
      />
    )}

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 lg:gap-4 mt-5">
      <ItemBox title="Supply" value={props.supplyCount} />
      <ItemBox title="Max Token" value={props.maxToken} />
      <ItemBox title="Mint Price" value={`${props.mintPrice} SOL`} />
    </div>
  </BaseTile>
);
