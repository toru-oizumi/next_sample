import { Chat } from 'domain/model/chat';

export type ChatRecord = {
  chatID: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export const toDomainChat = (record: ChatRecord): Chat => ({
  id: record.chatID,
  name: record.name,
  createdAt: record.createdAt,
  updatedAt: record.updatedAt,
});

export const fromDomainChat = (domain: Chat): ChatRecord => ({
  chatID: domain.id,
  name: domain.name,
  createdAt: domain.createdAt,
  updatedAt: domain.updatedAt,
});
