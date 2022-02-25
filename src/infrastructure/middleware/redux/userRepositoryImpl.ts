import { SetUserParams } from 'domain/repository/userRepository';

import { userSlice } from './slice/user';
import { reduxStore } from './store';

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
