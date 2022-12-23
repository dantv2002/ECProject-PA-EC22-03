import { Button, Col, Input, Row, Space, Table } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AdminProductModal from '../../../components/admin/adminProductModal/AdminProductModal'
import { ProducerTable } from '../../../components/admin/producerTable/ProducerTable'
import { ProductTypeTable } from '../../../components/admin/productTypeTable/ProductTypeTable'
import { getcategory } from '../../../redux/home/HomeSlice'



export const ProductDirectory = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [actionType, setActionType] = useState("");
    const [modalType, setModalType] = useState("");
    const [clickedCategory, setClickedCategory] = useState({})

    useEffect(() => {
        if(sessionStorage.getItem("adminName") === null) navigate("/admin")
        dispatch(getcategory())
    },[])
  return (
    <div className="directory-container">
        <div>
            <AdminProductModal clickedCategory={clickedCategory} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} actionType={actionType} modalType={modalType}/>
            <Row gutter={48}>
                <Col span={12}>
                    <ProductTypeTable setClickedCategory={setClickedCategory} setIsModalOpen={setIsModalOpen} setActionType={setActionType} setModalType={setModalType}/>

                </Col>
                <Col span={12}>
                    <ProducerTable  setIsModalOpen={setIsModalOpen} setActionType={setActionType} setModalType={setModalType}/>
                </Col>
            </Row>
        </div>
    </div>
  )
}
