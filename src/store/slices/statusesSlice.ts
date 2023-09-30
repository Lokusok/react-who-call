import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { StatusesStates } from '../../types';

interface IStatusesState {
  register: {
    status: StatusesStates;
    showStatus: boolean;
  };
}

interface SetRegisterThunkPayload {
  registerStatus: StatusesStates;
  showStatus: boolean;
}

export const setRegister = createAsyncThunk<void, SetRegisterThunkPayload>(
  'statuses/setRegister',
  ({ registerStatus, showStatus }, { dispatch }) => {
    dispatch(setRegisterStatus(registerStatus));
    dispatch(setShowRegisterStatus(showStatus));

    setTimeout(() => {
      dispatch(setShowRegisterStatus(false));
    }, 3000);
  }
);

const initialState: IStatusesState = {
  register: {
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
  },
});

export const { setRegisterStatus, setShowRegisterStatus } =
  statusesSlice.actions;

export default statusesSlice.reducer;
