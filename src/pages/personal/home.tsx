import type { VFC } from 'react';

import Head from 'next/head';

import { Layout } from 'components/templates/layout';
import { UserList } from 'components/organisms/user/userList';

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
