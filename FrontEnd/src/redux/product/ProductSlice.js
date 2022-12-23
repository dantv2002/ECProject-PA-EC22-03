import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import  axios  from 'axios';
import { productDetailUrl } from '../../util/constants/mainUrl';

const initialState = {
    productDetail: {},
   loading: false
};

export const getProductDetail = createAsyncThunk('product/product-detail',
    async (productId) => {
        const res = await axios.get(productDetailUrl(productId))
        return res.data.data
    }
)


export const ProductSlice = createSlice({
    name:"product",
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        builder.addCase(getProductDetail.pending, (state,action) => {
            state.loading = true
        })

        builder.addCase(getProductDetail.fulfilled, (state,action) => {
            state.productDetail = action.payload 
            state.loading = false
        })

        builder.addCase(getProductDetail.rejected, (state) => {
            state.loading = false
        })

        ////////////////////////////////////////////////////////////
    }
})

export const {  } = ProductSlice.actions


export default ProductSlice.reducer