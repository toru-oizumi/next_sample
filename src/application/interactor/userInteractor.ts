import { GroupID } from 'domain/model/group';
import { User } from 'domain/model/user';
import { Repository } from 'domain/repository/repository';

export const UserInteractor = (repository: Repository) => {
  const findAll = (): (() => Promise<User[]>) => () =>
    repository.user.findAll();
  const findByGroupID =
    (groupID: GroupID): (() => Promise<User[]>) =>
    () =>
      repository.user.findByGroupID(groupID);

  return { findAll, findByGroupID };
};
