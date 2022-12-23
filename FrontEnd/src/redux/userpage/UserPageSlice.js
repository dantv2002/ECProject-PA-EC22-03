import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  getUserOrderInfoUrl,
  getUserOrderUrl,
  productDetailUrl,
  updateUserInfoUrl,
  userInfoUrl,
} from "../../util/constants/mainUrl";

const initialState = {
  userInfo: {},
  userImage: [],
  userOrders: [],
  userOrderInfo: {},
  loading: false,
};

export const getUserInfo = createAsyncThunk("user/userinfo", async () => {
  const res = await axios.get(userInfoUrl(), {
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
    },
  });
  return res.data.data;
});

export const updateUserInfo = createAsyncThunk(
  "user/update-userinfo",
  async (obj) => {
    const res = await axios.post(updateUserInfoUrl(), obj, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
    });
    return res.data.data;
  }
);

export const getUserOrder = createAsyncThunk("user/userorder", async () => {
  const res = await axios.get(getUserOrderUrl(), {
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
    },
  });
  return res.data.data;
});

export const getUserOrderInfo = createAsyncThunk(
  "user/userorderinfo",
  async (orderid) => {
    const res = await axios.get(getUserOrderInfoUrl(orderid), {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
    });
    return res.data.data;
  }
);

export const UserPageSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addUserImage: (state, action) => {
      state.userImage = [
        {
          uid: "-1",
          name: "image.png",
          status: "done",
          url: action.payload,
        },
      ];
    },
    moreOrderInfo: (state, action) => {
      state.userOrderInfo = {
        ...state.userOrderInfo,
        ...action.payload
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUserInfo.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.userInfo = action.payload;
      state.userImage = [];
      state.loading = false;
    });

    builder.addCase(getUserInfo.rejected, (state) => {
      state.loading = false;
    });

    ////////////////////////////////////////////////////////////
    builder.addCase(updateUserInfo.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(updateUserInfo.fulfilled, (state, action) => {
      console.log(action.payload);
      state.loading = false;
    });

    builder.addCase(updateUserInfo.rejected, (state) => {
      state.loading = false;
    });

    ////////////////////////////////////////////////////////////
    builder.addCase(getUserOrder.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getUserOrder.fulfilled, (state, action) => {
      state.userOrders = action.payload;
      state.loading = false;
    });

    builder.addCase(getUserOrder.rejected, (state) => {
      state.loading = false;
    });
    ////////////////////////////////////////////////////////////
    builder.addCase(getUserOrderInfo.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getUserOrderInfo.fulfilled, (state, action) => {
      state.userOrderInfo = action.payload
      
      state.loading = false;
    });

    builder.addCase(getUserOrderInfo.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { addUserImage, moreOrderInfo } = UserPageSlice.actions;

export default UserPageSlice.reducer;
