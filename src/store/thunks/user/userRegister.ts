import { createAsyncThunk } from '@reduxjs/toolkit';

import { setRegister } from '../statuses/setRegister';
import { userAPI } from '../../../api';

import { StatusesStates } from '../../../types';

interface IUserInfo {
  email: string;
  username: string;
  password: string;
}

export const userRegister = createAsyncThunk<boolean, IUserInfo>(
  'user/register',
  async (userData, { dispatch }) => {
    const response = await userAPI.post('/register', {
      username: userData.username,
      email: userData.email,
      password: userData.password,
    });

    const { user } = response.data;

    dispatch(
      setRegister({
        registerStatus: StatusesStates.Success,
        showStatus: true,
      })
    );

    return true;
  }
);
