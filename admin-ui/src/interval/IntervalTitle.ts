import { Interval as TInterval } from "../api/interval/Interval";

export const INTERVAL_TITLE_FIELD = "id";

export const IntervalTitle = (record: TInterval): string => {
  return record.id?.toString() || String(record.id);
};
