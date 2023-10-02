import { createAsyncThunk } from '@reduxjs/toolkit';

import { setLoggedIn, setUsername } from '../../slices/userSlice';
import { setLogin } from '../statuses/setLogin';

import { userAPI } from '../../../api';

import { StatusesStates } from '../../../types';

interface UserLoginThunkPayload {
  email: string;
  password: string;
  remember: boolean;
}

interface UserLoginThunkReturnValue {
  result: boolean;
  username?: string | null;
}

export const userLogin = createAsyncThunk<
  UserLoginThunkReturnValue,
  UserLoginThunkPayload
>('user/userLogin', async ({ email, password, remember }, { dispatch }) => {
  try {
    const response = await userAPI.post('/auth', {
      email,
      password,
      remember,
    });
    const { result, username, rememberUser, token } = response.data;

    if (token) {
      window[rememberUser ? 'localStorage' : 'sessionStorage'].setItem(
        'token',
        token
      );
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
  } catch (err) {
    dispatch(
      setLogin({
        loginStatus: StatusesStates.Error,
        showStatus: true,
      })
    );
  }

  return { result: false };
});
