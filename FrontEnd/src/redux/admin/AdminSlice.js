import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  allUserUrl,
  changeStatusUserUrl,
  getShippingFeeUrl,
  getTotalOrderIn7MonthUrl,
  getTotalOrderInCurrentMonthUrl,
  productDetailUrl,
  totalRevenue,
  totalUserUrl,
  updateCategoryUrl,
} from "../../util/constants/mainUrl";

const initialState = {
  productDetail: {},
  monthList: [],
  totalUser: 0,
  totalRevenueByMonth: [],
  userList: [],
  loading: false,
  totalOrderInCurrentMonth: {},
  totalOrderIn7Month: [],
  shippingFeeList: [],
};

export const getTotalRevenue = createAsyncThunk(
  "admin/totalRevenue",
  async (obj) => {
    const res = await axios.get(totalRevenue(obj), {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("adminAccessToken"),
      },
    });
    return res.data.data;
  }
);

export const getTotalUser = createAsyncThunk("product/totalUser", async () => {
  const res = await axios.get(totalUserUrl(), {
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("adminAccessToken"),
    },
  });
  return res.data.data;
});

export const getAllUser = createAsyncThunk("product/alluser", async () => {
  const res = await axios.get(allUserUrl(), {
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("adminAccessToken"),
    },
  });
  return res.data.data;
});

export const changeUserStatus = createAsyncThunk(
  "product/changeuserstatus",
  async (obj) => {
    const res = await axios.post(changeStatusUserUrl(), obj, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("adminAccessToken"),
      },
    });
    return res.data.data;
  }
);

export const getShippingFee = createAsyncThunk(
  "product/getShippingFee",
  async () => {
    const res = await axios.get(getShippingFeeUrl(), {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("adminAccessToken"),
      },
    });
    return res.data.data;
  }
);

export const updateCategory = createAsyncThunk(
  "product/updatecategory",
  async (obj) => {
    const res = await axios.post(updateCategoryUrl(), obj, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("adminAccessToken"),
      },
    });
    return res.data.data;
  }
);
export const getTotalOrderInCurrentMonth = createAsyncThunk(
  "product/totalorderincurrentmonth",
  async () => {
    const res = await axios.get(getTotalOrderInCurrentMonthUrl(), {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("adminAccessToken"),
      },
    });
    return res.data.data;
  }
);

export const getTotalOrderIn7Month = createAsyncThunk(
  "product/totalorderin7month",
  async (obj) => {
    const res = await axios.get(getTotalOrderIn7MonthUrl(obj), {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("adminAccessToken"),
      },
    });
    return res.data.data;
  }
);

export const AdminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    get7MonthList: (state, action) => {
      state.monthList = action.payload;
    },
    cleanTotalRevenue: (state) => {
      state.totalRevenueByMonth = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTotalRevenue.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getTotalRevenue.fulfilled, (state, action) => {
      state.totalRevenueByMonth.push(action.payload);
      state.loading = false;
    });

    builder.addCase(getTotalRevenue.rejected, (state) => {
      state.loading = false;
    });

    ////////////////////////////////////////////////////////////
    builder.addCase(getTotalUser.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getTotalUser.fulfilled, (state, action) => {
      console.log(action.payload);
      state.totalUser = action.payload.Count;
      state.loading = false;
    });

    builder.addCase(getTotalUser.rejected, (state) => {
      state.loading = false;
    });

    ////////////////////////////////////////////////////////////
    builder.addCase(getAllUser.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getAllUser.fulfilled, (state, action) => {
      state.userList = action.payload;
      // state.totalUser = action.payload.Count
      state.loading = false;
    });

    builder.addCase(getAllUser.rejected, (state) => {
      state.loading = false;
    });

    ////////////////////////////////////////////////////////////
    builder.addCase(changeUserStatus.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(changeUserStatus.fulfilled, (state, action) => {
      console.log(action.payload);
      // state.totalUser = action.payload.Count
      state.loading = false;
    });

    builder.addCase(changeUserStatus.rejected, (state) => {
      state.loading = false;
    });
    ////////////////////////////////////////////////////////////
    builder.addCase(updateCategory.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(updateCategory.fulfilled, (state, action) => {
      console.log(action.payload);
      // state.totalUser = action.payload.Count
      state.loading = false;
    });

    builder.addCase(updateCategory.rejected, (state) => {
      state.loading = false;
    });

    ////////////////////////////////////////////////////////////
    builder.addCase(getTotalOrderInCurrentMonth.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getTotalOrderInCurrentMonth.fulfilled, (state, action) => {
      state.totalOrderInCurrentMonth = action.payload;
      // state.totalUser = action.payload.Count
      state.loading = false;
    });

    builder.addCase(getTotalOrderInCurrentMonth.rejected, (state) => {
      state.loading = false;
    });
    ////////////////////////////////////////////////////////////
    builder.addCase(getTotalOrderIn7Month.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getTotalOrderIn7Month.fulfilled, (state, action) => {
      state.totalOrderIn7Month = action.payload;
      state.loading = false;
    });

    builder.addCase(getTotalOrderIn7Month.rejected, (state) => {
      state.loading = false;
    });

    ////////////////////////////////////////////////////////////
    builder.addCase(getShippingFee.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getShippingFee.fulfilled, (state, action) => {
      console.log(action.payload)
      state.shippingFeeList = action.payload
      state.loading = false;
    });

    builder.addCase(getShippingFee.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { get7MonthList, cleanTotalRevenue } = AdminSlice.actions;

export default AdminSlice.reducer;
