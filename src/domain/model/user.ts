import { DateTime } from './shared/dateTime';
import { Group } from './group';

export type UserID = string;
export type UserName = string;

export type User = {
  id: UserID;
  name: UserName;
  group: Group;
  createdAt: DateTime;
  updatedAt: DateTime;
};
