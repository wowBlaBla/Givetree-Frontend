import React, { FC } from "react";
import cx from "classnames";
import { useCountDown } from "../hooks/useCountdown";
import { EventType } from "../typed/enum/eventType";

interface ShowCounterProps {
  hasStarted?: boolean;
  mainTimer?: boolean;
  eventType: EventType | string;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const ShowCounter: FC<ShowCounterProps> = ({
  hasStarted,
  eventType,
  mainTimer,
  days,
  hours,
  minutes,
  seconds,
}) => {
  console.log(hasStarted);
  const counterType = hasStarted ? `${eventType} Ends in` : "Starts in";

  return (
    <div>
      <div className="flex flex-1 items-center whitespace-nowrap space-x-2 text-sm sm:text-lg lg:text-xl">
        <div>{counterType}</div>
        <div
          className={cx("font-semibold", {
            "bg-brand-orange rounded-md px-2 py-1": mainTimer,
          })}
        >
          {days} days {hours} hours {minutes} minutes {seconds} seconds
        </div>
      </div>
    </div>
  );
};

interface CountDownTimerProps {
  hasStarted?: boolean;
  className?: string;
  startDate: Date | number;
  endDate: Date | number;
  mainTimer?: boolean;
  eventType: EventType | string;
}

export const CountdownTimer: FC<CountDownTimerProps> = (props) => {
  const eventStartDate = useCountDown(props.startDate);
  const eventEndDate = useCountDown(props.endDate);

  const hasEventStarted =
    eventStartDate.reduce((accumulator, time) => accumulator + time) <= 0;
  const hasEventEnded =
    eventEndDate.reduce((accumulator, time) => accumulator + time) <= 0;

  if (hasEventEnded) {
    return <div className={props.className}></div>;
  } else if (hasEventStarted) {
    return (
      <div className={props.className}>
        <ShowCounter
          hasStarted={props.hasStarted}
          eventType={props.eventType}
          mainTimer={props.mainTimer}
          days={eventEndDate[0]}
          hours={eventEndDate[1]}
          minutes={eventEndDate[2]}
          seconds={eventEndDate[3]}
        />
      </div>
    );
  } else {
    return (
      <div className={props.className}>
        <ShowCounter
          mainTimer={props.mainTimer}
          eventType={props.eventType}
          days={eventStartDate[0]}
          hours={eventStartDate[1]}
          minutes={eventStartDate[2]}
          seconds={eventStartDate[3]}
        />
      </div>
    );
  }
};
