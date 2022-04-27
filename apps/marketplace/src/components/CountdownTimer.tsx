import { FC } from "react";
import { useCountdown } from "../hooks/useCountdown";

interface CountdownTimerProps {
  targetDate: string;
}

export const CountdownTimer: FC<CountdownTimerProps> = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <div></div>;
  } else {
    return (
      <div className="flex space-x-3">
        <div>{days}</div>
        <div>{hours}</div>
        <div>{minutes}</div>
        <div>{seconds}</div>
      </div>
    );
  }
};
