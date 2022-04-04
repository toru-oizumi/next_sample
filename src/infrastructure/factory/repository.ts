import { AccountRepository } from '@/domain/repository/accountRepository';
import { Repository } from '@/domain/repository/repository';
import { UserRepository } from '@/domain/repository/userRepository';
import { AccountRepositoryImpl } from '@/infrastructure/middleware/axios/repository_impl/accountRepositoryImpl';
import { UserRepositoryImpl } from '@/infrastructure/middleware/axios/repository_impl/userRepositoryImpl';
import { AccountRepositoryImpl as ReduxAccountRepositoryImpl } from '@/infrastructure/middleware/redux/accountRepositoryImpl';

const account: AccountRepository = (() => ({
  ...AccountRepositoryImpl(),
  ...ReduxAccountRepositoryImpl(),
}))();

const user: UserRepository = (() => ({
  ...UserRepositoryImpl(),
}))();

export const createRepository = (): Repository => ({
  account,
  user,
});
