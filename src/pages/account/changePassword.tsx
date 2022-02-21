import type { VFC } from 'react';

import Head from 'next/head';

import { Layout } from 'components/templates/layout';
import { ChangePasswordForm } from 'components/organisms/account/changePasswordForm';

const ChangePassword: VFC = () => (
  <Layout>
    <Head>
      <title>ChangePassword</title>
    </Head>
    <ChangePasswordForm nextUrl='/posts/first-post' />
  </Layout>
);
export default ChangePassword;
