import type { VFC, ReactNode } from 'react';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

type Props = {
  children: ReactNode;
  open: boolean;
};

export const LoadingBackdrop: VFC<Props> = ({ children, open }) => (
  <div>
    {children}
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress color='inherit' />
    </Backdrop>
  </div>
);
