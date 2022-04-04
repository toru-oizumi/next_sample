import { GroupID } from '@/domain/model/group';
import { User } from '@/domain/model/user';
import { ApiClient } from '@/infrastructure/middleware/axios/apiClient';
import { createCustomError } from '@/infrastructure/middleware/axios/error';
import { UserRecord, toDomainUser } from '@/infrastructure/middleware/axios/model/user';

export const UserRepositoryImpl = () => {
  const apiClient = new ApiClient();

  const findAll = async (): Promise<User[]> => {
    const resp = await apiClient.get('/users/all').catch((error: Error) => {
      const customError = createCustomError(error);
      console.error(customError);
      throw customError;
    });
    return (resp.data as UserRecord[]).map((v) => toDomainUser(v));
  };

  const findByGroupID = async (groupID: GroupID): Promise<User[]> => {
    const resp = await apiClient.get(`/users/groups/${groupID}`).catch((error: Error) => {
      const customError = createCustomError(error);
      console.error(customError);
      throw customError;
    });
    return (resp.data as UserRecord[]).map((v) => toDomainUser(v));
  };

  return { findAll, findByGroupID };
};
