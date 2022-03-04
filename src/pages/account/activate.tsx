import Head from 'next/head';

import { ActivateForm } from 'components/organisms/account/activateForm';
import { BeforeSingIn } from 'components/templates/beforeSignIn';

import type { VFC } from 'react';

const Activate: VFC = () => (
  <BeforeSingIn>
    <Head>
      <title>Activate</title>
    </Head>
    <ActivateForm nextUrl='/posts/first-post' />
  </BeforeSingIn>
);
export default Activate;
