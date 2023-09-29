import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";

export type IntervalWhereInput = {
  expiryDare?: DateTimeFilter;
  id?: StringFilter;
};
