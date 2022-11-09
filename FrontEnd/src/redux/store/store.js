import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../cart/cartSlice';
import counterReducer from '../counter/counterSlice';
import filterReducer from '../filter/filterSlice'
import paymentAddressSlice from '../paymentAddress/paymentAddressSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    filter: filterReducer,
    cart: cartSlice,
    paymentAddress: paymentAddressSlice
  },
});
