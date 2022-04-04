import Head from 'next/head';
import Link from 'next/link';

import { headTitle } from '@/components/atoms/headTitle';
import { AfterSingIn } from '@/components/templates/afterSingIn';

import type { VFC } from 'react';

const title = 'User Home';

const Home: VFC = () => (
  <AfterSingIn title={title}>
    <Head>{headTitle(title)}</Head>
    <h3 className="title">
      <Link href="/signedIn/selectFromAllUsers">
        <a>Select From All Users →</a>
      </Link>
    </h3>
  </AfterSingIn>
);
export default Home;
