import { useContext } from 'react';
import useSWR from 'swr';

import { CustomError } from 'domain/model/customError';

import { AppContext } from './context';

export const useController = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error('useController must be used within a AppContext.Provider');
  }
  return context;
};

// type UseFetchDataParams<T> = {
//   key: string,
//   usecase: () => Promise<T>
//   params: object
// }
export const useFetchData = <T, U>(key: string, usecase: U) =>
  useSWR<T, CustomError>(key, usecase);

// export const useFetchData = <T> (key: string, result: Promise<T>) =>
//   useSWR<T, CustomError>(key, () => result)
