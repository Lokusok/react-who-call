import { createAsyncThunk } from '@reduxjs/toolkit';

import { setLoggedIn, setUsername } from '../../slices/userSlice';

import { userAPI } from '../../../api';

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

  console.log(response.data);

  const { result, username } = response.data;

  dispatch(setLoggedIn(result));
  dispatch(setUsername(username));

  return { result, username };
});
