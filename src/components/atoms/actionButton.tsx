import { LoadingButton, LoadingButtonProps } from '@mui/lab/';

import type { VFC, ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<LoadingButtonProps>;
type Props = {
  // ButtonHTMLAttributes内だとcolor: stringで型が合わない
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  loading?: boolean;
} & ButtonProps;

export const ActionButton: VFC<Props> = ({ children, type, color, loading, disabled }) => (
  <LoadingButton
    type={type}
    variant="contained"
    color={color}
    loading={loading}
    loadingIndicator="Loading..."
    disabled={disabled}
  >
    {children}
  </LoadingButton>
);
