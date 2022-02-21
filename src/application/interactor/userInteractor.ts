import { User } from 'domain/model/user';
import { Repository } from 'domain/repository/repository';

export const UserInteractor = (repository: Repository) => {
  const findAll = async (): Promise<User[]> => {
    const users = await repository.user.findAll();
    return users;
  };

  return { findAll };
};
