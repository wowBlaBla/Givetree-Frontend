import React, { FC } from "react";
import cx from "classnames";
import { useCountDown } from "../hooks/useCountdown";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

interface ShowCounterProps {
  mainTimer?: boolean;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const ShowCounter: FC<ShowCounterProps> = ({
  mainTimer,
  days,
  hours,
  minutes,
  seconds,
}) => {
  return (
    <div>
      <div className="flex items-center space-x-1 font-semibold">
        <div>Starting in</div>
        <div
          className={cx("flex flex-1 space-x-2", {
            "bg-brand-orange rounded-md px-2 py-1": mainTimer,
          })}
        >
          <div>{days} days</div>
          <div>{hours} hours</div>
          <div>{minutes} minutes</div>
          <div>{seconds} seconds</div>
        </div>
      </div>
    </div>
  );
};

interface CountDownTimerProps {
  className?: string;
  eventDate: Date | number;
  mainTimer?: boolean;
}

export const CountdownTimer: FC<CountDownTimerProps> = ({
  className,
  eventDate,
  mainTimer,
}) => {
  const [days, hours, minutes, seconds] = useCountDown(eventDate);

  if (days + hours + minutes + seconds <= 0) {
    return (
      <div className={className}>
        <ExpiredNotice />;
      </div>
    );
  } else {
    return (
      <div className={className}>
        <ShowCounter
          mainTimer={mainTimer}
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </div>
    );
  }
};
