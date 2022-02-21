import { Account } from 'domain/model/account';
import { UserRecord, fromDomainUser, toDomainUser } from './user';

export type AccountRecord = {
  email: string;
  user: UserRecord;
};

export const toDomainAccount = (record: AccountRecord): Account => ({
  email: record.email,
  user: toDomainUser(record.user),
});

export const fromDomainAccount = (domain: Account): AccountRecord => ({
  email: domain.email,
  user: fromDomainUser(domain.user),
});
