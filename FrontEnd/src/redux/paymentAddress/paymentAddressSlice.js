import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getDistrictUrl, getWardUrl } from '../../util/constants/addressApiUrl';
import  axios  from 'axios';

const initialState = {
    districtList: [],
    wardList: [],
    addressList: [
        {
            id: 1,
            name: 'Nguyễn Văn A',
            phonenumber: '011111111',
            cityprovince: {name: 'TP Hồ Chí Minh', code:79 } ,
            district: {name: 'Quận 9', code:769 },
            ward: {name: 'Phường Tăng Nhơn Phú A', code:26842 },
            addrDetail: '484 Lê Văn Việt',
            chosen: true
        },
        {
            id: 2,
            name: 'Nguyễn Văn B',
            phonenumber: '011111112',
            cityprovince: {name: 'TP Hồ Chí Minh', code:79 },
            district: {name: 'Quận 9', code:769 } ,
            ward: {name: 'Phường Tăng Nhơn Phú A', code:26842 } ,
            addrDetail: '484 Lê Văn Việt',
            chosen: false
        },
    ],
    chosenAddress: {
        id: 1,
        name: 'Nguyễn Văn A',
        phonenumber: '011111111',
        cityprovince: {name: 'TP Hồ Chí Minh', code:79 },
        district: {name: 'Quận 9', code:769 } ,
        ward: {name: 'Phường Tăng Nhơn Phú A', code:26842 } ,
        addrDetail: '484 Lê Văn Việt',
        chosen: true
    },
    addingMoreAddress: false,
    loading:false
};

export const getdistrictList = createAsyncThunk('process/getdistrictList',
    async (id) => {
        const res = await axios.get(getDistrictUrl(id))
        return res.data.data.data
    }
)

export const getWardList = createAsyncThunk('process/getWardList',
    async (id) => {
        const res = await axios.get(getWardUrl(id))
        return res.data.data.data
    }
)

export const changeAddressDetail = createAsyncThunk('process/changeAddressDetail',
    async (formChangedBody) => {
        const res = await axios.get(getDistrictUrl(79))
        return formChangedBody
    }
)

export const addNewAddressDetail = createAsyncThunk('process/addNewAddressDetail',
    async (formChangedBody) => {
        const res = await axios.get(getDistrictUrl(79))
        return formChangedBody
    }
)

export const deleteAddressDetail = createAsyncThunk('process/deleteAddressDetail',
    async (id) => {
        const res = await axios.get(getDistrictUrl(79))
        return id
    }
)

export const paymentAddressSlice = createSlice({
    name:"paymentAddress",
    initialState,
    reducers: {
        changeChosenAddress: (state,action) => {
            
            let index = state.addressList.findIndex((address) => address.id === state.chosenAddress.id)
            if(index >= 0) state.addressList[index].chosen = false

            index = state.addressList.findIndex((address) => address.id === action.payload)
            if(index >= 0) state.addressList[index].chosen = true

            if(index >= 0) state.chosenAddress = state.addressList[index]
            
             state.addingMoreAddress = false
        },

        chooseAddMoreAddress: (state) => {
            let index = state.addressList.findIndex((address) => address.id === state.chosenAddress.id)
            if(index >= 0) state.addressList[index].chosen = false

            state.chosenAddress = {
                id: -1,
                name: '',
                phonenumber: '',
                cityprovince: {name: '', code:0 },
                district: {name: '', code:0 } ,
                ward: {name: '', code:0 } ,
                addrDetail: '',
                chosen: false
            }
            state.addingMoreAddress = true
        }
    },
    extraReducers: (builder) => {
        ////////////////////////////////////////////   
        builder.addCase(getdistrictList.pending, (state,action) => {
            state.loading = true
        })

        builder.addCase(getdistrictList.fulfilled, (state,action) => {
            state.districtList = action.payload.map((district) => {
                return {
                    label: district.name_with_type,
                    value: district.code
                }
            })
            state.loading = false
        })

        builder.addCase(getdistrictList.rejected, (state) => {
            state.loading = false
        })

        ////////////////////////////////////////////   

        builder.addCase(getWardList.pending, (state) => {
            state.loading = true
        })
        
        builder.addCase(getWardList.fulfilled, (state,action) => {
            state.wardList = action.payload.map((ward) => {
                return {
                    label: ward.name_with_type,
                    value: ward.code
                }
            })
            state.loading = false
        })

        builder.addCase(getWardList.rejected, (state) => {
            state.loading = false
        })

        ////////////////////////////////////////////    
        builder.addCase(changeAddressDetail.pending, (state) => {
            state.loading = true
        })

        builder.addCase(changeAddressDetail.fulfilled, (state,action) => {
            state.loading = true

            //test Code phai chinh sua sau khi co api
        
            let index = state.addressList.findIndex((address) => address.id === state.chosenAddress.id)
            if(index >= 0) {
                state.addressList[index] = action.payload
                state.chosenAddress = state.addressList[index]
            }
        })

        builder.addCase(changeAddressDetail.rejected, (state) => {
            state.loading = false
        })

        ////////////////////////////////////////////    
        builder.addCase(addNewAddressDetail.pending, (state) => {
            state.loading = true
        })

        builder.addCase(addNewAddressDetail.fulfilled, (state,action) => {
            state.loading = true

            //test Code phai chinh sua sau khi co api
            const newAddress = action.payload
            newAddress.id = state.addressList.length + 1
            state.addingMoreAddress = false
            state.addressList.push(newAddress)
            state.chosenAddress = newAddress
        })

        builder.addCase(addNewAddressDetail.rejected, (state) => {
            state.loading = false
        })

        ////////////////////////////////////////////    
        builder.addCase(deleteAddressDetail.pending, (state) => {
            state.loading = true
        })

        builder.addCase(deleteAddressDetail.fulfilled, (state,action) => {
            state.loading = true
  
            //test Code phai chinh sua sau khi co api
            if(state.chosenAddress.id === action.payload){
     
                let index = state.addressList.findIndex((address) => address.id === action.payload)
                state.addressList.pop(index)

                if(state.addressList.length > 0){
                    state.addressList[0].chosen = true
                    state.chosenAddress = state.addressList[0]
                } else {
               
                    state.chosenAddress = {
                        id: -1,
                        name: '',
                        phonenumber: '',
                        cityprovince: {name: '', code:0 },
                        district: {name: '', code:0 } ,
                        ward: {name: '', code:0 } ,
                        addrDetail: '',
                        chosen: true
                    }
                    
                }
            }else {
                let index = state.addressList.findIndex((address) => address.id === action.payload)
                state.addressList.pop(index)
            }
        })

        builder.addCase(deleteAddressDetail.rejected, (state) => {
            state.loading = false
        })
    }
})

export const { changeChosenAddress, chooseAddMoreAddress } = paymentAddressSlice.actions


export default paymentAddressSlice.reducer