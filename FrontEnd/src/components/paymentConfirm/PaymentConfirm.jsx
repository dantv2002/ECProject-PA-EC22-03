
import { Col, Radio, Row, Table } from 'antd';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {AutoIncrTotalPayment, changeDola, getShippingFeeList} from '../../redux/cart/cartSlice'



const columns = [
    {
        title: "Image",
        dataIndex: "image",
        render: (text) => <img src={text} style={{width:"80%"}} />,
        width: "10%",
      },
    {
        title: "Name",
        dataIndex: "name",
        render: (text) => {
            return <a className="name-tag">{text}</a>;
        },
        width: "30%",
    },
    {
        title: "Seller",
        dataIndex: "seller",
        render: (text) => {
            return <a className="name-tag">{text}</a>;
        },
        width: "30%",
    },
    {
        title: "Quantity",
        dataIndex: "quantity",
        width: "10%",
        className: "quantity",
        render: (text) => <span className="quantity-number">{text}</span>,
    },
    {
        title: "Price",
        dataIndex: "price",
        width: "20%",
        className: "price",
        render: (text) => (
            <span className="price-number">{text.toLocaleString()} VND</span>
        ),
    },

];


export const PaymentConfirm = () => {
    const dispatch = useDispatch()

    const { buyList, totalAmount,shippingFee,totalPayment } = useSelector((store) => store.cart);
    const {chosenAddress} = useSelector(store => store.paymentAddress)

    useEffect(() => {
      
        const a = buyList.map((item) => {
            return item.auctionId
        })
      
            dispatch(getShippingFeeList(a))
            
    },[])
    useEffect(() => {
        dispatch(changeDola(totalPayment))
    },[totalPayment])

    return (
        <div className="payment-confirm-container">
            <div className="first-row">
                <Row gutter={200}>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <div className="payment-methods">
                            <h1>Payment Methods</h1>
                            <div className="radio-check-box">
                                <Radio checked={true} className="payment-raido">
                                    <div className="paypal-icon"><img src="./paypal-icon.png" /></div>
                                    <div className="radio-info">
                                        <h2>Payment by</h2>
                                        <p>Paypal Sanbox</p>
                                    </div>
                                </Radio>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <div className="address-chosen">
                            <h1>Delivery Address</h1>
                            <div className="address-container">
                                <div className='address'>
                                    <span className="full-name">{chosenAddress.name}</span>
                                    <span className='address-detail'>{`Address: ${chosenAddress.addrDetail}, ${chosenAddress.ward.name}, ${chosenAddress.district.name}, ${chosenAddress.cityprovince.name}`}</span>
                                    <span className='phone-number'>Phone Number: {chosenAddress.phonenumber}</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="second-row">
                <Table
                    
                    columns={columns}
                    dataSource={buyList}
                    className="payment-cart-detail-table"
                    pagination={false}
                />

                <div className="payment-detail">
                    <div className='payment-detail-container'>
                        <div className='total-mount'>
                            <span>Total Amount:</span>
                            <span>{totalAmount.toLocaleString()}VND</span>
                        </div>
                        <div className='shipping-fee'>
                            <span>Shipping Fee:</span>
                            <span>{shippingFee.toLocaleString()}VND</span>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}
