import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userAPI } from '../../api';

import { UniqueUserFields, StatusesStates } from '../../types';

import { setRegister } from './statusesSlice';

interface IUserUniqueCheck {
  type: UniqueUserFields;
  value: string;
}

interface IUserInfo {
  email: string;
  username: string;
  password: string;
}

interface IUserState {
  loggedIn: boolean;
}

export const userRegister = createAsyncThunk<boolean, IUserInfo>(
  'user/register',
  async (userData, { dispatch }) => {
    const response = await userAPI.post('/register', {
      username: userData.username,
      email: userData.email,
      password: userData.password,
    });

    const { user, token } = response.data;

    window.localStorage.setItem('token', token);

    dispatch(
      setRegister({
        registerStatus: StatusesStates.Success,
        showStatus: true,
      })
    );

    return true;
  }
);

export const checkUnique = createAsyncThunk<boolean, IUserUniqueCheck>(
  'user/checkUnique',
  async (uniqueField, { dispatch }) => {
    const response = await userAPI.post('/check-unique', {
      type: uniqueField.type,
      value: uniqueField.value,
    });

    return response.data;
  }
);

const initialState: IUserState = {
  loggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
