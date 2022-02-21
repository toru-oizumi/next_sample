import type { VFC } from 'react';

import Head from 'next/head';

import { Layout } from 'components/templates/layout';
import { ActivateForm } from 'components/organisms/account/activateForm';

const Activate: VFC = () => (
  <Layout>
    <Head>
      <title>Activate</title>
    </Head>
    <ActivateForm nextUrl='/posts/first-post' />
  </Layout>
);
export default Activate;
