import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { useController } from 'components/functions/hook';
import { Account } from 'domain/model/account';

import type { VFC } from 'react';

type Props = {
  title: string;
  account?: Account;
};

export const HeaderAppBar: VFC<Props> = ({ title, account }) => {
  const router = useRouter();
  const usecase = useController().account.useCase;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(true);
  };

  const handleSnackBarClose = () => {
    setOpen(false);
  };

  const handleNameMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNameMenuClose = () => {
    setAnchorEl(null);
  };

  const handleChangePassword = () => {
    setOpen(true);
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    const signOut = usecase.signOut();
    // signOutなので、成功/失敗問わずにSignIn画面へ遷移
    signOut()
      .then(async () => {
        await router.push('/');
      })
      .catch(async () => {
        await router.push('/');
      });
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        open={open}
        autoHideDuration={5000}
        onClose={handleSnackBarClose}
        message='This menu is not implemented.'
      />
      <AppBar>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Button
            size='large'
            aria-label='account'
            aria-controls='menu-app-bar'
            aria-haspopup='true'
            onClick={handleNameMenu}
            color='inherit'
          >
            {account?.user.name}
          </Button>
          <Menu
            id='menu-app-bar'
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleNameMenuClose}
          >
            <MenuItem onClick={handleChangePassword}>Change Password</MenuItem>
            <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
};
