import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
  id: number | null;
  loggedIn: boolean | null;
  username: string | null;
}

const initialState: IUserState = {
  id: null,
  loggedIn: null,
  username: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId(state, action: PayloadAction<number | null>) {
      state.id = action.payload;
    },

    setLoggedIn(state, action: PayloadAction<boolean>) {
      state.loggedIn = action.payload;
    },

    setUsername(state, action: PayloadAction<string | null>) {
      state.username = action.payload;
    },
  },
});

export const { setUserId, setLoggedIn, setUsername } = userSlice.actions;

export default userSlice.reducer;
