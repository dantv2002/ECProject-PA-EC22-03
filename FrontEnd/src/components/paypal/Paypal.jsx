import React from 'react'

import { PayPalButtons } from "@paypal/react-paypal-js";
import { useDispatch, useSelector } from 'react-redux';
import { createOrder, ReturnCartToBasic } from '../../redux/cart/cartSlice';

export const Paypal = ({ description, value, paymentSuccess ,closeModal }) => {
    const dispatch = useDispatch()
    const {buyList} = useSelector(store => store.cart)

    return (
        <PayPalButtons
            createOrder={(data, action ) => {
                return action.order.create({
                    purchase_units: [
                        {
                            description: description,
                            amount: {
                                value: Math.round(value)
                            }
                        }
                    ]
                })
            }} 
            onApprove = {async (data,action) => {
                const order = await action.order.capture()
                paymentSuccess(true)
                closeModal(false)
                const a = buyList.map((item) => {
                    return item.auctionId
                })
                dispatch(createOrder(a))
                dispatch(ReturnCartToBasic())
                
            }}
            onError = {err => {
                console.log(err)
            }}
        />
    )
}
