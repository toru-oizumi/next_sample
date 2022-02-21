import type { VFC } from 'react';

import Head from 'next/head';

import { Layout } from 'components/templates/layout';
import { SignUpForm } from 'components/organisms/account/signUpForm';

const SignUp: VFC = () => (
  <Layout>
    <Head>
      <title>SignUp</title>
    </Head>
    <SignUpForm nextUrl='/account/activate' />
  </Layout>
);
export default SignUp;
