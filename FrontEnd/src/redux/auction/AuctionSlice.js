import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  auctionDetailUrl,
  checkIfSellUrl,
  createAuctionUrl,
  productDetailUrl,
} from "../../util/constants/mainUrl";

const initialState = {
  auctionDetail: {},
  commentList: [],
  tempAuctionId:null,
  isSell: false,
  loading: false,
};

export const getAuctionDetail = createAsyncThunk(
  "auction/auction-detail",
  async (obj) => {
    const res = await axios.get(
      auctionDetailUrl(obj.auctionid, obj.accountName)
    );

    return res.data.data;
  }
);

export const checkIfSell = createAsyncThunk(
  "auction/checkIfSell-detail",
  async (obj) => {
    const res = await axios.get(checkIfSellUrl(obj), {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
    });
    return res.data.data;
  }
);

export const createAuction = createAsyncThunk(
  "product/createAuction",
  async (obj) => {
    const res = await axios.post(createAuctionUrl(), obj, {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
    });
    return res.data.data;
  }
);
export const AuctionSlice = createSlice({
  name: "auction",
  initialState,
  reducers: {
    changeCommentList: (state, action) => {
      state.commentList = action.payload;
    },
    resetTempAuctionId: (state) => {
      state.tempAuctionId = null
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAuctionDetail.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getAuctionDetail.fulfilled, (state, action) => {
      state.isSell = false;
      state.auctionDetail = action.payload;
      state.commentList = action.payload.infoAuction;
      state.loading = false;
    });

    builder.addCase(getAuctionDetail.rejected, (state) => {
      state.loading = false;
    });

    ////////////////////////////////////////////////////////////
    builder.addCase(checkIfSell.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(checkIfSell.fulfilled, (state, action) => {
      console.log(action.payload);
      state.isSell = action.payload;
      state.loading = false;
    });

    builder.addCase(checkIfSell.rejected, (state) => {
      state.isSell = false;
      state.loading = false;
    });

    ////////////////////////////////////////////////////////////
    builder.addCase(createAuction.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(createAuction.fulfilled, (state, action) => {
      state.tempAuctionId = action.payload.id
      state.loading = false;
    });

    builder.addCase(createAuction.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { changeCommentList, } = AuctionSlice.actions;

export default AuctionSlice.reducer;
