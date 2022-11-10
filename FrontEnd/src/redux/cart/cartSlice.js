import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    totalPayment: 0,
    totalAmount: 0,
    shippingFee: 100000,
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
            price: 900000,
            selected: true
        },
    ],
    buyList:[

    ]
};

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers: {
        ChangeBuyList: (state,action) => {
            state.buyList = action.payload
            state.totalPayment = 0
            action.payload.forEach(element => {
                state.totalPayment += element.price
            });
            state.totalAmount = state.totalPayment
        },
        DeleteItem: (state,action) => {
            state.itemList.pop(action.payload)
            state.totalPayment -= action.payload.price
            state.totalAmount = state.totalPayment
            state.buyList.pop(action.payload)
        },
        AutoIncrTotalPayment: (state) => {
            if(state.totalPayment !== state.totalAmount + state.shippingFee)
                state.totalPayment += state.shippingFee
        },
        AutoDecrTotalPayment: (state) => {
            if(state.totalPayment > state.totalAmount)
            state.totalPayment -= state.shippingFee
        },
        ReturnCartToBasic: (state) => {
           state.totalAmount = 0
           state.totalPayment = 0
           state.buyList = []
        }

        
    }
})

export const {ChangeBuyList,DeleteItem, AutoIncrTotalPayment ,AutoDecrTotalPayment, ReturnCartToBasic} = cartSlice.actions


export default cartSlice.reducer