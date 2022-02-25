import Head from 'next/head';

import { UserList } from 'components/organisms/user/userList';
import { Layout } from 'components/templates/layout';

import type { VFC } from 'react';

export const Home: VFC = () => (
  <Layout>
    <Head>
      <title>Home</title>
    </Head>
    <h1>User List</h1>
    <UserList />
  </Layout>
);
export default Home;
