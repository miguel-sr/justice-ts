import dayjs from "dayjs";

export default (date: Date | string): string => {
  return dayjs(date).format("YYYY-MM-DD");
};
