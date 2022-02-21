import { User } from 'domain/model/user';

export type SetUserParams = User;

export interface UserRepository {
  setUser(params: SetUserParams): Promise<void>;
  resetUser(): Promise<void>;
  findAll(): Promise<User[]>;
}
