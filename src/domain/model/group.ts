import { DateTime } from './shared/dateTime';
import { Chat } from './chat';

export type GroupID = string;
export type GroupName = string;
export type GroupNumberOfMembers = number;

export type Group = {
  id: GroupID;
  name: GroupName;
  numberOfMembers: GroupNumberOfMembers;
  chat: Chat;
  createdAt: DateTime;
  updatedAt: DateTime;
};
