import { Account } from '@/domain/model/account';
import { SetAccountParams } from '@/domain/repository/accountRepository';

import { accountSlice } from './slice/account';
import { reduxStore } from './store';

export const AccountRepositoryImpl = () => {
  const getSignedInAccount = (): Promise<Account | undefined> =>
    new Promise<Account | undefined>((resolve, reject) => {
      try {
        const state = reduxStore.getState();
        resolve(state.account.account);
      } catch (error) {
        reject(error);
      }
    });

  const setSignedInAccount = (params: SetAccountParams): Promise<void> =>
    new Promise<void>((resolve, reject) => {
      try {
        reduxStore.dispatch(accountSlice.actions.setAccount(params));
        resolve();
      } catch (error) {
        reject(error);
      }
    });

  const resetSignedInAccount = (): Promise<void> =>
    new Promise<void>((resolve, reject) => {
      try {
        reduxStore.dispatch(accountSlice.actions.resetAccount());
        resolve();
      } catch (error) {
        reject(error);
      }
    });

  return { getSignedInAccount, setSignedInAccount, resetSignedInAccount };
};
