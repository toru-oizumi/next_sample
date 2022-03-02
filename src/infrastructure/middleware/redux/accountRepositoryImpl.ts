import { SetAccountParams } from 'domain/repository/accountRepository';

import { accountSlice } from './slice/account';
import { reduxStore } from './store';

export const AccountRepositoryImpl = () => {
  const setAccount = (params: SetAccountParams): Promise<void> =>
    new Promise<void>((resolve, reject) => {
      try {
        reduxStore.dispatch(accountSlice.actions.setAccount(params));
        resolve();
      } catch (error) {
        reject(error);
      }
    });

  const resetAccount = (): Promise<void> =>
    new Promise<void>((resolve, reject) => {
      try {
        reduxStore.dispatch(accountSlice.actions.resetAccount());
        resolve();
      } catch (error) {
        reject(error);
      }
    });

  return { setAccount, resetAccount };
};
