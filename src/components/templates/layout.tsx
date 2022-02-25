import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';

import utilStyles from 'styles/utils.module.css';

import styles from './layout.module.css';

import type { VFC } from 'react';

const name = 'Sample Website';
export const siteTitle = 'Next.js Sample Website';

type Props = {
  children: ReactNode;
  isLogin?: boolean;
};

export const Layout: VFC<Props> = ({ children, isLogin = false }) => (
  <div className={styles.container}>
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
      {isLogin ? (
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      ) : (
        <h2 className={utilStyles.headingLg}>
          <Link href='/'>
            <a className={utilStyles.colorInherit}>{name}</a>
          </Link>
        </h2>
      )}
    </header>
    <main>{children}</main>
    {!isLogin && (
      <div className={styles.backToHome}>
        <Link href='/'>
          <a>← Back to login</a>
        </Link>
      </div>
    )}
  </div>
);
