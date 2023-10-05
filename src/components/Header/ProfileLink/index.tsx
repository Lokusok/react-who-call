import React from 'react';

import { Typography, Stack, Skeleton } from '@mui/material';

import NavLink from '../NavLink';

import { useAppSelector } from '../../../store';
import LogoutButton from '../LogoutButton';

const ProfileLink: React.FC = () => {
  const { username, loggedIn } = useAppSelector((state) => state.user);

  React.useEffect(() => {
    console.log({ loggedIn });
  }, [loggedIn]);

  return (
    <>
      {loggedIn ? (
        <Stack direction="row" alignItems="center">
          <Typography>{username}</Typography>
          <LogoutButton />
        </Stack>
      ) : (
        <>
          {loggedIn === null ? (
            <Skeleton>
              <NavLink to="/login">Войти</NavLink>
            </Skeleton>
          ) : (
            <NavLink to="/login">Войти</NavLink>
          )}
        </>
      )}
    </>
  );
};

export default ProfileLink;
