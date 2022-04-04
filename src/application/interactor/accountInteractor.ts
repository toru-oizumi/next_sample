import { Account } from '@/domain/model/account';
import { Repository } from '@/domain/repository/repository';

export const AccountInteractor = (repository: Repository) => {
  const signIn =
    (email: string, password: string): (() => Promise<void>) =>
    async () => {
      const account = await repository.account.signIn({ email, password });
      await repository.account.setSignedInAccount(account);
    };

  const signUp =
    (email: string, name: string): (() => Promise<void>) =>
    () =>
      repository.account.signUp({ email, name });

  const activate =
    (email: string, currentPassword: string, newPassword: string): (() => Promise<void>) =>
    async () => {
      const account = await repository.account.activate({
        email,
        currentPassword,
        newPassword,
      });
      await repository.account.setSignedInAccount(account);
    };

  const fetchSignedInAccount = (): (() => Promise<Account>) => async () => {
    const createPromise = (account: Account) =>
      new Promise<Account>((resolve, reject) => {
        try {
          resolve(account);
        } catch (error) {
          reject(error);
        }
      });

    let account = await repository.account.getSignedInAccount();
    if (!account) {
      account = await repository.account.getAccount();
      await repository.account.setSignedInAccount(account);
      return createPromise(account);
    }
    return createPromise(account);
  };

  const isSignedIn = (): (() => Promise<boolean>) => async () =>
    repository.account
      .getAccount()
      .then(() => true)
      .catch(() => false);

  const removeSignedInAccount = (): (() => Promise<void>) => () =>
    repository.account.resetSignedInAccount();

  const changePassword =
    (email: string, currentPassword: string, newPassword: string): (() => Promise<void>) =>
    async () => {
      const account = await repository.account.changePassword({
        email,
        currentPassword,
        newPassword,
      });
      await repository.account.setSignedInAccount(account);
    };

  const signOut = (): (() => Promise<void>) => async () => {
    await repository.account.signOut();
    await repository.account.resetSignedInAccount();
  };

  return {
    signIn,
    signUp,
    activate,
    fetchSignedInAccount,
    isSignedIn,
    removeSignedInAccount,
    changePassword,
    signOut,
  };
};
