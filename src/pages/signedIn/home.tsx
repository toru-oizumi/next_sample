import Head from 'next/head';

import { headTitle } from 'components/atoms/headTitle';
import { AllUserSingleSelect } from 'components/organisms/user/allUserSingleSelect';
import { NeedSignedIn } from 'components/templates/needSignedIn';

import type { VFC } from 'react';

export const Home: VFC = () => (
  <NeedSignedIn>
    <Head>{headTitle('Home')}</Head>
    <h1>User List</h1>
    <AllUserSingleSelect />
  </NeedSignedIn>
);
export default Home;
