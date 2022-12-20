import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../cart/cartSlice';
import counterReducer from '../counter/counterSlice';
import filterReducer from '../filter/filterSlice'
import HomeSlice from '../home/HomeSlice';
import paymentAddressSlice from '../paymentAddress/paymentAddressSlice';
import ProductSlice from '../product/ProductSlice';
import userNotificationSlice from '../usernotification/userNotificationSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    filter: filterReducer,
    cart: cartSlice,
    home: HomeSlice,
    paymentAddress: paymentAddressSlice,
    userNotification: userNotificationSlice,
    product: ProductSlice
  },
});
