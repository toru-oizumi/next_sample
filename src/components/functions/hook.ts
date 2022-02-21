import { useContext } from 'react';

import { AppContext } from './context';

export const useController = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error('useController must be used within a AppContext.Provider');
  }
  return context;
};
