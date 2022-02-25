import { User } from 'domain/model/user';
import { ApiClient } from 'infrastructure/middleware/axios/apiClient';
import { createCustomError } from 'infrastructure/middleware/axios/error';
import {
  UserRecord,
  toDomainUser,
} from 'infrastructure/middleware/axios/model/user';

export const UserRepositoryImpl = () => {
  const apiClient = new ApiClient();

  const findAll = async (): Promise<User[]> => {
    try {
      const resp = await apiClient.get('/users/all');
      return (resp.data as UserRecord[]).map((v) => toDomainUser(v));
    } catch (error) {
      const customError = createCustomError(error as Error);
      console.error(customError);
      throw customError;
    }
  };
  return { findAll };
};
