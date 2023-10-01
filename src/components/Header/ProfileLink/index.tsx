import React from 'react';

import { Typography } from '@mui/material';

import NavLink from '../NavLink';

import { useAppSelector } from '../../../store';

const ProfileLink: React.FC = () => {
  const { username, loggedIn } = useAppSelector((state) => state.user);

  return (
    <>
      {loggedIn ? (
        <Typography>{username}</Typography>
      ) : (
        <NavLink to="/login">Войти</NavLink>
      )}
    </>
  );
};

export default ProfileLink;
