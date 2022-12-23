import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import  axios  from 'axios';
import { addAddressUrl, deleteAddressUrl, getAddressListUrl, getDistrictUrl, getWardUrl, updateAddressUrl } from '../../util/constants/mainUrl';
import { poppupNoti } from '../../util/notification/Notification';

const initialState = {
    districtList: [],
    wardList: [],
    addressList: [
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
    async () => {
        const res = await axios.get(getDistrictUrl(),  {'headers': {'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')}})
        return res.data.data
    }
)

export const getWardList = createAsyncThunk('process/getWardList',
    async (id) => {
        const res = await axios.get(getWardUrl(id),  {'headers': {'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')}})
        return res.data.data
    }
)

export const getAddressList = createAsyncThunk('process/getAddress',
    async (accountName) => {
        const res = await axios.get(getAddressListUrl(accountName),  {'headers': {'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')}})
        return res.data.data
    }
)


export const changeAddressDetail = createAsyncThunk('process/changeAddressDetail',
    async (obj) => {

        const res = await axios.put(updateAddressUrl(obj.id),obj.newFormValue,{'headers': {'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')}})
        return res.data.data
    }
)

export const addNewAddressDetail = createAsyncThunk('process/addNewAddressDetail',
    async (formChangedBody) => {
        const res = await axios.post(addAddressUrl(),formChangedBody,{'headers': {'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')}})
        return res.data.data
    }
)

export const deleteAddressDetail = createAsyncThunk('process/deleteAddressDetail',
    async (addressId) => {
        const res = await axios.delete(deleteAddressUrl(addressId),{'headers': {'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')}})
        return res.data.data
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
        builder.addCase(getAddressList.pending, (state,action) => {
            state.loading = true
        })

        builder.addCase(getAddressList.fulfilled, (state,action) => {
            console.log(action.payload)
            state.addressList = action.payload.map((address) => {
                return   {
                    id: address.idAddress,
                    name: address.receiver,
                    phonenumber: address.phoneNumber,
                    cityprovince: {name: 'TP Hồ Chí Minh', code:79 },
                    district: {name: address.nameDistrict, code:address.idDistrict } ,
                    ward: {name: address.nameWard, code:address.idWard } ,
                    addrDetail: address.addressDetail,
                    chosen: false
                }
            })
            state.chosenAddress = state.addressList[0]
            state.chosenAddress.chosen = true
            state.loading = false
        })

        builder.addCase(getAddressList.rejected, (state) => {
            state.loading = false
        })

        ////////////////////////////////////////////   
        builder.addCase(getdistrictList.pending, (state,action) => {
            state.loading = true
        })

        builder.addCase(getdistrictList.fulfilled, (state,action) => {
      
            state.districtList = action.payload.map((district) => {
                return {
                    label: district.name,
                    value: district.id
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
            console.log(action.payload)
            state.wardList = action.payload.map((ward) => {
                return {
                    label: ward.name,
                    value: ward.id
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
            console.log(action.payload)
            state.loading = true

            //test Code phai chinh sua sau khi co api
        
           
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

            state.addingMoreAddress = false
          
            poppupNoti.addAddressSuccess()
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
            console.log(action.payload)
        })

        builder.addCase(deleteAddressDetail.rejected, (state) => {
            state.loading = false
        })
    }
})

export const { changeChosenAddress, chooseAddMoreAddress } = paymentAddressSlice.actions


export default paymentAddressSlice.reducer