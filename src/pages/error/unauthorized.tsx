import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { headTitle } from '@/components/atoms/headTitle';
import { BeforeSingIn } from '@/components/templates/beforeSignIn';
import styles from '@/components/templates/layout.module.css';

import type { VFC } from 'react';

const Unauthorized: VFC = () => {
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
    <BeforeSingIn>
      <Head>{headTitle('Error:Unauthorized')}</Head>
      <Alert severity="error">
        <AlertTitle>Unauthorized</AlertTitle>
        <p>You have not signed in or your session has expired.</p>
        <p>Please sign in again.</p>
      </Alert>
      <div className={styles.backToHome}>
        <Link href={singInPath}>
          <a>← Back to sign in</a>
        </Link>
      </div>
    </BeforeSingIn>
  );
};
export default Unauthorized;
