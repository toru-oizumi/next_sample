import { Account } from '@/domain/model/account';

export interface AccountUsecase {
  signIn(email: string, password: string): () => Promise<void>;
  signUp(email: string, name: string): () => Promise<void>;
  activate(email: string, currentPassword: string, newPassword: string): () => Promise<void>;
  fetchSignedInAccount(): () => Promise<Account>;
  isSignedIn(): () => Promise<boolean>;
  removeSignedInAccount(): () => Promise<void>;
  changePassword(email: string, currentPassword: string, newPassword: string): () => Promise<void>;
  signOut(): () => Promise<void>;
}
