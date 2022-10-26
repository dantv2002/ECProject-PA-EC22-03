import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    typeList: [
        {
            typeName: "All",
            displayStatus: "active"
        },
        {
            typeName: "Phone",
            displayStatus: ""
        },
        {
            typeName: "Laptop",
            displayStatus: ""
        },
        {
            typeName: "Tablet",
            displayStatus: ""
        },
        {
            typeName: "Sound",
            displayStatus: ""
        },
        {
            typeName: "Watch",
            displayStatus: ""
        },
        {
            typeName: "House Hold",
            displayStatus: ""
        },
        {
            typeName: "Accessory",
            displayStatus: ""
        },
        {
            typeName: "PC",
            displayStatus: ""
        },
        {
            typeName: "Tivi",
            displayStatus: ""
        },
        {
            typeName: "Printer",
            displayStatus: ""
        },
        {
            typeName: "Camera",
            displayStatus: ""
        },
       
    ],
    producerList: [
        {
            producerName: "All",
            displayStatus: "active"
        },
        {
            producerName: "Apple",
            displayStatus: ""
        },
        {
            producerName: "Lenovo",
            displayStatus: ""
        },
        {
            producerName: "Asus",
            displayStatus: ""
        },
        {
            producerName: "HP",
            displayStatus: ""
        },
        {
            producerName: "Acer",
            displayStatus: ""
        },
        {
            producerName: "Dell",
            displayStatus: ""
        },
        {
            producerName: "Msi",
            displayStatus: ""
        },
        {
            producerName: "Intel",
            displayStatus: ""
        },
      
    ],

    priceList: [
        {
            priceName: "Ascending",
            displayStatus: ""
        },
        {
            priceName: "Decrease",
            displayStatus: ""
        },
    ],

    NecessitiesList: [
        {
            necessName: "All",
            displayStatus: "active"
        },
        {
            necessName: "Auctioning",
            displayStatus: ""
        },
        {
            necessName: "Suggestion",
            displayStatus: ""
        },
    ],

    searchType: "All",
    searchProducer: "All",
    searchPrice: "",
    searchNecess: "All",

    searchMinPrice: 0,
    searchMidPrice: 0,
    searchMaxPrice: 0,

    searchWord: ""
};

export const filterSlice = createSlice({
    name:"filter",
    initialState,
    reducers: {
        changeSearchType: (state,action) => {
    
            if(state.searchType !== action.payload){
              
                let index = state.typeList.findIndex((item) => state.searchType === item.typeName)
                state.typeList[index].displayStatus = ""
                

                index = state.typeList.findIndex((item) => action.payload === item.typeName)
                state.typeList[index].displayStatus = "active"
                state.searchType = action.payload
            }
        },
        changeSearchProducer: (state,action) => {
            if(state.searchProducer !== action.payload){
                let index = state.producerList.findIndex((item) => state.searchProducer === item.producerName)
                state.producerList[index].displayStatus = ""

                index = state.producerList.findIndex((item) => action.payload === item.producerName)
                state.producerList[index].displayStatus = "active"

                state.searchProducer = action.payload
            }
        },
        changeSearchPrice: (state,action) => {
            if(action.payload == ""){
                let index = state.priceList.findIndex((item) => state.searchPrice === item.priceName)
                if(index >= 0)
                    state.priceList[index].displayStatus = ""
            }else
                if(state.searchPrice !== action.payload){
                    let index = state.priceList.findIndex((item) => state.searchPrice === item.priceName)
                    if(index >= 0)
                        state.priceList[index].displayStatus = ""

                    index = state.priceList.findIndex((item) => action.payload === item.priceName)
                    state.priceList[index].displayStatus = "active"

                    state.searchPrice = action.payload
                }
        },
        changeSearchNecess: (state,action) => {
            if(state.searchNecess !== action.payload){
                let index = state.NecessitiesList.findIndex((item) => state.searchNecess === item.necessName)
                if(index >= 0)
                    state.NecessitiesList[index].displayStatus = ""

                index = state.NecessitiesList.findIndex((item) => action.payload === item.necessName)
                state.NecessitiesList[index].displayStatus = "active"

                state.searchNecess = action.payload
            }
        },

        changeMidPrice: (state,action) => {
            state.searchMidPrice = action.payload
        },
        changeMaxPrice: (state,action) => {
            state.searchMaxPrice = action.payload
        },

        changeSearchWord: (state,action) => {
            state.searchWord = action.payload
        }
    }
})

export const {changeSearchType , changeSearchProducer,changeSearchPrice,changeSearchNecess, changeMidPrice,changeMaxPrice,changeSearchWord } = filterSlice.actions


export default filterSlice.reducer