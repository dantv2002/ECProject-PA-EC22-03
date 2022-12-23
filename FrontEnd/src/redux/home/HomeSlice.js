import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import  axios  from 'axios';
import { auctioningUrl, categoryUrl, getSellerProductUrl, productsUrl } from '../../util/constants/mainUrl';

const initialState = {
   categoryList: [],
   auctionList: [],
   productList: [],
   sellerProducts: [],
   loading: false
};

export const getcategory = createAsyncThunk('home/category',
    async () => {
        const res = await axios.get(categoryUrl())
        return res.data.data
    }
)

export const getAuctioning = createAsyncThunk('home/auctioning',
    async () => {
        const res = await axios.get(auctioningUrl(5))
        return res.data.data
    }
)

export const getProducts = createAsyncThunk('home/products',
    async (productAmount) => {
        const res = await axios.get(productsUrl(0,productAmount))
        return res.data.data
    }
)

export const getSellerProduct = createAsyncThunk('home/getSellerProduct',
    async (obj) => {
        const res = await axios.get(getSellerProductUrl(obj))
        return res.data.data
    }
)


export const HomeSlice = createSlice({
    name:"home",
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        builder.addCase(getcategory.pending, (state,action) => {
            state.loading = true
        })

        builder.addCase(getcategory.fulfilled, (state,action) => {
            state.categoryList = action.payload 
            state.loading = false
        })

        builder.addCase(getcategory.rejected, (state) => {
            state.loading = false
        })

        ////////////////////////////////////////////////////////////
        builder.addCase(getAuctioning.pending, (state,action) => {
            state.loading = true
        })

        builder.addCase(getAuctioning.fulfilled, (state,action) => {
            
            const newList = action.payload.map((auction) => {
                return {
                    ...auction,
                    imageProduct: auction.imageProduct.substring(1)
                }
            })
            state.auctionList = newList
            state.loading = false
        })

        builder.addCase(getAuctioning.rejected, (state) => {
            state.loading = false
        })
        ////////////////////////////////////////////////////////////
        builder.addCase(getProducts.pending, (state,action) => {
            state.loading = true
        })

        builder.addCase(getProducts.fulfilled, (state,action) => {
          
            const newList = action.payload.map((product) => {
                return {
                    ...product,
                    imageProduct: product.imageProduct.substring(1)
                }
            })
            state.productList = newList


            state.loading = false
        })

        builder.addCase(getProducts.rejected, (state) => {
            state.loading = false
        })

         ////////////////////////////////////////////////////////////
         builder.addCase(getSellerProduct.pending, (state,action) => {
            state.loading = true
        })

        builder.addCase(getSellerProduct.fulfilled, (state,action) => {

            state.sellerProducts = action.payload

            state.loading = false
        })

        builder.addCase(getSellerProduct.rejected, (state) => {
            state.loading = false
        })

    }
})

export const {  } = HomeSlice.actions


export default HomeSlice.reducer