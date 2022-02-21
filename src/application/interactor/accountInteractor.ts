import { Repository } from 'domain/repository/repository';

export const AccountInteractor = (repository: Repository) => {
  const signIn = async (email: string, password: string): Promise<void> => {
    const account = await repository.account.signIn({ email, password });
    await repository.user.setUser(account.user);
  };

  const signUp = async (email: string, name: string): Promise<void> => {
    await repository.account.signUp({ email, name });
  };

  const activate = async (
    email: string,
    currentPassword: string,
    newPassword: string,
  ): Promise<void> => {
    const account = await repository.account.activate({
      email,
      currentPassword,
      newPassword,
    });
    await repository.user.setUser(account.user);
  };

  const changePassword = async (
    email: string,
    currentPassword: string,
    newPassword: string,
  ): Promise<void> => {
    const account = await repository.account.changePassword({
      email,
      currentPassword,
      newPassword,
    });
    await repository.user.setUser(account.user);
  };

  const signOut = async (): Promise<void> => {
    await repository.account.signOut();
    await repository.user.resetUser();
  };

  return { signIn, signUp, activate, changePassword, signOut };
};
