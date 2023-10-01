import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StatusesStates } from '../../types';

interface IStatusesState {
  register: {
    status: StatusesStates;
    showStatus: boolean;
  };

  login: {
    status: StatusesStates;
    showStatus: boolean;
  };
}

const initialState: IStatusesState = {
  register: {
    status: StatusesStates.Default,
    showStatus: false,
  },

  login: {
    status: StatusesStates.Default,
    showStatus: false,
  },
};

const statusesSlice = createSlice({
  name: 'statuses',
  initialState,
  reducers: {
    setRegisterStatus(state, action: PayloadAction<StatusesStates>) {
      state.register.status = action.payload;
    },

    setShowRegisterStatus(state, action: PayloadAction<boolean>) {
      state.register.showStatus = action.payload;
    },

    setLoginStatus(state, action: PayloadAction<StatusesStates>) {
      state.login.status = action.payload;
    },

    setShowLoginStatus(state, action: PayloadAction<boolean>) {
      state.login.showStatus = action.payload;
    },
  },
});

export const {
  setRegisterStatus,
  setShowRegisterStatus,
  setLoginStatus,
  setShowLoginStatus,
} = statusesSlice.actions;

export default statusesSlice.reducer;
