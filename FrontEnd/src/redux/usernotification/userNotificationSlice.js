import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { userNotiUrl } from '../../util/constants/mainUrl';

const initialState = {
    notiList: [
  
    ],
    notiActiveTab: "all"
}

export const getAllNoti = createAsyncThunk('userNoti/getAllNoti',
    async () => {
        const res = await axios.get(userNotiUrl(),{'headers': {'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')}})
        return res.data.data
    }
)

export const deleteNoti = createAsyncThunk('userNoti/deleteNoti',
    async (notiid) => {
        const res = await axios.put(deleteNoti(notiid),{'headers': {'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')}})
        return res.data.data
    }
)

export const userNotificationSlice = createSlice({
    name: "userNotification",
    initialState,
    reducers: {
        changeNotiTab: (state,action) => {
            state.notiActiveTab = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllNoti.pending, (state,action) => {
            state.loading = true
        })

        builder.addCase(getAllNoti.fulfilled, (state,action) => {
            state.notiList = action.payload.map((noti) => {
                return   {
                    id:noti.id,
                    type: noti.type ? "1" : "0",
                    productId: noti.productId,
                    auctionId: noti.auctionId,
                    auctionStatus: "down",
                    productName: noti.productName,
                    date: noti.timeStart,
                    imageUrl: `./${noti.imageProduct.substring(1)}`
                }
            })
            state.loading = false
        })

        builder.addCase(getAllNoti.rejected, (state) => {
            state.loading = false
        })

        ////////////////////////////////////////////////////////////
        builder.addCase(deleteNoti.pending, (state,action) => {
            state.loading = true
        })

        builder.addCase(deleteNoti.fulfilled, (state,action) => {
            console.log(action.payload)
            state.loading = false
        })

        builder.addCase(deleteNoti.rejected, (state) => {
            state.loading = false
        })
    }
})

export const {changeNotiTab} = userNotificationSlice.actions


export default userNotificationSlice.reducer