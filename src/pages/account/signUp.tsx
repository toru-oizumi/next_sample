import Head from 'next/head';

import { SignUpForm } from 'components/organisms/account/signUpForm';
import { Layout } from 'components/templates/layout';

import type { VFC } from 'react';

const SignUp: VFC = () => (
  <Layout>
    <Head>
      <title>SignUp</title>
    </Head>
    <SignUpForm nextUrl='/account/activate' />
  </Layout>
);
export default SignUp;
