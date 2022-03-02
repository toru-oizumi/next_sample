import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { SWRConfig } from 'swr';

import { siteTitle } from 'components/config';
import { CustomError } from 'domain/model/customError';
import { ErrorTitle } from 'library/union/errorTitle';
import utilStyles from 'styles/utils.module.css';

import styles from './layout.module.css';

import type { VFC } from 'react';

type Props = {
  children: ReactNode;
};

export const NeedSignedIn: VFC<Props> = ({ children }) => {
  const router = useRouter();
  const onError = async (error: CustomError) => {
    if (error.title === ErrorTitle.UnauthorizedRequest) {
      await router.push(`/error/unauthorized?next=${decodeURI(router.asPath)}`);
    } else if (error.title === ErrorTitle.Unknown) {
      await router.push(`/error/unknown?next=${decodeURI(router.asPath)}`);
    }
  };

  return (
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
        <h2 className={utilStyles.headingLg}>
          <Link href='/'>
            <a className={utilStyles.colorInherit}>{siteTitle}</a>
          </Link>
        </h2>
      </header>
      <SWRConfig
        value={{
          refreshInterval: 300000,
          onError,
        }}
      >
        <main>{children}</main>
      </SWRConfig>
      <div className={styles.backToHome}>
        <Link href='/'>
          <a>← Back to login</a>
        </Link>
      </div>
    </div>
  );
};
