import React, { useState } from 'react'
import ProductDrawer from '../../../../components/productDrawer/ProductDrawer'
import StoreTable from '../../../../components/storeTable/StoreTable'

export const AllProduct = () => {
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
  return (
    <div>
        <ProductDrawer drawerStatus={drawerStatus} drawerData={drawerData} showDrawer={showDrawer} onClose={onClose} onFinish={onFinish}/>
        <button onClick={showDrawer}>Add Item</button>
        <StoreTable/>
    </div>
  )
}
