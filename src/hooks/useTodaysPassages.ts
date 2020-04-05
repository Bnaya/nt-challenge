import { passages } from "../data/passages.json";

function dateDiff(first: number, second: number) {
  // Take the difference between the dates and divide by milliseconds per day.
  // Round to nearest whole number to deal with DST.
  return Math.round((second - first) / (1000 * 60 * 60 * 24));
}

const toMidnight = (date: Date) => date.setHours(0, 0, 0, 0);

export function useTodaysPassages() {
  const startDate = new Date(2020, 3, 5).getTime();
  const today = toMidnight(new Date());
  const offset = dateDiff(startDate, today) % 90;

  return passages[offset] || [];
}
