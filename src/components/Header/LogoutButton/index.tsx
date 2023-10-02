import React from 'react';

import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

import { userLogout } from '../../../store/thunks/user/userLogout';

import { useAppDispatch } from '../../../store';

const LogoutButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(userLogout());
  };

  return (
    <Button
      onClick={handleLogout}
      sx={{ padding: 0 }}
      title={'Выйти из профиля'}
    >
      <LogoutIcon sx={{ color: '#fff' }} />
    </Button>
  );
};

export default LogoutButton;
