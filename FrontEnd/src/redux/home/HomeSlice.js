import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import  axios  from 'axios';
import { categoryUrl } from '../../util/constants/mainUrl';

const initialState = {
   categoryList: [],
   loading: false
};

export const getcategory = createAsyncThunk('home/category',
    async () => {
        const res = await axios.get(categoryUrl())
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
    }
})

export const {  } = HomeSlice.actions


export default HomeSlice.reducer