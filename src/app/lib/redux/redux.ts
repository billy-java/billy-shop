import { configureStore } from '@reduxjs/toolkit';
import Cart_Slice from './Cart_Slice';

export const store = configureStore({
  reducer: {
    cart: Cart_Slice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
