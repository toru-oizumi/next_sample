import { SetUserParams } from 'domain/repository/userRepository';

import { reduxStore } from './store';
import { userSlice } from './slice/user';

export const UserRepositoryImpl = () => {
  const setUser = (params: SetUserParams): Promise<void> =>
    new Promise<void>((resolve, reject) => {
      try {
        reduxStore.dispatch(userSlice.actions.setUser(params));
        resolve();
      } catch (error) {
        reject(error);
      }
    });

  const resetUser = (): Promise<void> =>
    new Promise<void>((resolve, reject) => {
      try {
        reduxStore.dispatch(userSlice.actions.resetUser());
        resolve();
      } catch (error) {
        reject(error);
      }
    });

  return { setUser, resetUser };
};
