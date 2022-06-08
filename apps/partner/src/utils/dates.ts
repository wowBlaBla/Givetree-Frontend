import { format } from "date-fns";

export const formatTabularDate = (date: Date | string, withTime = true): string =>
  format(new Date(date), withTime ? "d MMM yy, h:mm aaa" : "d MMM yyyy");
