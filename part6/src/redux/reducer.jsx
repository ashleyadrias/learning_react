// src/redux/reducer.js or src/redux/reducer.jsx
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

// Exporting the action creators
export const { increment, decrement, reset } = counterSlice.actions;

// Exporting the reducer
export default counterSlice.reducer;