import { Repository } from 'domain/repository/repository';

export const AccountInteractor = (repository: Repository) => {
  const signIn =
    (email: string, password: string): (() => Promise<void>) =>
    async () => {
      const account = await repository.account.signIn({ email, password });
      await repository.account.setAccount(account);
    };

  const signUp =
    (email: string, name: string): (() => Promise<void>) =>
    () =>
      repository.account.signUp({ email, name });

  const activate =
    (
      email: string,
      currentPassword: string,
      newPassword: string,
    ): (() => Promise<void>) =>
    async () => {
      const account = await repository.account.activate({
        email,
        currentPassword,
        newPassword,
      });
      await repository.account.setAccount(account);
    };

  const fetchSignedInAccount = (): (() => Promise<void>) => async () => {
    console.log('fetchSignInAccount');

    const account = {
      email: 'f9cc6004-dd13-412b-89ed-82740be496a8',
      user: {
        id: 'f9cc6004-dd13-412b-89ed-82740be496a8',
        name: 'oizumi4',
        group: {
          id: '01FP7DVV1QWTQVG6ZN0TRXP561',
          name: 'free',
          numberOfMembers: 15,
          chat: {
            id: '01FP7DVV1H7PDGZD314RJ8TZ8M',
            name: 'free',
            createdAt: '2021-12-06T17:30:48.37+09:00',
            updatedAt: '2021-12-06T17:30:48.37+09:00',
          },
          createdAt: '2021-12-06T17:30:48.375+09:00',
          updatedAt: '2022-02-16T17:47:05.694+09:00',
        },
        createdAt: '2022-02-16T17:31:57.563+09:00',
        updatedAt: '2022-02-16T17:31:57.563+09:00',
      },
    };
    await repository.account.setAccount(account);
  };

  const isSignedIn = (): (() => Promise<boolean>) => async () => {
    console.log('isSignedIn');

    const account = {
      email: 'f9cc6004-dd13-412b-89ed-82740be496a8',
      user: {
        id: 'f9cc6004-dd13-412b-89ed-82740be496a8',
        name: 'oizumi4',
        group: {
          id: '01FP7DVV1QWTQVG6ZN0TRXP561',
          name: 'free',
          numberOfMembers: 15,
          chat: {
            id: '01FP7DVV1H7PDGZD314RJ8TZ8M',
            name: 'free',
            createdAt: '2021-12-06T17:30:48.37+09:00',
            updatedAt: '2021-12-06T17:30:48.37+09:00',
          },
          createdAt: '2021-12-06T17:30:48.375+09:00',
          updatedAt: '2022-02-16T17:47:05.694+09:00',
        },
        createdAt: '2022-02-16T17:31:57.563+09:00',
        updatedAt: '2022-02-16T17:31:57.563+09:00',
      },
    };
    await repository.account.setAccount(account);
    return true;
  };

  const removeSignedInAccount = (): (() => Promise<void>) => () =>
    repository.account.resetAccount();

  const changePassword =
    (
      email: string,
      currentPassword: string,
      newPassword: string,
    ): (() => Promise<void>) =>
    async () => {
      const account = await repository.account.changePassword({
        email,
        currentPassword,
        newPassword,
      });
      await repository.account.setAccount(account);
    };

  const signOut = (): (() => Promise<void>) => async () => {
    await repository.account.signOut();
    await repository.account.resetAccount();
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
