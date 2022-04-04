import { GroupID } from '@/domain/model/group';
import { User } from '@/domain/model/user';

export interface UserUsecase {
  findAll(): () => Promise<User[]>;
  findByGroupID(groupID: GroupID): () => Promise<User[]>;
}
