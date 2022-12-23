import { configureStore } from '@reduxjs/toolkit';
import AdminSlice from '../admin/AdminSlice';
import AuctionSlice from '../auction/AuctionSlice';
import cartSlice from '../cart/cartSlice';
import counterReducer from '../counter/counterSlice';
import filterReducer from '../filter/filterSlice'
import HomeSlice from '../home/HomeSlice';
import paymentAddressSlice from '../paymentAddress/paymentAddressSlice';
import ProductSlice from '../product/ProductSlice';
import UserAuthenticationSlice from '../userAuthentication/UserAuthenticationSlice';
import userNotificationSlice from '../usernotification/userNotificationSlice';
import UserPageSlice from '../userpage/UserPageSlice';
import UserStoreSlice from '../userStore/UserStoreSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    filter: filterReducer,
    cart: cartSlice,
    home: HomeSlice,
    paymentAddress: paymentAddressSlice,
    userNotification: userNotificationSlice,
    product: ProductSlice,
    userAuthentication: UserAuthenticationSlice,
    auction: AuctionSlice,
    userPage: UserPageSlice,
    admin: AdminSlice,
    userStore: UserStoreSlice
  },
});
