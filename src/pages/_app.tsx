import { AppProps } from 'next/app';

import { createRepository } from 'infrastructure/factory/repository';
import { AppContext } from 'components/functions/context';
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
