import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sort: { name: 'popularity', sortProp: 'rating' },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
});
