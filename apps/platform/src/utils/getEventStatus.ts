export const getEventRoundStatus = (date: number[]) =>
  date.reduce((accumulator, time) => accumulator + time) <= 0;

export const isEventLive = (startDate: Date, endDate: Date): boolean => {
  const currentDate = new Date();
  return startDate < currentDate && endDate > currentDate;
};
