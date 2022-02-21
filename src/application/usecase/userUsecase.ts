import { User } from 'domain/model/user';

export interface UserUsecase {
  findAll(): Promise<User[]>;
}
