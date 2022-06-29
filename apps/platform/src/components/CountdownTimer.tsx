import React, { FC } from "react";
import cx from "classnames";
import { useCountDown } from "../hooks/useCountdown";
import { getEventRoundStatus } from "../utils/getEventStatus";

interface ShowCounterProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  text?: string;
  includeBgColor?: boolean;
}

const ShowCounter: FC<ShowCounterProps> = ({
  days,
  hours,
  minutes,
  seconds,
  text,
  includeBgColor,
}) => {
  return (
    <div
      className={cx("font-semibold", {
        "bg-brand-orange rounded-lg px-2 py-1": includeBgColor,
      })}
    >
      <span className="text-brand-orange">{text}</span> {days ? `${days} days` : ""}{" "}
      {hours} hours {minutes} minutes {seconds} seconds
    </div>
  );
};

interface CountDownTimerProps {
  className?: string;
  startDate: Date | number;
  endDate: Date | number;
}

export const CountdownTimer: FC<CountDownTimerProps> = ({
  className,
  startDate,
  endDate,
}) => {
  const eventStartDate = useCountDown(startDate);
  const eventEndDate = useCountDown(endDate);
  const hasEventStarted = getEventRoundStatus(eventStartDate);
  const hasEventEnded = getEventRoundStatus(eventEndDate);

  if (hasEventEnded) {
    return <div className={className}>Event has ended</div>;
  } else if (hasEventStarted) {
    return (
      <div className={className}>
        <ShowCounter
          text="Ends in"
          days={eventEndDate[0]}
          hours={eventEndDate[1]}
          minutes={eventEndDate[2]}
          seconds={eventEndDate[3]}
        />
      </div>
    );
  } else {
    return (
      <div className={className}>
        <ShowCounter
          text="Starts in"
          days={eventStartDate[0]}
          hours={eventStartDate[1]}
          minutes={eventStartDate[2]}
          seconds={eventStartDate[3]}
        />
      </div>
    );
  }
};
