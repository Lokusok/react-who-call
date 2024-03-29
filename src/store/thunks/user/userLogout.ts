import { createAsyncThunk } from '@reduxjs/toolkit';

import { setUserId, setLoggedIn, setUsername } from '../../slices/userSlice';

import { setLogout } from '../statuses/setLogout';

import { StatusesStates } from '../../../types';

export const userLogout = createAsyncThunk(
  'user/userLogout',
  async (_, { dispatch }) => {
    window.localStorage.removeItem('token');

    dispatch(setUserId(null));
    dispatch(setLoggedIn(false));
    dispatch(setUsername(null));

    dispatch(
      setLogout({
        logoutStatus: StatusesStates.Success,
        showStatus: true,
      })
    );
  }
);
