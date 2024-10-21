import { configureStore } from '@reduxjs/toolkit';
import system_Slice from './system_Slice';

export const store = configureStore({
  reducer: {
    system: system_Slice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
