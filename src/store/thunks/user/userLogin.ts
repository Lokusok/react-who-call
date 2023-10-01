import { createAsyncThunk } from '@reduxjs/toolkit';

import { setLoggedIn, setUsername } from '../../slices/userSlice';
import { setLogin } from '../statuses/setLogin';

import { userAPI } from '../../../api';

import { StatusesStates } from '../../../types';

interface UserLoginThunkPayload {
  email: string;
  password: string;
}

interface UserLoginThunkReturnValue {
  result: boolean;
  username: string | null;
}

export const userLogin = createAsyncThunk<
  UserLoginThunkReturnValue,
  UserLoginThunkPayload
>('user/userLogin', async ({ email, password }, { dispatch }) => {
  const response = await userAPI.post('/auth', {
    email,
    password,
  });

  const { result, username, token } = response.data;

  if (token) {
    window.localStorage.setItem('token', token);
  }

  dispatch(setLoggedIn(result));
  dispatch(setUsername(username));

  dispatch(
    setLogin({
      loginStatus: StatusesStates.Success,
      showStatus: true,
    })
  );

  return { result, username };
});
