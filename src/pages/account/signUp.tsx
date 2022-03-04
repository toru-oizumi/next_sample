import Head from 'next/head';

import { SignUpForm } from 'components/organisms/account/signUpForm';
import { BeforeSingIn } from 'components/templates/beforeSignIn';

import type { VFC } from 'react';

const SignUp: VFC = () => (
  <BeforeSingIn>
    <Head>
      <title>SignUp</title>
    </Head>
    <SignUpForm nextUrl='/account/activate' />
  </BeforeSingIn>
);
export default SignUp;
