import Head from 'next/head';

import { ChangePasswordForm } from '@/components/organisms/account/changePasswordForm';
import { BeforeSingIn } from '@/components/templates/beforeSignIn';

import type { VFC } from 'react';

const ChangePassword: VFC = () => (
  <BeforeSingIn>
    <Head>
      <title>ChangePassword</title>
    </Head>
    <ChangePasswordForm nextUrl="/posts/first-post" />
  </BeforeSingIn>
);
export default ChangePassword;
