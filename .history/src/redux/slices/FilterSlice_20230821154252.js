import { createSlice } from '@reduxjs/toolkit';

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

    setCurrentPage(state, action) {
      state.pageCount = action.payload;
    },
  },
});

export const { setCategoryId, setSortId, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
