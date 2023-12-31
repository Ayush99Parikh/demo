import { SortOrder } from "../../util/SortOrder";

export type IntervalOrderByInput = {
  createdAt?: SortOrder;
  expiryDare?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
