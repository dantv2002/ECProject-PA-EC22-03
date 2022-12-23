import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductDrawer from '../../../../components/productDrawer/ProductDrawer'
import StoreTable from '../../../../components/storeTable/StoreTable'
import { getAllCategory, getAllProduct } from '../../../../redux/userStore/UserStoreSlice'
import AddItemModal from './../../../../components/addItemModal/AddItemModal';

export const AllProduct = () => {
    const dispatch = useDispatch()
    const [drawerStatus, setDrawerStatus] = useState(false)
    const [drawerData, setDrawerData] = useState({})
    const [modalType, setModalType] = useState("Add")

    const showDrawer = () => {
        setDrawerStatus(true);
      };
      const onClose = () => {
        setDrawerStatus(false);
      };
    const onFinish = (data) => {
        console.log(data)
        
    }
    useEffect(() => {
      dispatch(getAllProduct())
      dispatch(getAllCategory())
    },[])
  return (
    <div>
        <AddItemModal modalType={modalType} drawerStatus={drawerStatus} drawerData={drawerData} showDrawer={showDrawer} onClose={onClose} onFinish={onFinish}/>
        
        <Button type="primary" onClick={() => {
          showDrawer()
          setModalType("Add")
        }}>Add Item</Button>
        <StoreTable setDrawerData={setDrawerData} showDrawer={showDrawer}/>
    </div>
  )
}
