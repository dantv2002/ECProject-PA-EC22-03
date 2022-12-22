import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import  axios  from 'axios';
import { auctionDetailUrl, productDetailUrl } from '../../util/constants/mainUrl';

const initialState = {
    auctionDetail: {},
   loading: false
};

export const getAuctionDetail = createAsyncThunk('auction/auction-detail',
    async (obj) => {
        console.log(auctionDetailUrl(obj.auctionid,obj.accountName))
        const res = await axios.get(auctionDetailUrl(obj.auctionid,obj.accountName))

        return res.data.data
    }
)


export const AuctionSlice = createSlice({
    name:"auction",
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        builder.addCase(getAuctionDetail.pending, (state,action) => {
            state.loading = true
        })

        builder.addCase(getAuctionDetail.fulfilled, (state,action) => {
            console.log(action.payload)
            state.auctionDetail = action.payload 
            state.loading = false
        })

        builder.addCase(getAuctionDetail.rejected, (state) => {
            state.loading = false
        })

        ////////////////////////////////////////////////////////////
    }
})

export const {  } = AuctionSlice.actions


export default AuctionSlice.reducer