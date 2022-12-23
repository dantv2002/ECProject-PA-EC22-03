import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  productDetailUrl,
  userLoginUrl,
  userRegisterUrl,
} from "../../util/constants/mainUrl";
import { poppupNoti } from "../../util/notification/Notification";

const initialState = {
  isLogin: false,
  loading: false,
  isRegister: false,
};

export const userLogin = createAsyncThunk("user/login", async (obj) => {
  let res;
  await axios({
    url: userLoginUrl(),
    method: "POST",
    data: obj,
  }).then((resp) => {
    if (obj.accountName === "admin") {
      sessionStorage.setItem("adminName", obj.accountName);
      sessionStorage.setItem("adminAccessToken", resp.data.token);
    } else {
      sessionStorage.setItem("accountName", obj.accountName);
      sessionStorage.setItem("accessToken", resp.data.token);
    }
  });
});

export const userRegister = createAsyncThunk("user/register", async (obj) => {
  console.log(obj);
  await axios({
    url: userRegisterUrl(),
    method: "POST",
    data: obj,
  }).then((resp) => {
    console.log(resp);
  });
});

export const UserAuthenticationSlice = createSlice({
  name: "userauthentication",
  initialState,
  reducers: {
    setIsRegister: (state) => {
      state.isRegister = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.isLogin = true;
      state.loading = false;
      poppupNoti.loginSuccess();
    });

    builder.addCase(userLogin.rejected, (state) => {
      poppupNoti.loginFail();
      state.loading = false;
    });

    ////////////////////////////////////////////////////////////
    builder.addCase(userRegister.pending, (state, action) => {
      state.isRegister = false;
      state.loading = true;
    });

    builder.addCase(userRegister.fulfilled, (state, action) => {
      state.isRegister = true;
      state.loading = false;
      poppupNoti.registerSuccess();
    });

    builder.addCase(userRegister.rejected, (state) => {
      poppupNoti.userNameAlrearyExists();
      state.loading = false;
    });
  },
});

export const { setIsRegister } = UserAuthenticationSlice.actions;

export default UserAuthenticationSlice.reducer;
