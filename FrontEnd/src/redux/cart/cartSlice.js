import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  cartItemsUrl,
  changeDolaUrl,
  createOrderUrl,
  getShippingFeeListUrl,
} from "../../util/constants/mainUrl";

const initialState = {
  totalPayment: 0,
  totalAmount: 0,
  shippingFee: 0,
  itemList: [],
  buyList: [],
  dolaCurrnt: 1,
  loading: false,
};

export const getCartItems = createAsyncThunk(
  "cart/items",
  async (accountName) => {
    const res = await axios.get(cartItemsUrl(accountName), {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
    });
    return res.data.data;
  }
);

export const getShippingFeeList = createAsyncThunk(
  "cart/getshippingFeelist",
  async (auctionList) => {
    const res = await axios.post(getShippingFeeListUrl(), auctionList, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
    });
    return res.data.data;
  }
);

export const changeDola = createAsyncThunk(
  "cart/changeDola",
  async (amount) => {
    const res = await axios.get(changeDolaUrl(amount));
    return res.data.data;
  }
);

export const createOrder = createAsyncThunk(
  "cart/createorder",
  async (auctionList) => {
    const res = await axios.post(createOrderUrl(), auctionList, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
    });
    return res.data.data;
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ChangeBuyList: (state, action) => {
      state.buyList = action.payload;
      state.totalPayment = 0;
      action.payload.forEach((element) => {
        state.totalPayment += element.price;
      });
      state.totalAmount = state.totalPayment;
    },
    DeleteItem: (state, action) => {
      state.itemList.pop(action.payload);
      state.totalPayment -= action.payload.price;
      state.totalAmount = state.totalPayment;
      state.buyList.pop(action.payload);
    },
    AutoIncrTotalPayment: (state) => {
      if (state.totalPayment !== state.totalAmount + state.shippingFee)
        state.totalPayment += state.shippingFee;
    },
    AutoDecrTotalPayment: (state) => {
      if (state.totalPayment > state.totalAmount)
        state.totalPayment -= state.shippingFee;
    },
    ReturnCartToBasic: (state) => {
      state.totalAmount = 0;
      state.totalPayment = 0;
      state.shippingFee = 0;
      state.dolaCurrnt = 0;
      state.buyList = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCartItems.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getCartItems.fulfilled, (state, action) => {
      state.itemList = action.payload.map((item, index) => {
        return {
          key: index,
          image: `./${item.imageProduct.substring(1)}`,
          auctionId: item.auctionId,
          seller: item.nameOfSeller,
          name: item.productName,
          quantity: 1,
          price: item.price,
          productId: item.productId,
        };
      });
      state.loading = false;
    });

    builder.addCase(getCartItems.rejected, (state) => {
      state.loading = false;
    });

    //////////////////////////////////////////////////
    builder.addCase(getShippingFeeList.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getShippingFeeList.fulfilled, (state, action) => {
      let a = 0;
      action.payload.forEach((item) => {
        a += item.priceShipping;
      });
      state.shippingFee = a;
      if (state.totalPayment !== state.totalAmount + state.shippingFee)
        state.totalPayment += state.shippingFee;
      state.loading = false;
    });

    builder.addCase(getShippingFeeList.rejected, (state) => {
      state.loading = false;
    });
    //////////////////////////////////////////////////
    builder.addCase(changeDola.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(changeDola.fulfilled, (state, action) => {
      state.dolaCurrnt = action.payload;
      state.loading = false;
    });

    builder.addCase(changeDola.rejected, (state) => {
      state.loading = false;
    });

    //////////////////////////////////////////////////
    builder.addCase(createOrder.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(createOrder.fulfilled, (state, action) => {
      console.log(action.payload)
      state.loading = false;
    });

    builder.addCase(createOrder.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const {
  ChangeBuyList,
  DeleteItem,
  AutoIncrTotalPayment,
  AutoDecrTotalPayment,
  ReturnCartToBasic,
} = cartSlice.actions;

export default cartSlice.reducer;
