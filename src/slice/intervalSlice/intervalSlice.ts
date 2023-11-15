// src/redux/buttonIntervalsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ButtonIntervalsState {
  [key: number]: number;
}

const initialState: ButtonIntervalsState = {};

export const buttonIntervalsSlice = createSlice({
  name: 'buttonIntervals',
  initialState,
  reducers: {
    setButtonInterval: (state, action: PayloadAction<{ keyNumber: number; interval: number }>) => {
      const { keyNumber, interval } = action.payload;
      state[keyNumber] = interval;
    },
  },
});

export const { setButtonInterval } = buttonIntervalsSlice.actions;
export const selectButtonIntervals = (state: { buttonIntervals: ButtonIntervalsState }) => state.buttonIntervals;
export const intervalReducer =  buttonIntervalsSlice.reducer;
