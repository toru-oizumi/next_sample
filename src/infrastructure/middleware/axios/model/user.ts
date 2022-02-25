import { User } from 'domain/model/user';

import { GroupRecord, fromDomainGroup, toDomainGroup } from './group';

export type UserRecord = {
  userID: string;
  name: string;
  group: GroupRecord;
  createdAt: string;
  updatedAt: string;
};

export const toDomainUser = (record: UserRecord): User => ({
  id: record.userID,
  name: record.name,
  group: toDomainGroup(record.group),
  createdAt: record.createdAt,
  updatedAt: record.updatedAt,
});

export const fromDomainUser = (domain: User): UserRecord => ({
  userID: domain.id,
  name: domain.name,
  group: fromDomainGroup(domain.group),
  createdAt: domain.createdAt,
  updatedAt: domain.updatedAt,
});
