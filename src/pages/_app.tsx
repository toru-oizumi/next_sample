import { AppProps } from 'next/app';

import { AppContext } from 'components/functions/context';
import { createRepository } from 'infrastructure/factory/repository';
import { createController } from 'interface/controller/controller';

import 'styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const repository = createRepository();
  const controller = createController(repository);

  return (
    <AppContext.Provider value={controller}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
};
export default MyApp;
