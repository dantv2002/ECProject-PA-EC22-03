import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductDrawer from '../../../../components/productDrawer/ProductDrawer'
import StoreTable from '../../../../components/storeTable/StoreTable'
import { getAllCategory, getAllProduct } from '../../../../redux/userStore/UserStoreSlice'

export const AllProduct = () => {
    const dispatch = useDispatch()
    const [drawerStatus, setDrawerStatus] = useState(false)
    const [drawerData, setDrawerData] = useState({})

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
        <ProductDrawer drawerStatus={drawerStatus} drawerData={drawerData} showDrawer={showDrawer} onClose={onClose} onFinish={onFinish}/>
        <Button type="primary" onClick={showDrawer}>Add Item</Button>
        <StoreTable setDrawerData={setDrawerData} showDrawer={showDrawer}/>
    </div>
  )
}
