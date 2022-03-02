import {
  Account,
  Email,
  CurrentPassword,
  NewPassword,
} from 'domain/model/account';
import { UserName } from 'domain/model/user';

export type SignInParams = {
  email: Email;
  password: CurrentPassword;
};

export type SignUpParams = {
  email: Email;
  name: UserName;
};

export type ActivateParams = {
  email: Email;
  currentPassword: CurrentPassword;
  newPassword: NewPassword;
};

export type SetAccountParams = Account;

export type ChangePasswordParams = {
  email: Email;
  currentPassword: CurrentPassword;
  newPassword: NewPassword;
};

export interface AccountRepository {
  signIn(params: SignInParams): Promise<Account>;
  signUp(params: SignUpParams): Promise<void>;
  activate(params: ActivateParams): Promise<Account>;
  setAccount(params: SetAccountParams): Promise<void>;
  resetAccount(): Promise<void>;
  changePassword(params: ChangePasswordParams): Promise<Account>;
  signOut(): Promise<void>;
}
