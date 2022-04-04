import Head from 'next/head';
import Link from 'next/link';

import { headTitle } from '@/components/atoms/headTitle';
import { AllUserSingleSelect } from '@/components/organisms/user/allUserSingleSelect';
import { AfterSingIn } from '@/components/templates/afterSingIn';

import type { VFC } from 'react';

const title = 'Select From All Users';

const SelectFromAllUsers: VFC = () => (
  <AfterSingIn title={title}>
    <Head>{headTitle(title)}</Head>
    <AllUserSingleSelect />
    <h3 className="title">
      <Link href="/signedIn/home">
        <a>← User Home</a>
      </Link>
    </h3>
  </AfterSingIn>
);
export default SelectFromAllUsers;
