import React, { FC } from "react";
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
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const ShowCounter: FC<ShowCounterProps> = ({ days, hours, minutes, seconds }) => {
  return (
    <div>
      <div className="flex items-center space-x-1 font-semibold">
        <div>Starting in</div>
        <div
          className="bg-brand-orange rounded-md px-2 py-1 flex flex-1 space-x-2
        "
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
  eventDate: Date | string | number;
}

export const CountdownTimer: FC<CountDownTimerProps> = ({ className, eventDate }) => {
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
        <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />
      </div>
    );
  }
};
