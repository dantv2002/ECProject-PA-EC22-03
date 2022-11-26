import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    notiList: [
        {
            id:"1",
            type: "0",
            productId: "1",
            auctionId: "",
            auctionStatus: "",
            productName: "Máy xây sinh tố",
            description: "Bạn đã được mời vào phiên đấu giá sản phẩm",
            date: "12/12/2012"
        },
        {
            id:"2",
            type: "0",
            productId: "1",
            auctionId: "",
            auctionStatus: "",
            productName: "Máy xây sinh tố",
            description: "Bạn đã được mời vào phiên đấu giá sản phẩm",
            date: "12/12/2012"
        },
        {
            id:"3",
            type: "1",
            productId: "1",
            auctionId: "123",
            auctionStatus: "down",
            productName: "Máy xây sinh tố",
            description: "Giá sản phẩm của phiên đấu giá mà bạn đang tham gia đã bị ",
            date: "12/12/2012"
        },
        {
            id:"4",
            type: "1",
            productId: "1",
            auctionId: "456",
            auctionStatus: "down",
            productName: "Máy xây sinh tố",
            description: "Giá sản phẩm của phiên đấu giá mà bạn đang tham gia đã bị ",
            date: "12/12/2012"
        },
    ],
    notiActiveTab: "all"
}

export const userNotificationSlice = createSlice({
    name: "userNotification",
    initialState,
    reducers: {
        changeNotiTab: (state,action) => {
            state.notiActiveTab = action.payload
        }
    }
})

export const {changeNotiTab} = userNotificationSlice.actions


export default userNotificationSlice.reducer