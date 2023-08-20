import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    closeAndChange: (state) => {
      setSortId(i);
      setPopup(false);
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
