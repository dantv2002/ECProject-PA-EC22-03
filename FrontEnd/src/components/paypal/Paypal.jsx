import React from 'react'

import { PayPalButtons } from "@paypal/react-paypal-js";
import { useDispatch } from 'react-redux';
import { ReturnCartToBasic } from '../../redux/cart/cartSlice';

export const Paypal = ({ description, value, paymentSuccess ,closeModal }) => {
    const dispatch = useDispatch()


    return (
        <PayPalButtons
            createOrder={(data, action ) => {
                return action.order.create({
                    purchase_units: [
                        {
                            description: description,
                            amount: {
                                value: value
                            }
                        }
                    ]
                })
            }} 
            onApprove = {async (data,action) => {
                const order = await action.order.capture()
                paymentSuccess(true)
                closeModal(false)
                dispatch(ReturnCartToBasic())
            }}
            onError = {err => {
                console.log(err)
            }}
        />
    )
}
