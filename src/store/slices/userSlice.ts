import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
  loggedIn: boolean;
  username: string | null;
}

const initialState: IUserState = {
  loggedIn: false,
  username: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoggedIn(state, action: PayloadAction<boolean>) {
      state.loggedIn = action.payload;
    },

    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
  },
});

export const { setUsername, setLoggedIn } = userSlice.actions;

export default userSlice.reducer;
