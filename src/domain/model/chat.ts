import { DateTime } from './shared/dateTime';

export type ChatID = string;
export type ChatName = string;

export type Chat = {
  id: ChatID;
  name: ChatName;
  createdAt: DateTime;
  updatedAt: DateTime;
};
