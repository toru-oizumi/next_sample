import { Group } from 'domain/model/group';
import { ChatRecord, fromDomainChat, toDomainChat } from './chat';

export type GroupRecord = {
  groupID: string;
  name: string;
  numberOfMembers: number;
  chat: ChatRecord;
  createdAt: string;
  updatedAt: string;
};

export const toDomainGroup = (record: GroupRecord): Group => ({
  id: record.groupID,
  name: record.name,
  numberOfMembers: record.numberOfMembers,
  chat: toDomainChat(record.chat),
  createdAt: record.createdAt,
  updatedAt: record.updatedAt,
});

export const fromDomainGroup = (domain: Group): GroupRecord => ({
  groupID: domain.id,
  name: domain.name,
  numberOfMembers: domain.numberOfMembers,
  chat: fromDomainChat(domain.chat),
  createdAt: domain.createdAt,
  updatedAt: domain.updatedAt,
});
