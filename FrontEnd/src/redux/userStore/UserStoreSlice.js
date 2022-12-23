import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import  axios  from 'axios';
import { categoryUrl, getAllAuctionUrl, getAllProductByCategoryUrl, getAllProductUrl, producerUrl, productDetailUrl } from '../../util/constants/mainUrl';

const initialState = {
    allproduct: [],
    categoryLists: [],
    producerLists: [],
    auctionLists: [],
   loading: false
};

export const getAllProduct = createAsyncThunk('userStore/allproduct',
    async () => {
        const res = await axios.get(getAllProductUrl(),{'headers': {'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')}})
        return res.data.data
    }
)

export const getAllCategory = createAsyncThunk('userStore/allCategory',
    async () => {
        const res = await axios.get(categoryUrl())
        return res.data.data
    }
)

export const getProducer = createAsyncThunk('userStore/producer',
    async (categoryid) => {
        const res = await axios.get(producerUrl(categoryid))
        return res.data.data
    }
)

export const getAllAuction = createAsyncThunk('userStore/allauction',
    async () => {
        const res = await axios.get(getAllAuctionUrl(),{'headers': {'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')}})
        return res.data.data
    }
)

export const getAllProductByCategory = createAsyncThunk('userStore/getAllProductByCategory',
    async (categoryname) => {
        const res = await axios.get(getAllProductByCategoryUrl(categoryname),{'headers': {'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')}})
        return res.data.data
    }
)


export const UserStoreSlice = createSlice({
    name:"userstore",
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProduct.pending, (state,action) => {
            state.loading = true
        })

        builder.addCase(getAllProduct.fulfilled, (state,action) => {
            state.allproduct = action.payload
            state.loading = false
        })

        builder.addCase(getAllProduct.rejected, (state) => {
            state.allproduct = []
            state.loading = false
        })

        ////////////////////////////////////////////////////////////
        builder.addCase(getAllCategory.pending, (state,action) => {
            state.loading = true
        })

        builder.addCase(getAllCategory.fulfilled, (state,action) => {
            state.categoryLists = action.payload.map((category) => {
                return {
                    label: category.name,
                    value: category.id
                }
            })
            state.loading = false
        })

        builder.addCase(getAllCategory.rejected, (state) => {
            state.allproduct = []
            state.loading = false
        })
        ////////////////////////////////////////////////////////////
        builder.addCase(getProducer.pending, (state,action) => {
            state.loading = true
        })

        builder.addCase(getProducer.fulfilled, (state,action) => {
            console.log(action.payload)
            // state.categoryLists = action.payload.map((category) => {
            //     return {
            //         label: category.name,
            //         value: category.id
            //     }
            // })
            state.loading = false
        })

        builder.addCase(getProducer.rejected, (state) => {
            state.allproduct = []
            state.loading = false
        })
         ////////////////////////////////////////////////////////////
         builder.addCase(getAllAuction.pending, (state,action) => {
            state.loading = true
        })

        builder.addCase(getAllAuction.fulfilled, (state,action) => {
            state.auctionLists = action.payload
            // state.categoryLists = action.payload.map((category) => {
            //     return {
            //         label: category.name,
            //         value: category.id
            //     }
            // })
            state.loading = false
        })

        builder.addCase(getAllAuction.rejected, (state) => {
            state.allproduct = []
            state.loading = false
        })
         ////////////////////////////////////////////////////////////
         builder.addCase(getAllProductByCategory.pending, (state,action) => {
            state.loading = true
        })

        builder.addCase(getAllProductByCategory.fulfilled, (state,action) => {
            state.producerLists = action.payload
            // state.categoryLists = action.payload.map((category) => {
            //     return {
            //         label: category.name,
            //         value: category.id
            //     }
            // })
            state.loading = false
        })

        builder.addCase(getAllProductByCategory.rejected, (state) => {
            state.allproduct = []
            state.loading = false
        })
    }
})

export const {  } = UserStoreSlice.actions


export default UserStoreSlice.reducer