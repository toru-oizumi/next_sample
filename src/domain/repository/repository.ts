import { AccountRepository } from 'domain/repository/accountRepository';
import { UserRepository } from 'domain/repository/userRepository';

export type Repository = {
  account: AccountRepository;
  user: UserRepository;
};
