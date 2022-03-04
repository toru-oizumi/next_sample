import Head from 'next/head';
import Link from 'next/link';

import { HeadTitle } from 'components/atoms/headTitle';
import { SignInForm } from 'components/organisms/account/signInForm';
import { BeforeSingIn } from 'components/templates/beforeSignIn';
import utilStyles from 'styles/utils.module.css';

import type { VFC } from 'react';

const Index: VFC = () => (
  <BeforeSingIn>
    <Head>
      <HeadTitle />
    </Head>
    <section className={utilStyles.headingMd}>
      <SignInForm nextUrl='/signedIn/home' />
    </section>
    <h3 className='title'>
      <Link href='/account/signUp'>
        <a>Sign Up!</a>
      </Link>
    </h3>
    {/* <h1 className='title'>
        <Link href='/account/changePassword'>
          <a>changePassword</a>
        </Link>
      </h1> */}
  </BeforeSingIn>
);
export default Index;
