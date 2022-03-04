import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';

import { siteTitle } from 'components/config';
import { useController, useFetchData } from 'components/functions/hook';
import { HeaderAppBar } from 'components/molecules/headerAppBar';
import { NeedSignIn } from 'components/templates/needSignIn';
import { Account } from 'domain/model/account';
import utilStyles from 'styles/utils.module.css';

import styles from './layout.module.css';

import type { VFC } from 'react';

type Props = {
  children: ReactNode;
  title: string;
};

const HeaderAppBarFetchedAccount: VFC<{ title: string }> = ({ title }) => {
  const usecase = useController().account.useCase;

  const fetcher = usecase.fetchSignedInAccount();
  const { data } = useFetchData<Account>('signedInAccount', fetcher);
  return <HeaderAppBar title={title} account={data} />;
};

export const AfterSingIn: VFC<Props> = ({ children, title }) => (
  <NeedSignIn>
    <div className={styles.container}>
      <HeaderAppBarFetchedAccount title={title} />
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Learn how to build a personal website using Next.js'
        />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <header className={styles.header}>
        <h2 className={utilStyles.headingLg}>
          <Link href='/'>
            <a className={utilStyles.colorInherit}>{siteTitle}</a>
          </Link>
        </h2>
      </header>
      <main>{children}</main>
      <div className={styles.backToHome}>
        <Link href='/'>
          <a>← Back to login</a>
        </Link>
      </div>
    </div>
  </NeedSignIn>
);
