import { User } from './user';

export type Email = string;
export type CurrentPassword = string;
export type NewPassword = string;

export type Account = {
  email: Email;
  user: User;
};
