import { createContext } from 'react';

import { Controller } from 'interface/controller/controller';

export const AppContext = createContext<Controller | undefined>(undefined);
