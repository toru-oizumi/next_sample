import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { headTitle } from 'components/atoms/headTitle';
import { Layout } from 'components/templates/layout';
import styles from 'components/templates/layout.module.css';

import type { VFC } from 'react';

const Unknown: VFC = () => {
  const router = useRouter();
  const { next } = router.query;

  let singInPath = '/';
  if (next != null) {
    if (Array.isArray(next)) {
      singInPath += `?next=${next[0]}`;
    } else {
      singInPath += `?next=${next}`;
    }
  }
  return (
    <Layout>
      <Head>{headTitle('Error:Unknown')}</Head>
      <Alert severity='error'>
        <AlertTitle>Unknown</AlertTitle>
        <p>An unknown error has occurred.</p>
        <p>Please sign in again.</p>
      </Alert>
      <div className={styles.backToHome}>
        <Link href={singInPath}>
          <a>← Back to sign in</a>
        </Link>
      </div>
    </Layout>
  );
};
export default Unknown;
