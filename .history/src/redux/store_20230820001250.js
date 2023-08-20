import { configureStore } from '@reduxjs/toolkit';
import { Changer } from './slices/FilterSlice';

export const store = configureStore({
  reducer: { Changer: Changer },
});
