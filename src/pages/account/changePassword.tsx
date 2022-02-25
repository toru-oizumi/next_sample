import Head from 'next/head';

import { ChangePasswordForm } from 'components/organisms/account/changePasswordForm';
import { Layout } from 'components/templates/layout';

import type { VFC } from 'react';

const ChangePassword: VFC = () => (
  <Layout>
    <Head>
      <title>ChangePassword</title>
    </Head>
    <ChangePasswordForm nextUrl='/posts/first-post' />
  </Layout>
);
export default ChangePassword;
