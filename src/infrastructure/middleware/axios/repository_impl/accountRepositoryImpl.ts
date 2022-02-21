import {
  SignInParams,
  SignUpParams,
  ActivateParams,
  ChangePasswordParams,
} from 'domain/repository/accountRepository';
import { Account } from 'domain/model/account';
import { createCustomError } from 'infrastructure/middleware/axios/error';
import {
  AccountRecord,
  toDomainAccount,
} from 'infrastructure/middleware/axios/model/account';
import { ApiClient } from 'infrastructure/middleware/axios/apiClient';

export const AccountRepositoryImpl = () => {
  const apiClient = new ApiClient();

  const signIn = async (params: SignInParams): Promise<Account> => {
    try {
      const resp = await apiClient.post('/sign-in', params);
      return toDomainAccount(resp.data as AccountRecord);
    } catch (error) {
      const customError = createCustomError(error as Error);
      console.error(customError);
      throw customError;
    }
  };

  const signUp = async (params: SignUpParams): Promise<void> => {
    try {
      await apiClient.post('/sign-up', params);
    } catch (error) {
      const customError = createCustomError(error as Error);
      console.error(customError);
      throw customError;
    }
  };

  const activate = async (params: ActivateParams): Promise<Account> => {
    try {
      const resp = await apiClient.post('/activate', params);
      return toDomainAccount(resp.data as AccountRecord);
    } catch (error) {
      const customError = createCustomError(error as Error);
      console.error(customError);
      throw customError;
    }
  };

  const changePassword = async (
    params: ChangePasswordParams,
  ): Promise<Account> => {
    try {
      const resp = await apiClient.post('/change-password', params);
      return toDomainAccount(resp.data as AccountRecord);
    } catch (error) {
      const customError = createCustomError(error as Error);
      console.error(customError);
      throw customError;
    }
  };

  const signOut = async (): Promise<void> => {
    try {
      await apiClient.delete('/sign-out');
    } catch (error) {
      const customError = createCustomError(error as Error);
      console.error(customError);
      throw customError;
    }
  };

  return { signIn, signUp, activate, changePassword, signOut };
};
