import { AccountInteractor } from '@/application/interactor/accountInteractor';
import { UserInteractor } from '@/application/interactor/userInteractor';
import { AccountUsecase } from '@/application/usecase/accountUsecase';
import { UserUsecase } from '@/application/usecase/userUsecase';
import { Repository } from '@/domain/repository/repository';

export interface Controller {
  account: {
    useCase: AccountUsecase;
  };
  user: {
    useCase: UserUsecase;
  };
}
export const createController = (repository: Repository): Controller => ({
  account: {
    useCase: AccountInteractor(repository),
  },
  user: {
    useCase: UserInteractor(repository),
  },
});
