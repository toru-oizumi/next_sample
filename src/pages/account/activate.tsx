import Head from 'next/head';

import { ActivateForm } from 'components/organisms/account/activateForm';
import { Layout } from 'components/templates/layout';

import type { VFC } from 'react';

const Activate: VFC = () => (
  <Layout>
    <Head>
      <title>Activate</title>
    </Head>
    <ActivateForm nextUrl='/posts/first-post' />
  </Layout>
);
export default Activate;
