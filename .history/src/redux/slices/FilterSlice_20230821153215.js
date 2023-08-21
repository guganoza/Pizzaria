import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

const initialState = {
  categoryId: 0,
  sortid: { name: 'popularity', sortProp: 'rating' },
  pageCount: 1,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },

    setSortId(state, action) {
      state.sortid = action.payload;
    },

    setPageCount(state, action) {
      state.pageCount = action.payload;
    },
  },
});

export const { setCategoryId, setSortId, setPageCount } = filterSlice.actions;

export default filterSlice.reducer;
