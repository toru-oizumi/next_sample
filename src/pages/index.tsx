import type { VFC } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import utilStyles from 'styles/utils.module.css';
import { Layout, siteTitle } from 'components/templates/layout';
import { SignInForm } from 'components/organisms/account/signInForm';

const Home: VFC = () => (
  <Layout isLogin>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilStyles.headingMd}>
      <SignInForm nextUrl='/personal/home' />
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
  </Layout>
);
export default Home;
