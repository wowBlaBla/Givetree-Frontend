import React, { FC } from "react";
import cx from "classnames";
import { useCountDown } from "../hooks/useCountdown";
import { RoundType } from "../typed/enum/eventType";

interface ShowCounterProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  includeBgColor?: boolean;
}

const ShowCounter: FC<ShowCounterProps> = ({
  days,
  hours,
  minutes,
  seconds,
  includeBgColor,
}) => {
  return (
    <div
      className={cx("font-semibold", {
        "bg-brand-orange rounded-md px-2 py-1": includeBgColor,
      })}
    >
      {days} days {hours} hours {minutes} minutes {seconds} seconds
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

  const hasEventStarted =
    eventStartDate.reduce((accumulator, time) => accumulator + time) <= 0;
  const hasEventEnded =
    eventEndDate.reduce((accumulator, time) => accumulator + time) <= 0;

  if (hasEventEnded) {
    return <div className={className}>Event has ended</div>;
  } else if (hasEventStarted) {
    return (
      <div className={className}>
        Ends in
        <ShowCounter
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
        Starts in
        <ShowCounter
          days={eventStartDate[0]}
          hours={eventStartDate[1]}
          minutes={eventStartDate[2]}
          seconds={eventStartDate[3]}
        />
      </div>
    );
  }
};
