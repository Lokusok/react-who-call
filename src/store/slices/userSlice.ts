import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userAPI } from '../../api';

import { UniqueUserFields } from '../../types';

interface IUserUniqueCheck {
  type: UniqueUserFields;
  value: string;
}

interface IUserInfo {
  email: string;
  username: string;
  password: string;
}

export const userRegister = createAsyncThunk<boolean, IUserInfo>(
  'user/register',
  async (userData, thunkAPI) => {
    const response = await userAPI.post('/register', {
      username: userData.username,
      email: userData.email,
      password: userData.password,
    });
    const { user, token } = response.data;

    window.localStorage.setItem('token', token);

    return true;
  }
);

export const checkUnique = createAsyncThunk<boolean, IUserUniqueCheck>(
  'user/checkUnique',
  async (uniqueField, thunkAPI) => {
    const response = await userAPI.post('/check-unique', {
      type: uniqueField.type,
      value: uniqueField.value,
    });

    console.log({ unique: response });

    return response.data;
  }
);

const initialState = {
  loggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userRegister.fulfilled, (state, action) => {
      state.loggedIn = true;
    });
  },
});

export default userSlice.reducer;
