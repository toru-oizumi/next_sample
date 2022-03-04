import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { SWRConfig } from 'swr';

import { CustomError } from 'domain/model/customError';
import { ErrorTitle } from 'library/union/errorTitle';

import type { VFC } from 'react';

type Props = {
  children: ReactNode;
};

export const NeedSignIn: VFC<Props> = ({ children }) => {
  const router = useRouter();

  const onError = async (e: CustomError) => {
    if (e.title === ErrorTitle.UnauthorizedRequest) {
      await router.push(`/error/unauthorized?next=${decodeURI(router.asPath)}`);
    } else if (e.title === ErrorTitle.Unknown) {
      await router.push(`/error/unknown?next=${decodeURI(router.asPath)}`);
    }
  };

  return (
    <SWRConfig
      value={{
        refreshInterval: 30000,
        onError,
      }}
    >
      {children}
    </SWRConfig>
  );
};
