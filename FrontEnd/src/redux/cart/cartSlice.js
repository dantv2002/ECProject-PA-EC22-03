import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    totalPayment: 0,
    itemList: [
        {
            key: "1",
            image:'./electronic_20_1.jpeg',
            seller: "nguyen123",
            name: "May xay sinh to",
            quantity: 1,
            price: 100000
        },
        {
            key: "2",
            image:'./electronic_20_1.jpeg',
            seller: "nguyen123",
            name: "May xay sinh to",
            quantity: 1,
            price: 900000
        },
    ],
    buyList:[

    ]
};

export const cartSlice = createSlice({
    name:"filter",
    initialState,
    reducers: {
        ChangeBuyList: (state,action) => {
            state.buyList = action.payload
            state.totalPayment = 0
            action.payload.forEach(element => {
                state.totalPayment += element.price
            });
        },
        DeleteItem: (state,action) => {
            state.itemList.pop(action.payload)
            state.totalPayment -= action.payload.price
            state.buyList.pop(action.payload)
        }
    }
})

export const {ChangeBuyList,DeleteItem} = cartSlice.actions


export default cartSlice.reducer