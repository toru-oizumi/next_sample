import { AccountRepository } from 'domain/repository/accountRepository';
import { Repository } from 'domain/repository/repository';
import { UserRepository } from 'domain/repository/userRepository';
import { AccountRepositoryImpl } from 'infrastructure/middleware/axios/repository_impl/accountRepositoryImpl';
import { UserRepositoryImpl } from 'infrastructure/middleware/axios/repository_impl/userRepositoryImpl';
import { UserRepositoryImpl as ReduxUserRepositoryImpl } from 'infrastructure/middleware/redux/userRepositoryImpl';

const account: AccountRepository = (() => ({
  ...AccountRepositoryImpl(),
}))();

const user: UserRepository = (() => ({
  ...UserRepositoryImpl(),
  ...ReduxUserRepositoryImpl(),
}))();

export const createRepository = (): Repository => ({
  account,
  user,
});
