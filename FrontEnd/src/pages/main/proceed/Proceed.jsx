import React, { useState } from "react";
import { HeaderOnlyLogo } from "../../../components/header/HeaderOnlyLogo";
import { ProceedStep } from "../../../components/proceedstep/ProceedStep";
import { CartDetail } from "./../../../components/cartdetail/CartDetail";
import { Button, message, Result, Steps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { PaymentAddress } from "../../../components/paymentAddress/PaymentAddress";
import { Footer } from "../../../components/footer/Footer";
import { PaymentConfirm } from "../../../components/paymentConfirm/PaymentConfirm";
import { CusModal } from "../../../util/modal/CusModal";
import { Paypal } from "../../../components/paypal/Paypal";
import CurrencyConverter from 'react-currency-conv';

import { AutoDecrTotalPayment } from '../../../redux/cart/cartSlice'
import { poppupNoti } from "../../../util/notification/Notification";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getAddressList } from "../../../redux/paymentAddress/paymentAddressSlice";


const steps = [
  {
    title: "Cart",
    content: <CartDetail />,
  },
  {
    title: "Delivery Address",
    content: <PaymentAddress />,
  },
  {
    title: "Payment & Confirm",
    content: <PaymentConfirm />,
  },
];

export const Proceed = () => {
  const [current, setCurrent] = useState(0);
  const { totalPayment, dolaCurrnt } = useSelector(store => store.cart)
  const { addingMoreAddress } = useSelector(store => store.paymentAddress)
  const [modalStatus, setModalStatus] = useState(false)
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleModalCancel = () => {
    setModalStatus(false)
    poppupNoti.paymentFail()
   
  }

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  useEffect(() => {
    dispatch(AutoDecrTotalPayment())
  
    dispatch(getAddressList(sessionStorage.getItem('accountName')))
 
  }, [])

  console.log(dolaCurrnt)
  return (
    <div>
      <HeaderOnlyLogo />

      <CusModal status={modalStatus} handleCancel={handleModalCancel}>
        <Paypal description="Auction Recipt" value={dolaCurrnt} paymentSuccess={setIsPaymentSuccess} closeModal={setModalStatus}/>
      </CusModal>
      {isPaymentSuccess ?
        <div>
          <Result
            status="success"
            title="Successfully Purchased "
            subTitle="Order number: 1011, Your order have been placed "
            extra={[
              <button 
                className="main-button" 
                key="console"
                onClick={() => navigate('/')}
              >
                Continue Shopping
              </button>,
              <button 
                key="buy" 
                className="second-button"
                onClick={() => navigate('/')}
              >
                Order Tracking
              </button>,
            ]}
          />
        </div>
        :
        <div className="proceed-container">
          <ProceedStep current={current} setCurrent={setCurrent} steps={steps} />


          <div className="final-total">
            <span>Total Payment:</span>
            <span className="total-number">{totalPayment.toLocaleString()} VND</span>
          </div>

          <div className="steps-action">
            {current > 0 && (
              <button
                style={{
                  margin: "0 8px",
                }}
                onClick={() => {
                  prev()
                  if (current === steps.length - 1)
                    dispatch(AutoDecrTotalPayment())
                }}
                className="second-button"
              >
                Previous
              </button>
            )}
            {current < steps.length - 1 && (
              <button className="main-button" disabled={totalPayment <= 0 ? true : addingMoreAddress === false ? false : true} onClick={() => next()}>
                Next
              </button>
            )}

            {current === steps.length - 1 && (
              <button
                className="main-button"
                onClick={() => {
                  setModalStatus(true)
                }}
              >
                {`Pay & Confirm`}
              </button>
            )}
          </div>
        </div>
      }

      <Footer />
    </div>
  );
};
