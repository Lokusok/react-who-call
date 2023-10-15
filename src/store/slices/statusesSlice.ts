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
  logout: {
    status: StatusesStates;
    showStatus: boolean;
  };
  resetPassword: {
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
  logout: {
    status: StatusesStates.Default,
    showStatus: false,
  },
  resetPassword: {
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

    setLogoutStatus(state, action: PayloadAction<StatusesStates>) {
      state.logout.status = action.payload;
    },

    setShowLogoutStatus(state, action: PayloadAction<boolean>) {
      state.logout.showStatus = action.payload;
    },

    setResetPasswordStatus(state, action: PayloadAction<StatusesStates>) {
      state.resetPassword.status = action.payload;
    },

    setShowResetPasswordStatus(state, action: PayloadAction<boolean>) {
      state.resetPassword.showStatus = action.payload;
    },
  },
});

export const {
  setRegisterStatus,
  setShowRegisterStatus,
  setLoginStatus,
  setShowLoginStatus,
  setLogoutStatus,
  setShowLogoutStatus,
  setResetPasswordStatus,
  setShowResetPasswordStatus,
} = statusesSlice.actions;

export default statusesSlice.reducer;
