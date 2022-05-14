export const getEventRoundStatus = (date: number[]) =>
  date.reduce((accumulator, time) => accumulator + time) <= 0;
