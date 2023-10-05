import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ITel, IPreviewOfTel } from '../../types';

import { searchTel } from '../thunks/tel/searchTel';

interface ITelFormats {
  internationalFormat: string | null;
  nationalFormat: string | null;
}

interface IAdditionalInfo {
  operator: string | null;
  region: string | null;
}

interface ITelState {
  activeTel: ITel | null;
  formats: ITelFormats;
  additionalInfo: IAdditionalInfo;
  lastVerified: IPreviewOfTel[] | [] | null;
  mostViewed: IPreviewOfTel[] | [] | null;
  mostCommented: IPreviewOfTel[] | [] | null;
}

const initialState: ITelState = {
  activeTel: null,
  formats: {
    internationalFormat: null,
    nationalFormat: null,
  },
  additionalInfo: {
    operator: null,
    region: null,
  },
  lastVerified: null,
  mostViewed: null,
  mostCommented: null,
};

const telSlice = createSlice({
  name: 'tel',
  initialState,
  reducers: {
    resetActiveTel(state) {
      state.activeTel = null;
    },

    setFormats(state, action: PayloadAction<ITelFormats>) {
      state.formats.internationalFormat = action.payload.internationalFormat;
      state.formats.nationalFormat = action.payload.nationalFormat;
    },

    setAdditionalInfo(state, action: PayloadAction<IAdditionalInfo>) {
      state.additionalInfo.operator = action.payload.operator;
      state.additionalInfo.region = action.payload.region;
    },

    setLastVerified(state, action: PayloadAction<IPreviewOfTel[]>) {
      state.lastVerified = action.payload;
    },

    setMostViewed(state, action: PayloadAction<IPreviewOfTel[]>) {
      state.mostViewed = action.payload;
    },

    setMostCommented(state, action: PayloadAction<IPreviewOfTel[]>) {
      state.mostCommented = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      searchTel.fulfilled,
      (state, action: PayloadAction<ITel>) => {
        state.activeTel = action.payload;
      }
    );
  },
});

export const {
  resetActiveTel,
  setFormats,
  setAdditionalInfo,
  setLastVerified,
  setMostViewed,
  setMostCommented,
} = telSlice.actions;

export default telSlice.reducer;
