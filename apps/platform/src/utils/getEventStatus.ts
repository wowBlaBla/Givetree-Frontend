import { CampaignEventRound } from "../typed/campaign-event";

export const getEventRoundStatus = (date: number[]) =>
  date.reduce((accumulator, time) => accumulator + time) <= 0;

export const isEventRoundLive = (startDate: Date, endDate: Date): boolean => {
  const currentDate = new Date();
  return startDate < currentDate && endDate > currentDate;
};

type GetEventStatus = {
  startDate: Date;
  endDate: Date;
  isLive: boolean;
};

export const getEventStatus = (rounds: CampaignEventRound[]): GetEventStatus => {
  const startDate = rounds[0].startDate;
  const endDate = rounds[rounds.length - 1].endDate;
  const isLive = isEventRoundLive(startDate, endDate);

  return {
    startDate: startDate,
    endDate: endDate,
    isLive: isLive,
  };
};
