import Head from 'next/head';
import { ReactNode } from 'react';

import { siteTitle } from 'components/config';
import utilStyles from 'styles/utils.module.css';

import styles from './layout.module.css';

import type { VFC } from 'react';

type Props = {
  children: ReactNode;
};

export const BeforeSingIn: VFC<Props> = ({ children }) => (
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
      <h1 className={utilStyles.heading2Xl}>{siteTitle}</h1>
    </header>
    <main>{children}</main>
  </div>
);
