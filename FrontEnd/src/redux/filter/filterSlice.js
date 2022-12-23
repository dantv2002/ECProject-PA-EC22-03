import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import {
  categoryUrl,
  fullSearchUrl,
  producerUrl,
  wordSearchUrl,
} from "../../util/constants/mainUrl";

const initialState = {
  typeList: [
    {
      typeName: "All",
      displayStatus: "active",
    },
  ],
  producerList: [
    {
      producerName: "All",
      displayStatus: "active",
    },
  ],

  priceList: [
    {
      priceName: "Ascending",
      displayStatus: "",
    },
    {
      priceName: "Decrease",
      displayStatus: "",
    },
  ],

  NecessitiesList: [
    {
      necessName: "All",
      displayStatus: "active",
    },
    {
      necessName: "Auctioning",
      displayStatus: "",
    },
    {
      necessName: "Suggestion",
      displayStatus: "",
    },
  ],

  searchType: "All",
  searchProducer: "All",
  searchPrice: "",
  searchNecess: "All",

  searchMinPrice: 0,
  searchMidPrice: 0,
  searchMaxPrice: 1000000000,

  searchWord: "",

  searchAuction: [],
  searchProduct: [],

  loading: false,
};

export const getCategory = createAsyncThunk(
  "filter/getcategory",
  async (itemType) => {
    const res = await axios.get(categoryUrl());
    return res.data.data;
  }
);

export const getProducerList = createAsyncThunk(
  "filter/producer",
  async (itemType) => {
    const res = await axios.get(producerUrl(itemType));
    return res.data.data;
  }
);

export const filterWithWord = createAsyncThunk(
  "filter/wordsearch",
  async (itemType) => {
    const res = await axios.get(wordSearchUrl(itemType));
    return res.data.data;
  }
);

export const fullSearch = createAsyncThunk("filter/fullSearch", async (obj) => {
  try {
    let res;
    await axios({
      url: fullSearchUrl(),
      method: "POST",
      data: obj,
    }).then((resp) => {
      res = resp.data.data;
    });
    return res;
  } catch (e) {
    console.log(e);
  }
});

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeSearchType: (state, action) => {
      if (state.searchType !== action.payload) {
        let index = state.typeList.findIndex(
          (item) => state.searchType === item.typeName
        );
        state.typeList[index].displayStatus = "";

        index = state.typeList.findIndex(
          (item) => action.payload === item.typeName
        );
        state.typeList[index].displayStatus = "active";
        state.searchType = action.payload;
      }
    },
    changeSearchProducer: (state, action) => {
      if (state.searchProducer !== action.payload) {
        let index = state.producerList.findIndex(
          (item) => state.searchProducer === item.producerName
        );

        state.producerList[index].displayStatus = "";

        index = state.producerList.findIndex(
          (item) => action.payload === item.producerName
        );
        state.producerList[index].displayStatus = "active";
        state.searchProducer = action.payload;
      }
   
    },
    changeSearchPrice: (state, action) => {
      if (action.payload == "") {
        let index = state.priceList.findIndex(
          (item) => state.searchPrice === item.priceName
        );
        if (index >= 0) state.priceList[index].displayStatus = "";
      } else if (state.searchPrice !== action.payload) {
        let index = state.priceList.findIndex(
          (item) => state.searchPrice === item.priceName
        );
        if (index >= 0) state.priceList[index].displayStatus = "";

        index = state.priceList.findIndex(
          (item) => action.payload === item.priceName
        );
        state.priceList[index].displayStatus = "active";

        state.searchPrice = action.payload;
      }
    },
    changeSearchNecess: (state, action) => {
      if (state.searchNecess !== action.payload) {
        let index = state.NecessitiesList.findIndex(
          (item) => state.searchNecess === item.necessName
        );
        if (index >= 0) state.NecessitiesList[index].displayStatus = "";

        index = state.NecessitiesList.findIndex(
          (item) => action.payload === item.necessName
        );
        state.NecessitiesList[index].displayStatus = "active";

        state.searchNecess = action.payload;
      }
    },

    changeMidPrice: (state, action) => {
      state.searchMidPrice = action.payload;
    },
    changeMaxPrice: (state, action) => {
      state.searchMaxPrice = action.payload;
    },

    changeSearchWord: (state, action) => {
      state.searchWord = action.payload;
    },

    cleanSearchWords: (state, action) => {
      state.searchWord = "";
    },
    cleanProducerList: (state, action) => {
      state.producerList = [
        {
          producerName: "All",
          displayStatus: "active",
        },
      ];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategory.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.producerList = [];
      state.producerList.push({
        producerName: "All",
        displayStatus: "active",
      });
      if (state.typeList.length === 1) {
        action.payload.forEach((value, key) => {
          const newObj = {
            typeName: value.name,
            displayStatus: "",
          };
          state.typeList.push(newObj);
        });
      }
    });

    builder.addCase(getCategory.rejected, (state) => {
      state.loading = false;
    });
    /////////////////////////////////////////////////////////
    builder.addCase(getProducerList.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getProducerList.fulfilled, (state, action) => {
      state.producerList = [];
      state.producerList.push({
        producerName: "All",
        displayStatus: "active",
      });
      action.payload.forEach((item) => {
        const newItem = {
          producerName: item,
          displayStatus: "",
        };
        state.producerList.push(newItem);
      });
      state.loading = false;
    });

    builder.addCase(getProducerList.rejected, (state) => {
      state.loading = false;
    });

    ////////////////////////////////////////////////////////////////
    builder.addCase(filterWithWord.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(filterWithWord.fulfilled, (state, action) => {
      state.searchAuction = action.payload["List Auction"];
      state.searchProduct = action.payload["List Product"];
      state.loading = false;
    });

    builder.addCase(filterWithWord.rejected, (state) => {
      state.loading = false;
    });

    /////////////////////////////////////////////////////////////////
    builder.addCase(fullSearch.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(fullSearch.fulfilled, (state, action) => {
      state.searchAuction = action.payload["Products on auction"];
      state.searchProduct = action.payload["Products is selling on page"];
      state.loading = false;
    });

    builder.addCase(fullSearch.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const {
  changeSearchType,
  changeSearchProducer,
  changeSearchPrice,
  changeSearchNecess,
  changeMidPrice,
  changeMaxPrice,
  changeSearchWord,
  getCategoryForFilter,
  cleanSearchWords,
  cleanProducerList,
} = filterSlice.actions;

export default filterSlice.reducer;
